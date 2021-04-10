import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar.jsx';
import Post from './components/Post.jsx';
import { Grid, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((styles) => ({
  postContainer: {
    backgroundColor: 'black',

    position: 'absolute',
    border: '2px solid lightgrey',
    //   // backgroundColor: 'red',
    padding: '8%',
    justifyContent: 'center',
  },
  post: {
    backgroundColor: 'purple',
    border: '1px solid lightgrey',
  },
  followers: {
    backgroundColor: 'green',
    position: 'fixed',
    minWidth: '300px',
  },

  // scrollable: {
  //   height: '100vh',
  //   overflowY: 'scroll',
  //   overflowX: 'auto',
  // },
}));

function App() {
  const classes = useStyles();

  axios.get('/ping').then((res) => {
    console.log('DATA:', res.data);
  });

  return (
    <div className="App">
      <Navbar />
      <Grid container className={classes.postContainer}>
        <Grid container direction="column" item xs={8}>
          <Grid item className={classes.post}>
            <Post />
          </Grid>
          <Grid item className={classes.post}>
            <Post />
          </Grid>
        </Grid>
        <Grid
          container
          className={classes.sticky}
          direction="column"
          item
          xs={4}
        >
          <Hidden smDown>
            <Grid className={classes.followers} item>
              <h3>Followers</h3>
              <div>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
              </div>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
