const nodemailer = require('nodemailer');
var hbs = require('nodemailer-express-handlebars');
require('dotenv').config();
let environment = process.env;
const dotenv = require('dotenv');
dotenv.config();

module.exports.EmailTransport = nodemailer.createTransport({
    service: environment.EMAIL_SERVICE_NAME,
    host: environment.EMAIL_SERVICE_HOST,
    secure: environment.EMAIL_SERVICE_SECURE,
    port: environment.EMAIL_SERVICE_PORT,
    auth: {
        user: process.env.EMAIL_USER_NAME,
        pass: process.env.EMAIL_USER_PASSWORD
      },
    tls: {
        rejectUnauthorized: false,
        ciphers: 'SSLv3'
    }
});                                                                              


module.exports.ViewOption = (transport, hbs) => {
    transport.use('compile', hbs({
        viewEngine: {
            extname: '.hbs', // handlebars extension
            layoutsDir: 'views/layout/', // location of handlebars templates
            defaultLayout: '', // name of main template
            partialsDir: 'views/partials/', // location of your subtemplates aka. header, footer etc
        },
        viewPath: 'views/layout',
        extName: '.hbs'
    }));   
}

module.exports.SendMailAsync = async (mailOptions) => {
    return new Promise((resolve, reject) => {

        let transporter = this.EmailTransport;

        this.ViewOption(transporter, hbs);

        let resp = false;

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                resolve(error); // or use rejcet(false) but then you will have to handle errors
            }
            else {
                resolve(info);
            }
        });
    })
}

module.exports.SendMail = (mailOptions) => {

    let transporter = this.EmailTransport;

    this.ViewOption(transporter, hbs);
    let resp = false;

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log("error is " + error);
            return false; // or use rejcet(false) but then you will have to handle errors
        }
        else {
            console.log('Email sent: ' + info.response);
            return true;
        }
    });
}



