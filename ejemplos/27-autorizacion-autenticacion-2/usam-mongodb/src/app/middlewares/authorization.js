const jwt = require('jsonwebtoken');
const httpStatus = require('http-status');

const config = require('../../config/security');

module.exports = (req, res, next) => {

	// check if authorization header is set.
	if (req.hasOwnProperty('headers') && req.headers.hasOwnProperty('authorization')) {
		try {
            /*
             * Try to decode & verify the JWT token
             * The token contains user's id ( it can contain more informations )
             * and this is saved in req.user object
             */
			req.user = jwt.verify(req.headers.authorization, config.JWT_SECRET);
		} catch (err) {
            /*
             * If the authorization header is corrupted, it throws exception
             * So return 401 status code with JSON error message
             */
			return res.status(httpStatus.UNAUTHORIZED).json({
				error: {
					msg: 'Failed to authenticate token!'
				}
			});
		}
	} else {
        /*
         * If there is no autorization header, return 401 status code with JSON
         * error message
         */
		return res.status(httpStatus.UNAUTHORIZED).json({
			error: {
				msg: 'No token!'
			}
		});
	}
	next();
	return;
};
