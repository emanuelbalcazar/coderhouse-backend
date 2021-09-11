class DAOFactory {

    static getPersistence(entity, type) {
        try {
            const persistence = require(`./${entity}/${type}`);
            return persistence;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }
}

module.exports = DAOFactory;