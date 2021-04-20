import { TextField, Grid, Button } from '@material-ui/core';
import ImageIcon from '@material-ui/icons/Image';
import { useState, useRef } from 'react';
import useStyles from './ModalStyle';
import axios from 'axios';
import ProgressBar from '../../ProgressBar/ProgressBar';

const ModalBody = ({ setOpen, setPosts }) => {
  const [imageURL, setImageURL] = useState();
  const [caption, setCaption] = useState();
  const [file, setFile] = useState();
  const [error, setError] = useState();
  const inputFile = useRef(null);
  const username = localStorage.getItem('username');

  const types = ['image/png', 'image/jpeg'];

  const classes = useStyles();

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
    axios
      .post('/addPost', info)
      .then(() => {
        setOpen(false);
      })
      .then(() => {
        axios.get('/getAllPosts').then(({ data }) => {
          data.forEach((post) => {
            post.createdAt = new Date(post.createdAt);
          });

          data = data.sort((a, b) => {
            const timeb = b.createdAt.getTime();
            const timea = a.createdAt.getTime();

            return timeb - timea;
          });
          setPosts(data);
        });
      });
  };

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
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && (
          <ProgressBar
            setImageURL={setImageURL}
            file={file}
            setFile={setFile}
          />
        )}
      </div>
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
  );
};

export default ModalBody;
