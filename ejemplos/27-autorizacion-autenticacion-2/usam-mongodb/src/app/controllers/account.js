const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./user').getModel();
const security = require('../../config/security');

/**
 * Manages the account users.
 * @class AccountController
 */
class AccountController {

    constructor() { }

    /**
     * Manages the login of users.
     * @param {String} username
     * @param {String} password
     * @param {Function} callback
     */
    login(username, password, callback) {

        User.findOne({ userName: username }).populate('groups').exec((error, user) => {
            if (user == null)
                return callback("El usuario no se encuentra registrado");

            if (!user.active)
                return callback("El usuario no se encuentra activado");

            let validPassword = bcrypt.compareSync(password, user.password);

            if (validPassword) {
                let token = jwt.sign({ id: user._id }, security.JWT_SECRET, { expiresIn: security.EXPIRATION });
                user.password = undefined;	// I delete the password, it does not have to be displayed.
                return callback(false, { user: user, token: token });
            }

            return callback("Usuario o contraseña incorrectos");
        });
    }

    /**
     * Register a new user
     * @param {Object} userData
     * @param {Function} callback
     */
    register(userData, callback) {
        if (!userData.password)
            return callback("Debe proporcionar una contraseña");

        userData.password = bcrypt.hashSync(userData.password, security.SALT);

        User.create(userData, (error, result) => {
            return callback(error, result);
        });
    }
}

module.exports = new AccountController();
