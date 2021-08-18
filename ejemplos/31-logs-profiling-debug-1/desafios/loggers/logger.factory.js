module.exports.getLogger = (type) => {
    try {
        let module = require(`./${type}`);
        return module
    } catch (error) {
        throw error;
    }
}