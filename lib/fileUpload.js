const multer = require('multer');
const fs = require('fs');
const pathHelper = require('./pathGenerator');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        var fileType = file.mimetype.split('/');
        var fileExt = fileType[1];
        var fileMime = fileType[0];
        if(fileMime.includes('application') && fileExt.includes('pdf')){
            var containerPath = pathHelper.conatinerPath('template');
            var dir = containerPath.path;
            if (!fs.existsSync(dir)){
                fs.mkdirSync(dir);
            }
            cb(null, dir)
        }
        else if(fileMime.includes('image')){
            var containerPath = pathHelper.conatinerPath('profileImages');
            var dir = containerPath.path;
            if (!fs.existsSync(dir)){
                fs.mkdirSync(dir);
            }
            cb(null, dir)
        }
    },
    filename: function (req, file, cb) {
        var type = file.mimetype.split('/');
        cb(null, file.fieldname + '-' + Date.now()+ '.'+ type[1]);
    }
});

//var upload = multer({ storage: storage }).single('form');
var upload = multer({ storage: storage });




async function FileUpload(req, res){
    try {
        upload(req, res, function (err) {
            if (err) {
                res.json({
                    success: false,
                    message: 'File uploaded!'
                });
            }

            res.json({
                success: true,
                message: 'File uploaded!'
            });  
            // Everything went fine
        });
    } catch (error) {
        return{
            isSuccess: false,
            message: error
        }; 
    }
}


module.exports = {
     fileUpload : FileUpload,
     upload: upload
}