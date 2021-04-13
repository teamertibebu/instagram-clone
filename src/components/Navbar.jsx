import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  InputBase,
  Grid,
  Typography,
  Menu,
  MenuItem,
  Hidden,
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const Navbar = ({ clearToken }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuBarAnchor, setMenuBarAnchor] = useState();

  const open = Boolean(anchorEl);
  const openMenu = Boolean(menuBarAnchor);

  const handleAccount = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAcctClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    clearToken();
  };

  const handleMenuBar = (e) => {
    setMenuBarAnchor(e.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuBarAnchor(null);
  };

  const useStyles = makeStyles((theme) => ({
    inputInput: {
      padding: theme.spacing(0, 1, 0, 0),
      width: '50%',
      paddingLeft: '25px',
      border: '1px solid lightgrey',
      backgroundColor: 'lightgrey',
      opacity: '50%',
      borderRadius: '10px',
    },
    searchIcon: {
      position: 'absolute',
      padding: theme.spacing(0.5, 0.2, 3, 13),
      zIndex: '1',
    },
    search: {
      width: '30%',
    },
    appBar: {
      backgroundColor: 'white',
      position: 'fixed',
    },
    root: {
      flexGrow: '4',
      '&:hover': {
        background: 'none',
      },
    },
    typo: {
      paddingTop: '3px',
    },
    iconContainer: {
      display: 'flex',
    },
    icons: {
      minWidth: '200px',
      paddingTop: '7px',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
  }));

  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton className={classes.root} disableRipple>
          <Grid container spacing={10} className={classes.container}>
            <Hidden smDown>
              <Grid item lg={2} md={2} sm={3} xs={3}>
                <Typography variant="h6" noWrap className={classes.typo}>
                  Instaclone
                </Typography>
              </Grid>
            </Hidden>
            <Grid item lg={5} md={5} sm={6} xs={6} className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                color="secondary"
                placeholder=" Search..."
                className={classes.inputInput}
              />
            </Grid>
            <Grid
              item
              lg={5}
              md={5}
              sm={6}
              xs={3}
              className={classes.iconContainer}
            >
              <Grid container spacing={0} className={classes.icons}>
                <Hidden smDown>
                  <Grid item xs={1}>
                    <AddBoxIcon />
                  </Grid>
                  <Grid item xs={1}>
                    <HomeIcon />
                  </Grid>
                  <Grid item xs={1}>
                    <FavoriteIcon />
                  </Grid>
                  <Grid item xs={1}>
                    <EmailIcon />
                  </Grid>
                  <Grid item xs={1}>
                    <AccountCircleIcon onClick={handleAccount} />
                  </Grid>
                </Hidden>
                <Hidden mdUp>
                  <Grid item>
                    <MenuIcon onClick={handleMenuBar} />
                  </Grid>
                </Hidden>
              </Grid>
            </Grid>
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
            open={open}
            onClose={handleAcctClose}
          >
            <MenuItem onClick={handleAcctClose}>Profile</MenuItem>
            <MenuItem onClick={handleAcctClose}>My Account</MenuItem>
            <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
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
            open={openMenu}
            onClose={handleMenuClose}
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
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
