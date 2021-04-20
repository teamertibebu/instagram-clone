import React, { useEffect, useState } from 'react';
import { Grid, Hidden } from '@material-ui/core';
import Navbar from '../NavBar/Navbar';
import Post from '../Post';
import useStyles from './HomeStyle';
import axios from 'axios';

const Home = ({ clearToken }) => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/getAllPosts').then(({ data }) => setPosts(data));
  }, []);

  return (
    <div>
      <Navbar clearToken={clearToken} setPosts={setPosts} />
      <Grid container className={classes.postContainer} spacing={2}>
        <Grid container direction="column" item lg={8} md={8} sm={10} xs={10}>
          {posts.map((post, i) => {
            return (
              <Grid item className={classes.post}>
                <Post post={post} />
              </Grid>
            );
          })}
        </Grid>
        <Grid
          container
          direction="column"
          item
          xl={3}
          lg={3}
          md={3}
          classes={{
            root: classes.root,
          }}
        >
          <Hidden smDown>
            <Grid className={classes.followers} item>
              <h3 align="left">Suggestions For You</h3>
              <div align="left">
                <p>Hey you should follow me!</p>
                <p>or maybe me</p>
                <p>i'm a cool person</p>
                <p>don't forget me</p>
                <p>save the best for last!</p>
              </div>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
