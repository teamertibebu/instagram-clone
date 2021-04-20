import './Post.css';
import useStyles from './PostStyle';
import {
  Grid,
  Avatar,
  Typography,
  createMuiTheme,
  ThemeProvider,
} from '@material-ui/core';

const theme = createMuiTheme({
  overrides: {
    // MuiGrid: {
    //   'spacing-xs-1': {
    //     margin: 0,
    //     color: 'red',
    //     backgroundColor: 'purple',
    //   },
    // },
  },
});

const Post = ({ post }) => {
  const classes = useStyles();
  const {
    caption,
    image,
    User: { username },
  } = post;

  return (
    <Grid container spacing={2} direction="column" className={classes.post}>
      <Grid container item xs={12}>
        <Grid container item xs={5} className={classes.postHeader}>
          <Grid className={classes.avatar}>
            <Avatar src={image} alt="" />
          </Grid>
          <Grid item className={classes.username}>
            <Typography>
              <strong>{username}</strong>
            </Typography>
          </Grid>
        </Grid>
        <Grid xs={7}></Grid>
      </Grid>
      <div xs={12} className={classes.imageContainer}>
        <img className={classes.img} alt="post" src={image} />
      </div>
      <Grid item xs={12}>
        <Typography>
          <strong className={classes.usernameInCaption}>{username}</strong>
          {caption}
        </Typography>
      </Grid>
    </Grid>
  );
};
export default Post;
