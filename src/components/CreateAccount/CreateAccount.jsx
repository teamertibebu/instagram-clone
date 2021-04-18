import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import useStyles from './CreateAccountStyle';
import SignIn from '../SignIn/SignIn.jsx';
import loginUser from '../HelperFunctions/loginUser.js';
import {
  Button,
  Grid,
  Typography,
  Hidden,
  TextField,
  InputAdornment,
  InputBase,
  Avatar,
} from '@material-ui/core';
import {
  AccountCircle,
  LockRounded,
  AlternateEmail,
  PhotoLibrary,
} from '@material-ui/icons';
import brandImg from '../../brand.png';
import logo from '../../logo.png';

async function createUserAccount(info) {
  return axios
    .post('http://localhost:8080/createAccount', info)
    .then(({ data }) => data);
}

const CreateAccount = ({ setToken, setForm }) => {
  const [username, setUsername] = useState('@');
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
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
    });
    setUserAvailable(available);
  };

  return (
    <div>
      <Grid container spacing={1} className={classes.topContainer}>
        <Hidden smDown>
          <Grid item md={6} className={classes.brandImageCont}>
            <img src={brandImg} className={classes.brandImage} alt="brand" />
          </Grid>
        </Hidden>
        <Grid
          container
          direction="column"
          item
          sm={12}
          md={6}
          className={classes.loginContainer}
        >
          <div />
          <div className={classes.formContainer}>
            <Grid container justify="center">
              <img src={logo} alt="logo" className={classes.logo} />
            </Grid>
            <TextField
              label="Username"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              label="Password"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <LockRounded />
                  </InputAdornment>
                ),
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              label="E-mail"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <AlternateEmail />
                  </InputAdornment>
                ),
              }}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div style={{ height: '20px' }} />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              onClick={handleSubmit}
            >
              Create Account
            </Button>
            <div style={{ height: '20px' }} />
            <Button color="primary" onClick={() => setForm('signIn')}>
              Login
            </Button>
            <div style={{ height: '20px' }} />
            {userAvailable === false ? (
              <p style={{ color: 'red' }}>
                Username is not available. Please try another.
              </p>
            ) : null}
          </div>
          <div />
          <Grid container justify="center" spacing={2}>
            <Grid item>
              <Button color="primary">Go To Community Page</Button>
            </Grid>
            <Grid item>
              <Button variant="outlined">Forgot Password?</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

CreateAccount.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default CreateAccount;
