// we only need a default route, AngularJS will handle the rest.
exports.index = (req, res) => {
	res.render('index');
};
