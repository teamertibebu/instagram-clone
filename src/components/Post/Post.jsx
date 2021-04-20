import './Post.css';
import useStyles from './PostStyle';
import { Grid, Avatar, Typography } from '@material-ui/core';

const Post = ({ post }) => {
  const classes = useStyles();
  const {
    caption,
    image,
    User: { username },
  } = post;

  return (
    <Grid container spacing={2} direction="column" className={classes.post}>
      <Grid container item xs={12} className={classes.postHeader}>
        <Grid container item xs={5}>
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

      <Grid item xs={12} className={classes.imageContainer}>
        <img className={classes.img} alt="post" src={image} />
      </Grid>
      <Grid item xs={12}>
        <div className="Post-caption">
          <strong>{caption}</strong>
        </div>
      </Grid>
    </Grid>
  );
};
export default Post;
