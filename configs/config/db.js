require('dotenv').config();

const dbConnectionSettings = {
   uri : process.env.DB_CON,
   databaseName: 'map',  
}

module.exports = dbConnectionSettings