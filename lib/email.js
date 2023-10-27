const nodemailer=require ('nodemailer');
var MailConfig = require('../configs/config/email');
var hbs = require('nodemailer-express-handlebars');
require('dotenv').config();
let environment = process.env;

var emailTransport = MailConfig.EmailTransport;


async function TemporaryPasswordEmail(data)  {
    try {               
        MailConfig.ViewOption(emailTransport, hbs);

        let HelperOptions = {
            from: environment.EMAIL_USER_NAME,
            to: data.username,
            subject: 'Temporary Password to Login',
            template: 'forgot-layout',
            context: data
        };

        emailTransport.sendMail(HelperOptions, (error, info) => {
            if (error) {
                return {
                    code: 'SERVER_ERROR1',
                    description: error
                };
            }
            return {
                message: 'users fetched successfully',
                data: "reached"
            };
        });
    } catch (error) {
        return {
            code: 'SERVER_ERROR12',
            description: error
        };
    }
}

async function WelcomeEmail(data)  {
    try {               
        MailConfig.ViewOption(emailTransport, hbs);

        let HelperOptions = {
            from: environment.EMAIL_USER_NAME,
            to: data.username,
            subject: 'Registration Mail',
            template: 'registration-layout',
            context: data
        };

        emailTransport.sendMail(HelperOptions, (error, info) => {
            if (error) {
                return {
                    code: 'SERVER_ERROR1',
                    description: error
                };
            }
            return {
                message: 'users fetched successfully',
                data: "reached"
            };
        });
    } catch (error) {
        return {
            code: 'SERVER_ERROR12',
            description: error
        };
    }
}


async function TemplateEmail(data)  {
    try {               
        MailConfig.ViewOption(emailTransport, hbs);

        let HelperOptions = {
            from: environment.EMAIL_USER_NAME,
            to: data.username,
            subject: 'Survey Template Mail',
            template: 'template-layout',
            context: data
        };

        emailTransport.sendMail(HelperOptions, (error, info) => {
            if (error) {
                return {
                    code: 'SERVER_ERROR1',
                    description: error
                };
            }
            return {
                message: 'users fetched successfully',
                data: "reached"
            };
        });
    } catch (error) {
        return {
            code: 'SERVER_ERROR12',
            description: error
        };
    }
}

async function sendPdfEmail(data)  {
    try {               
        MailConfig.ViewOption(emailTransport, hbs);

        let HelperOptions = {
            from: environment.EMAIL_USER_NAME,
            to: data.username,
            subject: 'Result Pdf Mail',
            template: 'result-layout',
            // attachments: [
            //     {
            //       content: data.file
            //     }
            //   ],
            context: data 
        };

        emailTransport.sendMail(HelperOptions, (error, info) => {
            if (error) {
                return {
                    code: 'SERVER_ERROR1',
                    description: error
                };
            }
            return {
                message: 'users fetched successfully',
                data: "reached"
            };
        });
    } catch (error) {
        return {
            code: 'SERVER_ERROR12',
            description: error
        };
    }
}

module.exports = {
    tempPasswordEmail: TemporaryPasswordEmail,
    welcomeEmail: WelcomeEmail,
    templateEmail :TemplateEmail,
    sendPdfEmail:sendPdfEmail
}