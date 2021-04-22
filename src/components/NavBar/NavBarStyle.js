import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  logo: {
    position: 'absolute',
    width: '110px',
    top: '39%',
  },
  imageGrid: {
    position: 'relative',
    height: '100%',
  },

  appBar: {
    backgroundColor: 'white',
    boxShadow: 'none',
    borderBottom: '1px solid lightgrey',
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
