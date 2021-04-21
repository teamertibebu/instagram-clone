import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((style) => ({
  divContainer: {
    position: 'fixed',
    right: '2%',
    bottom: '2%',
  },
  iconButton: {
    backgroundColor: 'lightgrey',
    boxShadow: '2px 3px 2px 1px #b1b1b1',
    width: '60px',
    height: '60px',
  },
  scrollButton: {
    fontSize: '40px',
  },
}));

export default useStyles;
