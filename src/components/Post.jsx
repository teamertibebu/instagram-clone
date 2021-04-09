import './Post.css';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((styles) => ({
  img: {
    // padding: '2%',
  },
}));

const Post = () => {
  const classes = useStyles();

  return (
    <div>
      <div className="Post-user">
        <div className="Post-user-avatar">
          <img src="https://www.laravelnigeria.com/img/chris.jpg" alt="Chris" />
        </div>
        <div className="Post-user-nickname">
          <span>Chris</span>
        </div>
      </div>
      <div className="Post-image">
        <div>
          <img
            className={classes.img}
            alt="Icon Living"
            src="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg"
          />
        </div>
      </div>
      <div className="Post-caption">
        <strong>Chris</strong> Moving the community!
      </div>
    </div>
  );
};
export default Post;
