import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import useToken from './components/useToken.js';

const App = () => {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="wrapper">
      <Home />
      <BrowserRouter>
        <Switch>
          <Route path="/home"></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
