const express = require('express');
const passwordRouter = express.Router();
var nodemailer = require('nodemailer');
require('dotenv').config();

passwordRouter.post('/', (req, res) => {
  const transporter = nodemailer.createTransport({
    port: 465, // true for 465, false for other ports
    host: 'smtp.gmail.com',
    auth: {
      user: 'teamertibebu@gmail.com',
      pass: process.env.EMAIL_PASSWORD,
    },
    secure: true,
  });

  const mailData = {
    from: 'teamertibebu@gmail.com', // sender address
    to: 'teamertibebu@gmail.com', // list of receivers
    subject: 'Sending Email using Node.js',
    html:
      '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br/>',
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) res.send(err);
    else res.send(info);
  });
});

module.exports = { passwordRouter };
