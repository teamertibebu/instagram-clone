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
        <Grid item xs={7}></Grid>
      </Grid>
      <Grid xs={12}>
        <img className={classes.img} alt="post" src={image} />
      </Grid>
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
