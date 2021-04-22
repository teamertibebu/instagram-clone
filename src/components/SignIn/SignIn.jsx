import {
  Button,
  Grid,
  TextField,
  InputAdornment,
  Typography,
  Hidden,
  IconButton,
} from '@material-ui/core';
import { useState } from 'react';
import axios from 'axios';
import loginUser from '../HelperFunctions/loginUser.js';
import useStyles from './SignInStyle';
import brandImg from '../../brand.png';
import logo from '../../logo.png';
import {
  AccountCircle,
  LockRounded,
  Visibility,
  VisibilityOff,
} from '@material-ui/icons';

const SignIn = ({ setToken, setForm }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [loginSuccess, setLoginSuccess] = useState();
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const classes = useStyles();
  localStorage.setItem('username', username);

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post('/signIn', { username, password })
      .then(({ data }) => data)
      .then(({ passwordCorrect, usernameFound }) => {
        if (usernameFound && passwordCorrect) {
          loginUser({}, setToken);
        } else {
          setLoginSuccess(false);
        }
      });
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
              autoComplete="new-password"
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
                    >
                      {passwordVisibility ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div style={{ height: '20px' }} />
            <Button
              type="submit"
              color="primary"
              variant="contained"
              onClick={handleLogin}
            >
              Login
            </Button>
            <div style={{ height: '20px' }} />
            <Button color="primary" onClick={() => setForm('createAccount')}>
              Create Account
            </Button>
            <div style={{ height: '20px' }} />
            {loginSuccess === false ? (
              <div style={{ height: '20px', textAlign: 'center' }}>
                <Typography color="error">
                  Login Unsuccessful. Please try again.
                </Typography>
              </div>
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

export default SignIn;
