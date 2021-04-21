import React, { useState, useEffect } from 'react';
import { Button, Typography, Grid, IconButton } from '@material-ui/core';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import useStyles from './ScrollToTopStyle';

const ScrollToTop = () => {
  const [pos, setPos] = useState('top');
  const display = pos === 'top' ? 'none' : 'inline';

  const classes = useStyles();

  useEffect(() => {
    document.addEventListener('scroll', (e) => {
      let scrolled = document.scrollingElement.scrollTop;

      if (scrolled >= 1000) {
        setPos('moved');
      } else {
        setPos('top');
      }
    });
  });

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={classes.divContainer} style={{ display: display }}>
      <Grid container direction="column" align="center">
        <Grid item>
          <IconButton onClick={handleScroll} className={classes.iconButton}>
            <ExpandLessIcon className={classes.scrollButton} />
          </IconButton>
        </Grid>
      </Grid>
    </div>
  );
};

export default ScrollToTop;
