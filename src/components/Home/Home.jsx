import React, { useEffect, useState } from 'react';
import { Grid, Hidden } from '@material-ui/core';
import Post from '../Post/Post';
import useStyles from './HomeStyle';
import ScrollToTop from './../ScrollToTop/ScrollToTop';
import Suggestions from '../SuggestionsForYou/Suggestions';

const Home = ({ clearToken, posts }) => {
  const classes = useStyles();

  return (
    <div>
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
          <Suggestions />
        </Grid>
        <Hidden mdDown>
          <Grid item lg={2}></Grid>
        </Hidden>
      </Grid>
      <ScrollToTop />
    </div>
  );
};

export default Home;
