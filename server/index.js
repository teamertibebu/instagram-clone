const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const cors = require('cors');
const { User, Post } = require('./database/db');
const sequelize = require('./database/connection');

app.use(cors());
app.use(express.static('build'));
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
      posts.forEach((post) => {
        post.createdAt = new Date(post.CreatedAt);
      });
      res.send(posts);
    })
    .catch((err) => console.log(err));
});

app.post('/addPost', (req, res) => {
  const { imageURL, caption, username } = req.body;

  Post.create({
    image: imageURL,
    user_id: sequelize.literal(
      `(SELECT id FROM users WHERE username="${username}")`
    ),
    caption,
  })
    .then(() => res.end())
    .catch((err) => console.log(err));
});

app.get('/signIn', (req, res) => {
  const { username, password } = req.query;

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

app.get('*', (req, res) => {
  res.sendStatus(404);
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Server connected!');
});
