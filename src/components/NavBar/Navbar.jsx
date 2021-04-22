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
  IconButton,
} from '@material-ui/core';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';

import useStyles from './NavBarStyle';
import Logo from './../../logo.png';
import Icons from '../Icons/Icons.jsx';

const Navbar = ({ clearToken, setPosts }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuBarAnchor, setMenuBarAnchor] = useState();
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  console.log(viewportWidth);
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
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
            alignItems={viewportWidth < 600 ? 'left' : 'center'}
            xl={3}
            lg={3}
            md={4}
            sm={3}
            xs={4}
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
          </Grid>
          <Icons
            viewportWidth={viewportWidth}
            setPosts={setPosts}
            setAnchorEl={setAnchorEl}
            setMenuBarAnchor={setMenuBarAnchor}
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
        <Menu
          anchorEl={menuBarAnchor}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={Boolean(menuBarAnchor)}
          onClose={() => setMenuBarAnchor(null)}
        >
          <MenuItem>
            <AddBoxIcon />
            Post
          </MenuItem>
          <MenuItem>
            <HomeIcon />
            Home
          </MenuItem>
          <MenuItem>
            <FavoriteIcon />
            Likes
          </MenuItem>
          <MenuItem>
            <EmailIcon /> Messages
          </MenuItem>
          <MenuItem>
            <AccountCircleIcon />
            Account
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
