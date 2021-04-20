import './Post.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((styles) => ({
  img: {
    // padding: '2%',
  },
}));

const Post = ({ post }) => {
  const classes = useStyles();
  const {
    caption,
    image,
    User: { username },
  } = post;
  const img = URL.revokeObjectURL(image);
  console.log(img);
  return (
    <div>
      <div className="Post-user">
        <div className="Post-user-avatar">
          <img src="https://www.laravelnigeria.com/img/chris.jpg" alt="Chris" />
        </div>
        <div className="Post-user-nickname">
          <span>{username}</span>
        </div>
      </div>
      <div className="Post-image">
        <div>
          <img className={classes.img} alt="post" src={img} />
        </div>
      </div>
      <div className="Post-caption">
        <strong>{caption}</strong> Moving the community!
      </div>
    </div>
  );
};
export default Post;
