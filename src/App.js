import './App.css';
import { useState, useEffect } from 'react';
import Home from './components/Home/Home';
import CreateAccount from './components/CreateAccount/CreateAccount';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import useToken from './components/useToken';
import SignIn from './components/SignIn/SignIn';
import Profile from './components/Profile/Profile';
import Navbar from './components/NavBar/Navbar';
import axios from 'axios';
import sortPosts from './components/HelperFunctions/sortPosts';

const App = () => {
  const { token, setToken, clearToken } = useToken();
  const [form, setForm] = useState('signIn');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/getAllPosts').then(({ data }) => {
      sortPosts(setPosts, data);
    });
  }, []);

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
        <Navbar setPosts={setPosts} clearToken={clearToken} />
        <Switch>
          <Route exact path="/home">
            <Home clearToken={clearToken} posts={posts} />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
