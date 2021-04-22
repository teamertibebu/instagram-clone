import {
  TextField,
  Grid,
  Button,
  Modal,
  Backdrop,
  Fade,
} from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import { useState, useRef } from 'react';
import useStyles from './AddPostStyle';
import axios from 'axios';
import ProgressBar from '../ProgressBar/ProgressBar';
import sortPosts from '../HelperFunctions/sortPosts';

const AddPost = ({ setOpen, setPosts, open, viewportWidth }) => {
  const [imageURL, setImageURL] = useState();
  const [caption, setCaption] = useState();
  const [file, setFile] = useState();
  const [error, setError] = useState();

  const inputFile = useRef(null);
  const username = localStorage.getItem('username');

  const types = ['image/png', 'image/jpeg'];

  const classes = useStyles({ viewportWidth });

  const handleClose = () => {
    setOpen(false);
    setImageURL(null);
  };

  const handleFileUpload = (e) => {
    const selectedImage = e.target.files[0];

    if (selectedImage && types.includes(selectedImage.type)) {
      setFile(selectedImage);
      setError('');
    } else {
      setFile(null);
      setError('Please select an image file (png or jpeg)');
    }
  };

  const onButtonClick = () => {
    inputFile.current.click();
  };

  const handlePost = (info) => {
    setImageURL(null);
    axios
      .post('/addPost', info)
      .then(() => {
        setOpen(false);
      })
      .then(() => {
        axios.get('/getAllPosts').then(({ data }) => {
          console.log('SECOND', setPosts);
          sortPosts(setPosts, data);
        });
      });
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      BackdropComponent={Backdrop}
      BackdropProps={{ timeout: 500 }}
      closeAfterTransition
    >
      <Fade in={open} timeout={500}>
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
            {imageURL ? (
              <img
                src={imageURL}
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
              onChange={(e) => setCaption(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} className="output">
            {error && <div className="error">{error}</div>}
            {file && (
              <ProgressBar
                setImageURL={setImageURL}
                file={file}
                setFile={setFile}
              />
            )}
          </Grid>
          <Grid item xs={12}>
            <Button
              style={{ width: '100%' }}
              color="primary"
              variant="contained"
              onClick={() => handlePost({ imageURL, caption, username })}
            >
              Post It!
            </Button>
          </Grid>
        </Grid>
      </Fade>
    </Modal>
  );
};

export default AddPost;
