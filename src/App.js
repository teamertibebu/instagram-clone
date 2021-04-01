import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { AppBar, Toolbar, IconButton, InputBase } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';

function App() {
  axios.get('/ping').then((res) => {
    console.log('DATA:', res.data);
  });

  const useStyles = makeStyles((theme) => ({
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      width: '100%',
      paddingLeft: '25px',
      border: '1px solid white',
    },
    searchIcon: {
      height: '100%',
      position: 'absolute',
      padding: theme.spacing(0, 0.5, 3, 0.4),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    search: {
      position: 'relative',
      width: '100%',
    },
  }));

  const classes = useStyles();

  return (
    <div className="App">
      <AppBar>
        <Toolbar>
          <IconButton>
            <AccountCircleIcon />
            <FavoriteIcon />
            <HomeIcon />
            <EmailIcon />
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                color="secondary"
                placeholder="Search"
                className={classes.inputInput}
              />
            </div>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App;
