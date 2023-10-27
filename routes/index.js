const apiRoute = require('./apis/index.route');

const init = (server) => {
    server.get('*', function (req, res, next) {
        return next();
    });
    
    server.use('/api', apiRoute);
}
module.exports = {
    init: init
};