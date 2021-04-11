USE instaclone;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;


CREATE TABLE users (
  id INTEGER unsigned PRIMARY KEY NOT NULL auto_increment,
  name VARCHAR(255) NOT NULL,
  image VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL
);

CREATE TABLE posts (
  id INTEGER unsigned PRIMARY KEY NOT NULL auto_increment,
  image VARCHAR(255) NOT NULL,
  user VARCHAR(255) NOT NULL,
  caption VARCHAR(255),
  postedAt DATETIME NOT NULL,
  FOREIGN KEY (id) REFERENCES users (id)
)
