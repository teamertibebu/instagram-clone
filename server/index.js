const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const cors = require('cors');
// const User = require('./database/Models/User');
// const Post = require('./database/Models/Post');
const { User, Post } = require('./database/db');
const sequelize = require('./database/connection');
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

app.get('/getAllPosts', (req, res) => {
  Post.findAll({
    include: [{ model: User }],
  })
    .then((posts) => {
      res.send(posts);
    })
    .catch((err) => console.log(err));
});

app.post('/addPost', (req, res) => {
  const { image, caption, username } = req.body;

  const img = image.replace('blob:', '');
  uploadFile(img);
  console.log('----------', imageLocation);

  // Post.create({
  //   image: imageLocation,
  //   user_id: sequelize.literal(
  //     `(SELECT id FROM users WHERE username="${username}")`
  //   ),
  //   caption,
  // })
  //   .then(() => res.end())
  //   .catch((err) => console.log(err));
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
  const { username, password, email } = req.body;

  User.findOrCreate({
    where: { username },
    defaults: {
      username,
      password,
      email,
    },
  })
    .then(([user, created]) => {
      return created
        ? res.send({ available: true })
        : res.send({ available: false });
    })
    .catch((err) => console.log(err));
});

app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Server connected!');
});
