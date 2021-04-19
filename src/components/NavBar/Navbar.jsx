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
  Modal,
  Backdrop,
  Fade,
} from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './NavBarStyle';
import ModalBody from './Modal/Modal';

const Navbar = ({ clearToken }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuBarAnchor, setMenuBarAnchor] = useState();
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
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
                      <AddBoxIcon onClick={handleOpen} />
                      <Modal
                        open={open}
                        onClose={handleClose}
                        BackdropComponent={Backdrop}
                        BackdropProps={{ timeout: 500 }}
                        closeAfterTransition
                      >
                        <Fade in={open} timeout={500}>
                          <ModalBody setOpen={setOpen} />
                        </Fade>
                      </Modal>
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
                      <AccountCircleIcon
                        onClick={(e) => setAnchorEl(e.currentTarget)}
                      />
                    </Grid>
                  </Hidden>
                  <Hidden mdUp>
                    <Grid item>
                      <MenuIcon
                        onClick={(e) => setMenuBarAnchor(e.currentTarget)}
                      />
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
              open={Boolean(anchorEl)}
              onClose={() => setAnchorEl(null)}
            >
              <MenuItem onClick={() => setAnchorEl(null)}>Profile</MenuItem>
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
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
