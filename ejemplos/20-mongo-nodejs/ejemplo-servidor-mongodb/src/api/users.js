const User = require('../models/user');
const MongoCRUD = require('../repository/crud');

class UsersController {

    constructor() {
        //super(User);
    }

    async findAll() {
        return await User.find({});
    }

    async findById(id) {
        return await User.findById(id);
    }

    async create(data) {
        return await User.create(data);
    }

    async update(id, data) {
        return await User.findByIdAndUpdate(id, data);
    }

    async delete(id) {
        return await User.findByIdAndDelete(id);
    }
}

module.exports = new UsersController();