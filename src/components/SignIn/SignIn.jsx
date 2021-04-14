import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { useState } from 'react';
import axios from 'axios';
import loginUser from '../HelperFunctions/loginUser.js';

const useStyles = makeStyles((styles) => ({
  input: {
    display: 'block',
  },
}));

const SignIn = ({ setToken, setForm }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  let [loginSuccess, setLoginSuccess] = useState();

  const handleLoginIn = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8080/signIn', { username, password })
      .then(({ data }) => data)
      .then(({ passwordCorrect, usernameFound }) => {
        if (usernameFound && passwordCorrect) {
          loginUser({}, setToken);
        } else {
          setLoginSuccess(false);
        }
      });
  };

  const classes = useStyles();

  return (
    <div>
      <h1>Sign In</h1>
      <form onSubmit={handleLoginIn}>
        <div className={classes.input}>
          <label htmlFor="username">
            <p>Username</p>
            <input
              type="text"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>
        <div className={classes.input}>
          <label htmlFor="password">
            <p>Password</p>
            <input
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">Sign In</button>
      </form>
      <Button color="primary" onClick={() => setForm('createAccount')}>
        Create Account
      </Button>
      {loginSuccess === false ? (
        <p>Login Unsuccessful. Please try again.</p>
      ) : null}
    </div>
  );
};

export default SignIn;
