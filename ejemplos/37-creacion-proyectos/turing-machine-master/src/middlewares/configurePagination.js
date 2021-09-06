/**
 * Parse and configure the filter parameters and options (like pagination).
 * Example: /resource?filters={"name":"Foo"}&page=1&limit=10
 */
module.exports = (req, res, next) => {
    // parse the query filters.
    let filters = (req.query.filters && req.query.filters != 'null') ? JSON.parse(req.query.filters) : {};

    // other options...
    let options = {
        page: (req.query.page) ? Number(req.query.page) : 1,
        limit: (req.query.limit) ? Number(req.query.limit) : 10
    };

    req.filters = filters;
    req.options = options;

    next();
};
