import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import useStyles from './CreateAccountStyle';
import SignIn from '../Login/SignIn.jsx';
import loginUser from '../HelperFunctions/loginUser.js';

async function createUserAccount(info) {
  return axios
    .post('http://localhost:8080/createAccount', info)
    .then(({ data }) => data);
}

const CreateAccount = ({ setToken }) => {
  const [username, setUserName] = useState('@');
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [image, setImage] = useState();
  const [userAvailable, setUserAvailable] = useState();

  const classes = useStyles();

  useEffect(() => {
    if (userAvailable) {
      loginUser(
        {
          username,
          password,
        },
        setToken
      );
    }
  }, [userAvailable, username, password, setToken]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { available } = await createUserAccount({
      username,
      password,
      email,
      image,
    });
    setUserAvailable(available);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  return (
    <div className="login-wrapper">
      <SignIn setToken={setToken} />
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
          <button type="submit">Submit</button>
        </div>
        {userAvailable === false ? (
          <p style={{ color: 'red' }}>
            Username is not available. Please try another.
          </p>
        ) : null}
      </form>
    </div>
  );
};

CreateAccount.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default CreateAccount;
