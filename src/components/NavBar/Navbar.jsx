import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Grid,
  Menu,
  MenuItem,
  TextField,
  InputAdornment,
  Hidden,
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';

import useStyles from './NavBarStyle';
import Logo from './../../logo.png';
import Icons from '../Icons/Icons.jsx';

const Navbar = ({ clearToken, setPosts }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
      setViewportHeight(window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <Grid container>
          <Grid item lg={1}></Grid>
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems={viewportWidth < 600 ? 'flex-start' : 'center'}
            xl={3}
            lg={3}
            md={4}
            sm={3}
            xs={1}
          >
            <img
              src={Logo}
              alt="Instagram Logo"
              className={classes.logo}
              onClick={() =>
                window.location.href.includes('home')
                  ? window.scrollTo({ top: 0, behavior: 'smooth' })
                  : history.push('/home')
              }
            />
          </Grid>
          <Grid
            item
            container
            direction="column"
            justify="center"
            alignItems="center"
            xl={2}
            lg={3}
            md={3}
            sm={4}
            xs={6}
          >
            <Hidden xsDown>
              <TextField
                variant="outlined"
                size="small"
                placeholder=" Search..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment>
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </Hidden>
          </Grid>
          <Icons
            viewportWidth={viewportWidth}
            setPosts={setPosts}
            setAnchorEl={setAnchorEl}
          />
          <Grid item xl={3} lg={3} md={2} sm={1}></Grid>
        </Grid>
        <Menu
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={Boolean(anchorEl)}
          onClose={() => setAnchorEl(null)}
        >
          <MenuItem
            onClick={() => {
              setAnchorEl(null);
              history.push('/profile');
            }}
          >
            Profile
          </MenuItem>
          <MenuItem onClick={() => setAnchorEl(null)}>My Account</MenuItem>
          <MenuItem onClick={() => clearToken()}>Sign Out</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
