import React, { useEffect, useState } from 'react';
import { Grid, Hidden } from '@material-ui/core';
import Navbar from '../NavBar/Navbar';
import Post from '../Post/Post';
import useStyles from './HomeStyle';
import axios from 'axios';

const Home = ({ clearToken }) => {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('/getAllPosts').then(({ data }) => {
      data.forEach((post) => {
        post.createdAt = new Date(post.createdAt);
      });

      data = data.sort((a, b) => {
        const timeb = b.createdAt.getTime();
        const timea = a.createdAt.getTime();

        return timeb - timea;
      });

      setPosts(data);
    });
  }, []);

  return (
    <div>
      <Navbar clearToken={clearToken} setPosts={setPosts} />
      <Grid container className={classes.postContainer} spacing={2}>
        <Hidden mdDown>
          <Grid item lg={2}></Grid>
        </Hidden>
        <Grid
          container
          spacing={0}
          direction="column"
          item
          lg={5}
          md={6}
          sm={10}
          xs={12}
          className={classes.feed}
        >
          {posts.map((post, i) => {
            return (
              <Grid item key={post + i}>
                <Post post={post} />
              </Grid>
            );
          })}
        </Grid>
        <Grid
          container
          direction="column"
          item
          lg={3}
          md={4}
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
        <Hidden mdDown>
          <Grid item lg={2}></Grid>
        </Hidden>
      </Grid>
    </div>
  );
};

export default Home;
