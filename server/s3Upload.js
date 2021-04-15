const AWS = require('aws-sdk');
require('dotenv').config();

const s3 = new AWS.S3({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
});

const uploadFile = (fileName) => {
  // Setting up S3 upload parameters
  const params = {
    Bucket: 'instaclone-copy',
    Key: 'dddddd.jpg', // File name you want to save as in S3
    Body: fileName,
  };

  // Uploading files to the bucket
  s3.upload(params, function (err, data) {
    if (err) {
      throw err;
    }
    console.log(`File uploaded successfully. ${data.Location}`);
  });
};

module.exports = uploadFile;
