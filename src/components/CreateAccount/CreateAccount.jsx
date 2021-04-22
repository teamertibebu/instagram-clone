import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import useStyles from './CreateAccountStyle';
import loginUser from '../HelperFunctions/loginUser.js';
import {
  Button,
  Grid,
  Hidden,
  TextField,
  InputAdornment,
  Typography,
  IconButton,
} from '@material-ui/core';
import {
  AccountCircle,
  LockRounded,
  AlternateEmail,
  Visibility,
  VisibilityOff,
} from '@material-ui/icons';
import brandImg from '../../brand.png';
import logo from '../../logo.png';

async function createUserAccount(info) {
  return axios.post('/createAccount', info).then(({ data }) => data);
}

const CreateAccount = ({ setToken, setForm }) => {
  const [username, setUsername] = useState('@');
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [userAvailable, setUserAvailable] = useState();
  const [emailError, setEmailError] = useState();
  const [usernameError, setUsernameError] = useState();
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  localStorage.setItem('username', username);

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/gi;

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

    if (!email.match(emailRegex)) {
      setEmailError('Email Not Valid. ex. johndoe@gmail.com');
      return;
    } else {
      setEmailError(null);
    }

    const { available } = await createUserAccount({
      username,
      password,
      email,
    });

    setUserAvailable(available);

    if (!available) {
      setUsernameError('Username is not available. Please try another.');
    } else {
      setUsernameError(null);
    }
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

          <form className={classes.formContainer} onSubmit={handleSubmit}>
            <Grid container justify="center">
              <img src={logo} alt="logo" className={classes.logo} />
            </Grid>
            <TextField
              autoComplete="new-password"
              required
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
              autoComplete="new-password"
              required
              type={passwordVisibility ? null : 'password'}
              label="Password"
              margin="normal"
              InputProps={{
                startAdornment: (
                  <InputAdornment>
                    <LockRounded />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment>
                    <IconButton
                      onClick={() => setPasswordVisibility(!passwordVisibility)}
                      tabIndex="-1"
                    >
                      {passwordVisibility ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              required
              type="email"
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
            <Button type="submit" color="primary" variant="contained">
              Create Account
            </Button>
            <div style={{ height: '20px' }} />
            <Button color="primary" onClick={() => setForm('signIn')}>
              Login
            </Button>
            <div style={{ height: '20px' }} />
            {userAvailable === false ? (
              <Typography color="error">{usernameError}</Typography>
            ) : null}
            {emailError ? (
              <Typography color="error">{emailError}</Typography>
            ) : null}
          </form>
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
