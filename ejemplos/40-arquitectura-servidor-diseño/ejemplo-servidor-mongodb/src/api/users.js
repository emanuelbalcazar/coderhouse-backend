const User = require('../models/user');
const MongoCRUD = require('../repository/crud');

class UsersController extends MongoCRUD {
    constructor() {
        super(User);
    }
}

module.exports = new UsersController();