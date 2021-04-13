import './App.css';
import Home from './components/Home/Home.jsx';
import CreateAccount from './components/CreateAccount/CreateAccount';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import useToken from './components/useToken.js';

const App = () => {
  const { token, setToken, clearToken } = useToken();

  if (!token) {
    return <CreateAccount setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <Home clearToken={clearToken} />
      <BrowserRouter>
        <Switch>
          <Route path="/home"></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
