const userController = require('../../controllers/apis/user.controller');
const authController = require('../../controllers/auth/auth.controller');
const fileController = require('../../controllers/apis/file.controller');
const workshopController = require('../../controllers/apis/workshop.controller');
const categoryController = require('../../controllers/apis/category.controller');
const synonymsController = require('../../controllers/apis/synonyms.controller');
const participantController = require('../../controllers/apis/participant.controller');
const questionaireController = require('../../controllers/apis/questionaire.controller');
const organizationController = require('../../controllers/apis/organization.controller');
const groupController = require('../../controllers/apis/group.controller');
const tempalteController = require('../../controllers/apis/template.controller');
const questionController = require('../../controllers/apis/question.controller');
const memberController = require('../../controllers/apis/member.controller');
const participeController = require('../../controllers/apis/participe.controller');
const workShopNewController = require('../../controllers/apis/workShopNew.controller');
const promptController = require('../../controllers/apis/prompt.controller');
const questionAnswerController = require('../../controllers/apis/questionAnswer.controller');
const resultPdfController = require('../../controllers/apis/resultPdf.controllers');
const aggregateController = require('../../controllers/apis/aggregate.controller');
const TokenMiddleware = require('../../middlewares/verifyJWTToken');
const notificationController =require('../../controllers/apis/notification.controller')

const express = require('express');
let router = express.Router();





// AUTH CONTROLLER
router.use('/auth', authController);
router.use('/category', categoryController);
router.use('/workshop', workshopController);
router.use('/participant', participantController);
router.use('/file', fileController);
router.use('/user', userController);
router.use('/synonyms', synonymsController);
router.use('/questionaire', questionaireController);
router.use('/organization', organizationController);
router.use('/group', groupController);
router.use('/template', tempalteController);
router.use('/question', questionController);
router.use('/participe', participeController);
router.use('/member', memberController);
router.use('/workshopnew', workShopNewController);
router.use('/prompt', promptController);
router.use('/questionAnswer', questionAnswerController);
router.use('/resultPdf', resultPdfController);
router.use('/aggregate', aggregateController);
router.use('/notification', notificationController);

module.exports = router;