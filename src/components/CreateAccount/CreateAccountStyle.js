import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((styles) => ({
  topContainer: {
    height: '100vh',
    backgroundColor: '#fafafa',
  },
  brandImageCont: {
    height: '100vh',
  },
  brandImage: {
    float: 'right',
    height: '100vh',
  },
  loginContainer: {
    paddingBottom: '10px',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  formContainer: {
    display: 'flex',
    maxWidth: '400px',
    minWidth: '300px',
    flexDirection: 'column',
  },
  logo: {
    width: '200px',
  },
}));

export default useStyles;
