const AWS = require('aws-sdk');
require('dotenv').config();
let environment = process.env;

module.exports.S3 = new AWS.S3({
    accessKeyId: environment.AWS_ACCESS_KEY_ID,
    secretAccessKey: environment.AWS_SECRET_KEY
});
