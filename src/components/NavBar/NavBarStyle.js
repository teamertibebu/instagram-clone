import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  inputInput: {
    padding: theme.spacing(0, 1, 0, 0),
    width: '50%',
    paddingLeft: '25px',
    border: '1px solid lightgrey',
    backgroundColor: 'lightgrey',
    opacity: '50%',
    borderRadius: '10px',
  },
  searchIcon: {
    position: 'absolute',
    padding: theme.spacing(0.5, 0.2, 3, 13),
    zIndex: '1',
  },
  search: {
    width: '30%',
  },
  appBar: {
    backgroundColor: 'white',
    position: 'fixed',
  },
  root: {
    flexGrow: '4',
    '&:hover': {
      background: 'none',
    },
  },
  typo: {
    paddingTop: '3px',
  },
  iconContainer: {
    display: 'flex',
  },
  icons: {
    minWidth: '200px',
    paddingTop: '7px',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
}));

export default useStyles;
