const express = require("express");
const router = express.Router();
const multer = require("multer");
var AWS = require("aws-sdk");
require("dotenv").config();
const environment = process.env;


// Multer ships with storage engines DiskStorage and MemoryStorage
// And Multer adds a body object and a file or files object to the request object. The body object contains the values of the text fields of the form, the file or files object contains the files uploaded via the form.
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });

var aws = require('../../configs/config/aws')
let s3bucket = aws.S3;

router.post("/upload", upload.single("file"), function (req, res) {
    debugger;
    let type = req.header('type');
    const file = req.file;
    const s3FileURL = environment.AWS_FILE_URL_LINK;
    var awsDirectory = environment.AWS_DIRECTORY;
    var containerName = getContainerName(type);
    var mimetype = file.mimetype.split('/')
    var fileName = 'map_' + Date.now() + '.' + mimetype[1];
    var keyPath = awsDirectory + '/' + containerName + '/' + fileName
    //Where you want to store your file
    //var key = 'develop/'+ file.originalname
    var params = {
        Bucket: environment.AWS_BUCKET_NAME,
        Key: keyPath,
        Body: file.buffer,
        ContentType: file.mimetype,
        ACL: "public-read"
    };

    s3bucket.upload(params, function (err, data) {
        if (err) {
            res.status(500).json({ isSuccess: false, error: true, Message: err });
        } else {
            var fileDetails = {
                description: req.body.description,
                fileLink: data.Location,
                url: s3FileURL + keyPath,
                s3_key: params.Key,
                fileOriginalName: file.originalname,
                fileNameName: fileName,
                bucketName: environment.AWS_BUCKET_NAME,
                containerName: containerName,
                fileType: mimetype[0],
                fileExt: mimetype[1]
            };
            res.send({ isSuccess: true, data, fileDetails });
        }
    });
});



router.delete("/delete/:prodContainer/:container/:filename", function (req, res) {
    debugger;
    var filename = req.params.prodContainer + '/' + req.params.container + '/' +  req.params.filename;   
    var params = {
        Bucket: environment.AWS_BUCKET_NAME,
        Key: filename
    };
    
    s3bucket.deleteObject(params, function (err, data) {
        if (data) {
            res.status(200).json({ isSuccess: true, message:'File deleted successfully', data: data });            
        }
        else {
            res.status(400).json({ isSuccess: false, message:'Check if you have sufficient permissions : '+err, data: err });       
        }
    });
});


function getContainerName(type) {
    var containerName = ''
    if(type == undefined){
        return containerName;
    }   
    if (type.includes('sign')) { containerName = 'signature' }
    else if (type.includes('template')) { containerName = 'templates' }
    else if (type.includes('resultPdf')) { containerName = 'resultPdf' }
    else if (type.includes('profile')) { containerName = 'profileImage' }
    else if (type.includes('out')) { containerName = 'output' }
    else if (type.includes('highlight')) { containerName = 'highlighted_pdf' }
    else if (type.includes('analyzed_json')) { containerName = 'analyzed_json' }
    else containerName = containerName

    return containerName;
}


module.exports = router;