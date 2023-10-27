const crypto = require('crypto');
const uniqid = require('uniqid');


function HashUserPassword(password){

    try{
        let salt = crypto.randomBytes(16).toString('hex');
        let hash = crypto.pbkdf2Sync(password, salt,1000, 64, `sha512`).toString(`hex`);        
        return {salt : salt, hash : hash, password :password };
    }
    catch(ex){
        return '';
    }
}

function GenerateAndHashPassword(){
    //var randomPassword = Math.random().toString(36).slice(-15);   // 
    var randomPassword = uniqid.time(); 
    return HashUserPassword(randomPassword);
}

function ValidateUserPassword(pwd, pwdhash, salt){

    try{
        
        let hash = crypto.pbkdf2Sync(pwd.toString(), salt, 1000, 64, `sha512`).toString(`hex`);     
        if(hash === pwdhash){
            return true;
        }
        return false;
    }
    catch(ex){    
        return '';
    }
}

module.exports = {
    hashUserPassword : HashUserPassword,
    validateUserPassword : ValidateUserPassword,
    generateAndHashPassword : GenerateAndHashPassword
}