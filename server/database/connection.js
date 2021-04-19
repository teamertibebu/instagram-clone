const { Sequelize } = require('sequelize');

var sequelize = new Sequelize('instaclone', 'root', null, {
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
});

sequelize.authenticate((err) => {
  if (err) {
    console.log('There is a connection in ERROR.');
  } else {
    console.log('Connection has been established successfully.');
  }
});

sequelize.sync({ alter: true }, (err) => {
  if (err) {
    console.log('An error occured while creating table.');
  } else {
    console.log('Item table created successfully.');
  }
});

module.exports = sequelize;
