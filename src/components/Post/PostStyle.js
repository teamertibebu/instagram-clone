import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  post: {
    border: '1px solid lightgrey',
    marginBottom: '15%',
  },
  imageContainer: {
    width: '100%',
  },
  img: {
    width: '100%',
    margin: '2% 0 0 0',
  },

  avatar: {
    position: 'relative',
    top: '15px',
    padding: '0 3% 0 5%',
  },
  username: {
    position: 'relative',
    top: '24px',
  },
}));

export default useStyles;
