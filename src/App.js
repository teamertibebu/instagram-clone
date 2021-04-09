import './App.css';
import axios from 'axios';
import Navbar from './components/Navbar.jsx';
import Post from './components/Post.jsx';
import { Grid, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((styles) => ({
  postContainer: {
    position: 'absolute',
    border: '2px solid lightgrey',
    // backgroundColor: 'red',
    padding: '8%',
    justifyContent: 'center',
  },
  post: {
    // backgroundColor: 'purple',
    border: '1px solid lightgrey',
  },
  followers: {
    backgroundColor: 'green',
    height: '25%',
  },
}));

function App() {
  const classes = useStyles();

  axios.get('/ping').then((res) => {
    console.log('DATA:', res.data);
  });

  return (
    <div className="App">
      <Navbar />

      <Grid
        container
        spacing={1}
        direction="row"
        className={classes.postContainer}
      >
        <Grid
          item
          xl={7}
          lg={8}
          md={8}
          sm={11}
          xs={11}
          className={classes.post}
        >
          <Post />
        </Grid>
        <Hidden smDown>
          <Grid xl={5} lg={4} md={4} className={classes.followers} item>
            <div>
              <h3>Followers</h3>
              <p>Hello</p>
              <p>Hello</p>
              <p>Hello</p>
              <p>Hello</p>
              <p>Hello</p>
            </div>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
}

export default App;
