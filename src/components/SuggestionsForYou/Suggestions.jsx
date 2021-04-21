import { Grid, Hidden } from '@material-ui/core';
import useStyles from './SuggestionsStyle';

const Suggestions = () => {
  const classes = useStyles();

  return (
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
  );
};

export default Suggestions;
