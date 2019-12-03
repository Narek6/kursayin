const controllers = require('../controllers/contollers.js');

module.exports = function (app) {
    app.route('/signup').post(controllers.signUp);
    app.route('/signin').post(controllers.signIn);
};