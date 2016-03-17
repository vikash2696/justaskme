var model = require('../model/indexmodel');

exports.home = function(req, res) {
	model.home(req.body,res);
};
exports.validUser = function(req, res) {
	model.validUser(req.body,res);
};
exports.addQuestion = function(req, res) {
	model.addQuestion(req.body,res);
};
exports.searchQuestion = function(req, res) {
	model.searchQuestion(req.body,res);
};

