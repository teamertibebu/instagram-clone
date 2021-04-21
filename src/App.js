import './App.css';
import { useState } from 'react';
import Home from './components/Home/Home.jsx';
import CreateAccount from './components/CreateAccount/CreateAccount';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import useToken from './components/useToken.js';
import SignIn from './components/SignIn/SignIn';

const App = () => {
  const { token, setToken, clearToken } = useToken();
  const [form, setForm] = useState('signIn');

  if (!token) {
    return form === 'signIn' ? (
      <SignIn setToken={setToken} setForm={setForm} />
    ) : (
      <CreateAccount setToken={setToken} setForm={setForm} />
    );
  }

  return (
    <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home clearToken={clearToken} />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
