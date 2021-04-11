import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar.jsx';
import Post from './components/Post.jsx';
import { Grid, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((styles) => ({
  postContainer: {
    display: 'flex',
    // backgroundColor: 'black',
    border: '2px solid lightgrey',
    padding: '8%',
    justifyContent: 'center',
  },
  post: {
    // backgroundColor: 'purple',
    border: '1px solid lightgrey',
    boxShadow: ' 2px 5px 1em 0.1em rgb(211,211,211, 0.5)',
  },
  followers: {
    // backgroundColor: 'green',
    position: 'fixed',
    display: 'fixed',
    minWidth: '340px',
    // border: '1px solid lightgrey',
  },
  root: {
    backgroundColor: 'brown',
    flexBasis: '25%',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <Navbar />
      <Grid container className={classes.postContainer} spacing={2}>
        <Grid container direction="column" item lg={8} md={8} sm={10} xs={10}>
          <Grid item className={classes.post}>
            <Post />
          </Grid>
          <Grid item className={classes.post}>
            <Post />
          </Grid>
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
}

export default App;
