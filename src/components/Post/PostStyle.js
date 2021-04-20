import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';

const useStyles = makeStyles((theme) => ({
  post: {
    border: '1px solid lightgrey',
    marginBottom: '15%',
  },
  img: {
    width: '100%',
  },

  avatar: {
    position: 'relative',
    padding: '0 3% 0 5%',
  },
  username: {
    position: 'relative',
    top: '20%',
  },
  usernameInCaption: {
    marginRight: '5px',
  },
}));

export default useStyles;
