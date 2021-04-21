import useStyles from './PostStyle';
import { Grid, Avatar, Typography } from '@material-ui/core';

const Post = ({ post }) => {
  const {
    caption,
    image,
    User: { username },
  } = post;

  const classes = useStyles();

  return (
    <Grid container spacing={2} direction="column" className={classes.post}>
      <Grid container item xs={12}>
        <Grid container item xs={5} className={classes.postHeader}>
          <Grid item className={classes.avatar}>
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
