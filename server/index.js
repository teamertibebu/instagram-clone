const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const cors = require('cors');
const db = require('./database/connection');

app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/login', (req, res) => {
  res.send({
    token: 'test123',
  });
});

app.post('/createAccount', (req, res) => {
  const { username, password, email, image } = req.body;
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

  db.query(
    "select * from `users` where `name`='" + username + "'",
    (err, results) => {
      if (err) throw err;
      console.log('right here', results);

      if (!results[0]) {
        db.query(query, (err, results, fields) => {
          if (err) {
            console.log(err);
          }

          res.send({ available: true });
        });
      }

      res.send({ available: false });
    }
  );
});

app.get('/', (req, res) => {
  return res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.PORT || 8080, () => {
  console.log('Server connected!');
});
