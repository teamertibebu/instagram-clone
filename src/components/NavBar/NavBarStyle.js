import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  logo: {
    position: 'absolute',
    width: '110px',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  appBar: {
    boxShadow: 'none',
    borderBottom: '1px solid lightgrey',
    position: 'fixed',
    backgroundColor: 'white',
  },
}));

export default useStyles;
