import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((styles) => {
  return {
    modal: {
      backgroundColor: 'white',
      border: '2px solid black',
      padding: '10px',
      maxWidth: ({ viewportWidth }) =>
        viewportWidth >= 550 ? '400px' : '90vw',
      maxHeight: ({ viewportWidth }) =>
        viewportWidth >= 550 ? '400px' : '90vh',
      width: ({ viewportWidth }) => (viewportWidth >= 550 ? '400px' : '90vw'),
      height: '60vh',
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
    },
  };
});

export default useStyles;
