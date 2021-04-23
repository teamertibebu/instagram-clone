import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((styles) => {
  return {
    modal: {
      backgroundColor: 'white',
      border: '2px solid black',
      padding: '10px',
      width: ({ viewportWidth }) => (viewportWidth >= 540 ? '400px' : '90vw'),
      height: '370px',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
    },
  };
});

export default useStyles;
