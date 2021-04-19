const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const cors = require('cors');
const User = require('./database/Models/User');
const Post = require('./database/Models/Post');
const { Op } = require('sequelize');

const uploadFile = require('./s3Upload');

app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/login', (req, res) => {
  res.send({
    token: 'test123',
  });
});

app.post('/addPost', (req, res) => {
  const { image, caption } = req.body;
  const name = 'root';
  // console.log('USERNAME', username);

  // db.query(
  //   "INSERT INTO `posts` (`image`, `caption`, `user`) VALUES ('" +
  //     image +
  //     "', '" +
  //     caption +
  //     "', (SELECT `id` FROM `users` WHERE `name`='" +
  //     name +
  //     "'))",
  //   (err, results) => {
  //     if (err) throw err;
  //     console.log('RESULTS', results);
  //   }
  // );
  res.send('successful');
});

app.post('/signIn', (req, res) => {
  const { username, password } = req.body;

  User.findAll({
    attributes: ['password'],
    where: { username },
  }).then((results) => {
    if (results.length) {
      return password === results[0].password
        ? res.send({ passwordCorrect: true, usernameFound: true })
        : res.send({ passwordCorrect: false, usernameFound: true });
    } else {
      return res.send({ usernameFound: false });
    }
  });
});

app.post('/createAccount', (req, res) => {
  const { username, password, email, image } = req.body;

  if (image) {
    const img = image.replace('blob:', '');

    uploadFile(img);
  }

  User.findAll({
    where: {
      username,
    },
  })
    .then((results) => {
      const available = results.length === 0 ? true : false;

      if (available) {
        User.create({ username, image, email, password })
          .then((results) => res.send({ available }))
          .catch((err) => console.log(err));
      } else {
        res.send({ available });
      }
    })
    .catch((err) => console.log(err));
});

app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Server connected!');
});
