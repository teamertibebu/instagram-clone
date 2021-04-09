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
    alignText: 'left',
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
          sm={12}
          xs={12}
          className={classes.post}
        >
          <Post />
        </Grid>
        <Hidden smDown>
          <Grid xl={5} lg={4} md={4} className={classes.followers} item>
            <h3>Followers</h3>
            <div style={{ textAlign: 'left' }}>
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
