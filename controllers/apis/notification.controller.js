const express = require("express");
const router = express.Router();
const responsHelper = require('../../lib/responseHelper');
const EmailHelper = require('../../lib/email');
const participantService = require("../../services/participe/participant.service");
const memberService = require("../../services/member/member");
const groupService = require("../../services/group/group");
const multer = require("multer");
var storage = multer.memoryStorage();
var upload = multer({ storage: storage });
var aws = require('../../configs/config/aws')
let s3bucket = aws.S3;
var AWS = require("aws-sdk");
require("dotenv").config();
const environment = process.env;

router.post("/sendResult", upload.single("file"), function (req, res) {
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

    s3bucket.upload(params, async function (err, data) {
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
            const sendEmailObj = {
                username: req.body.email,
                link:data.Location  
            }
            var emailRes = await EmailHelper.sendPdfEmail(sendEmailObj);
           return  res.send({ isSuccess: true, data, fileDetails });
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






router.post('/send',  (req, res) => {
  try{
    const sendEmailObj = {
        username: req.body.email,
       // file: req.file.buffer ,
        link:req.body.link  
    }
    var emailRes = EmailHelper.sendPdfEmail(sendEmailObj);
    return res.send({ isSuccess: true, message: "mesage sent successfully" })
  }catch(err){
    return res.send({ isSuccess: false, message: "mesage is not sent " })
  }

})



router.post('/sendParticipe/:id', async (req, res) => {
    try {
        var result = await participantService.get(req.params.id);
        if (result.isSuccess == true) {
            if (result.data.responsed == false) {
                var sendEmailObj = {
                    username: result.data.participantEmail,
                    name: result.data.participantFirstName,
                    type: "Participant",
                    template: result.data.group_id.tempalte_id.toString(),
                    link: `${process.env.BASEURL}/#/notification?type=Participant&template=` + result.data.group_id.tempalte_id.toString() + `&participantId=` + req.params.id + `&groupId=` + result.data.group_id._id.toString()
                }
                var emailRes = EmailHelper.templateEmail(sendEmailObj);

                return res.send({ isSuccess: true, message: "mesage sent successfully", data: result })
            } else {
                return res.send({ isSuccess: false, message: " already respond " })
            }
        }
        return responsHelper.SendResponse(res, result);
    } catch (error) {
        return responsHelper.SendErrorResponse(error, res);
    }

})


router.post('/sendMember/:id', async (req, res) => {
    try {

        var result = await memberService.get(req.params.id);

        if (result.isSuccess == true) {
            if (result.data.responsed == false) {
                var sendEmailObj = {
                    username: result.data.email,
                    name: result.data.firstName,
                    type: "Member",
                    template: result.data.template_id._id.toString(),
                    link: `${process.env.BASEURL}/#/notification?type=Member&template=` + result.data.template_id._id.toString() + `&memberId=` + req.params.id + `&groupId=` + result.data.group_id.toString()
                }
                var emailRes = EmailHelper.templateEmail(sendEmailObj);

                return res.send({ isSuccess: true, message: "mesage sent successfully", data: result })
            } else {
                return res.send({ isSuccess: false, message: "already respond " })
            }
        }
        return responsHelper.SendResponse(res, result);
    } catch (error) {
       
        return responsHelper.SendErrorResponse(error, res);
    }

})

module.exports = router
