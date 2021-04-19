import { TextField, Grid, Button } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import { useState, useRef } from 'react';
import useStyles from './ModalStyle';

const ModalBody = () => {
  const [image, setImage] = useState();
  const inputFile = useRef(null);

  const classes = useStyles();

  const handleFileUpload = (e) => {
    const { files } = e.target;
    if (files && files.length) {
      setImage(URL.createObjectURL(files[0]));
    }
  };

  const onButtonClick = () => {
    inputFile.current.click();
  };

  const handlePost = () => {};

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      className={classes.modal}
    >
      <Grid
        item
        xs={12}
        style={{
          width: '100%',
          height: '200px',
          backgroundColor: 'lightgrey',
        }}
      >
        <input
          style={{ display: 'none' }}
          ref={inputFile}
          onChange={handleFileUpload}
          type="file"
        />
        <ImageIcon
          style={{
            position: 'absolute',
            left: '50%',
            top: '30%',
            width: '25%',
            height: '25%',
            transform: 'translate(-50%, -50%)',
          }}
          onClick={onButtonClick}
        />
        {image ? (
          <img
            src={image}
            alt="post"
            style={{ width: '100%', height: '100%' }}
          />
        ) : null}
      </Grid>
      <Grid item xs={12}>
        <TextField
          multiline
          label="Caption"
          variant="filled"
          placeholder="Insert Caption Here."
          rows={2}
          style={{ width: '100%' }}
        />
      </Grid>
      <Grid item xs={12}>
        <Button
          style={{ width: '100%' }}
          color="primary"
          variant="contained"
          onClick={handlePost}
        >
          Post It!
        </Button>
      </Grid>
    </Grid>
  );
};

export default ModalBody;
