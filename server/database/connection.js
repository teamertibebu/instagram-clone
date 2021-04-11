var mysql = require('mysql2');

var db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'instaclone',
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Database Connected!');
});

module.exports = db;
