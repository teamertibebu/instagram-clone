import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((styles) => ({
  postContainer: {
    display: 'flex',
    border: '2px solid lightgrey',
    borderTop: 'none',
    marginTop: 'clamp(70px, 90px, 100px)',
    justifyContent: 'center',
  },
  post: {
    border: '1px solid lightgrey',
    boxShadow: ' 2px 5px 1em 0.1em rgb(211,211,211, 0.5)',
  },
  followers: {
    position: 'fixed',
    display: 'fixed',
    minWidth: '340px',
  },
  root: {
    flexBasis: '25%',
  },
}));

export default useStyles;
