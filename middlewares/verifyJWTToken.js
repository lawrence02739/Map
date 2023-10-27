var jwt = require('jsonwebtoken');
require('dotenv').config();



function VerifyJWTToken(req, res, next) {
  var token = req.headers['x-access-token'];
  if (!token)
    return res.status(403).send({ auth: false, message: 'No token provided.' });
    
  jwt.verify(token, process.env.JWT_SECERT_KEY, function(err, decoded) {
    if (err)
    return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });          
    req.userId = decoded.userId;
    next();
  });
}

module.exports = {
    verifyToken : VerifyJWTToken
}