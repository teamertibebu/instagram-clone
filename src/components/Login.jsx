import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import axios from 'axios';

const useStyles = makeStyles((styles) => ({
  profileImage: {
    width: '100%',
    height: '100%',
  },
  imageContainer: {
    width: '25%',
    height: '25%',
  },
}));

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

async function createUserAccount(info) {
  return axios
    .post('http://localhost:8080/createAccount', info)
    .then(({ data }) => data);
}

const Login = ({ setToken }) => {
  const [username, setUserName] = useState('@');
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [image, setImage] = useState();
  const [userAvailable, setUserAvailable] = useState(true);

  const classes = useStyles();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);

    const haha = await createUserAccount({ username, password, email, image });
    setUserAvailable(haha.available);
    setUserAvailable(true);
    console.log(haha);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  return (
    <div className="login-wrapper">
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input
            type="text"
            required
            onInvalid={() => "alert('You must fill out the form!')"}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <p>E-Mail</p>
          <input
            required
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <div className={classes.imageContainer}>
          <img src={image} alt="" className={classes.profileImage} />
        </div>
        <label>
          <p>Profile Image</p>
          <input type="file" onChange={handleImageUpload} />
        </label>
        <div>
          {userAvailable ? (
            <button type="submit">Submit</button>
          ) : (
            <button type="submit" disabled>
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default Login;
