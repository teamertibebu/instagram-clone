import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((styles) => ({
  modal: {
    backgroundColor: 'white',
    border: '2px solid black',
    padding: '10px',
    maxWidth: '400px',
    maxHeight: '400px',
    width: '50vw',
    height: '60vh',
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  },
}));

export default useStyles;
