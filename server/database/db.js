const Sequelize = require('sequelize');
const sequelize = require('./connection');
const Post = require('./Models/Post');
const User = require('./Models/User');

const db = {
  Sequelize,
  sequelize,
  Post,
  User,
};

db.User.hasMany(db.Post, { foreignKey: 'user_id' });
db.Post.belongsTo(db.User, { foreignKey: 'user_id' });

module.exports = db;
