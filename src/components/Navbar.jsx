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
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleAccount = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAcctClose = () => {
    setAnchorEl(null);
  };

  const useStyles = makeStyles((theme) => ({
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      width: '50%',
      paddingLeft: '25px',
      border: '1px solid lightgrey',
      backgroundColor: 'lightgrey',
      opacity: '50%',
      borderRadius: '10px',
    },
    searchIcon: {
      position: 'absolute',
      padding: theme.spacing(1.5, 0.2, 3, 13),
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
      paddingTop: '7px',
      // fontFamily: 'Arial',
    },
    iconContainer: {
      display: 'flex',
    },
    icons: {
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
            <Grid item xs={4}>
              <Typography variant="h6" noWrap className={classes.typo}>
                Instaclone
              </Typography>
            </Grid>
            <Grid item xs={4} className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                color="secondary"
                placeholder=" Search..."
                className={classes.inputInput}
              />
            </Grid>
            <Grid item xs={4} className={classes.iconContainer}>
              <Grid container spacing={0} className={classes.icons}>
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
              </Grid>
            </Grid>
          </Grid>
          <Menu
            // id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={open}
            onClose={handleAcctClose}
          >
            <MenuItem onClick={handleAcctClose}>Profile</MenuItem>
            <MenuItem onClick={handleAcctClose}>My Account</MenuItem>
          </Menu>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
