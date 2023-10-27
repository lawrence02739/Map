const express = require('express');
const bodyParser = require('body-parser');
let morgan = require('morgan');
let mongoose = require('mongoose');
const cors = require('cors')
require('dotenv').config();
var swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

module.exports = function () {

    let server = express(), 
        create,
        start;

    create = (config) =>{
        let routes = require('../routes');  

        server.set('env', config.env);
        server.set('port', config.port);
        server.set('hostname', config.hostname);
        

        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({
            extended: false
        }));
        server.use(cors());
        server.use(morgan('dev'));
        // Mongoose Connections
        mongoose.connect(config.dbSettings.uri, {dbName:config.dbSettings.databaseName })
        .then(() => {
          console.log('Mongo db Connected!!!');
          mongoose.set('strictQuery', false);
          mongoose.set('debug', true);
        })
        .catch(error => {
          console.log('FAILED TO CONNECT MONGO DB!!');
          console.error(error);
        });  
      
        // Swagger Implementation
        var swaggerDefinition = {
          info: {
            title: 'Node Swagger API',
            version: '1.0.0',
            description: 'Demonstrating how to describe a RESTful API with Swagger',
          },
          host: 'localhost:3000',
          basePath: '/api/v1',
        };

        var swaggerDocument = swaggerJSDoc({
          // import swaggerDefinitions
          swaggerDefinition: swaggerDefinition,
          // path to the API docs
          apis: ['./controllers/apis/*.js'],
        });

        server.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
        
        server.get('/swagger.json', function(req, res) {
          res.setHeader('Content-Type', 'application/json');
          res.send(swaggerDocument);
        });

        // Set up routes
        routes.init(server);
    }
    start = () => {
        let hostname = server.get('hostname'),
            port = server.get('port');
        server.listen(port, function () {      
            console.log(`http://${hostname}:${port}`)     
        });  
    }

    return {
        create : create,
        start : start
    };

};
