const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const cors = require('cors');
const db = require('./database/connection');
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

app.post('/signIn', (req, res) => {
  const { username, password } = req.body;
  let usernameFound;
  let passwordCorrect;
  const query =
    "SELECT `password` FROM `users` WHERE `name`='" + username + "'";

  db.query(
    "SELECT `name` from `users` WHERE `name`='" + username + "'",
    (err, results) => {
      if (err) throw err;

      if (results[0]) {
        db.query(query, (err, results) => {
          if (err) throw err;

          if (password === results[0].password) {
            passwordCorrect = true;
            usernameFound = true;
            return res.send({ passwordCorrect, usernameFound });
          } else {
            passwordCorrect = false;
            usernameFound = true;
            return res.send({ passwordCorrect: false });
          }
        });
      } else {
        usernameFound = false;
        return res.send({ usernameFound });
      }
    }
  );
});

app.post('/createAccount', (req, res) => {
  const { username, password, email, image } = req.body;

  if (image) {
    const img = image.replace('blob:', '');

    uploadFile(img);
  }

  const query =
    "INSERT INTO `users` (`name`, `image`, `email`, `password`) values ('" +
    username +
    "', '" +
    image +
    "', '" +
    email +
    "', '" +
    password +
    "')";

  return db.query(
    "select * from `users` where `name`='" + username + "'",
    (err, results) => {
      if (err) throw err;

      if (!results[0]) {
        db.query(query, (err, results) => {
          if (err) {
            console.log(err);
          }
          return res.send({ available: true });
        });
      } else {
        return res.send({ available: false });
      }
    }
  );
});

app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Server connected!');
});
