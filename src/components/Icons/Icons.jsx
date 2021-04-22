import React, { useState } from 'react';
import { Grid, Hidden, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AddBoxIcon from '@material-ui/icons/AddBox';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import AddPost from '../AddPost/AddPost';

const Icons = ({ viewportWidth, setPosts, setAnchorEl, setMenuBarAnchor }) => {
  const [open, setOpen] = useState(false);

  return (
    <Grid
      item
      container
      justify={viewportWidth < 1920 ? 'space-evenly' : 'center'}
      xl={3}
      lg={2}
      md={3}
      sm={4}
      xs={5}
    >
      <Grid item xs={1}>
        <IconButton onClick={() => setOpen(true)}>
          <AddBoxIcon />
        </IconButton>
        <AddPost setOpen={setOpen} open={open} setPosts={setPosts} />
      </Grid>
      <Grid item xs={1}>
        <IconButton>
          <HomeIcon />
        </IconButton>
      </Grid>
      <Grid item xs={1}>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
      </Grid>
      <Grid item xs={1}>
        <IconButton>
          <EmailIcon />
        </IconButton>
      </Grid>
      <Grid item xs={1}>
        <IconButton>
          <AccountCircleIcon onClick={(e) => setAnchorEl(e.currentTarget)} />
        </IconButton>
      </Grid>
      <Hidden xsUp>
        <Grid item xs={12} align="right">
          <IconButton>
            <MenuIcon onClick={(e) => setMenuBarAnchor(e.currentTarget)} />
          </IconButton>
        </Grid>
      </Hidden>
    </Grid>
  );
};

export default Icons;
