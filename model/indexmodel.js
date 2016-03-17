var connection = require('../connection');

exports.home = function(req,res) {
	res.render('pages/index', {
			title : "Empty Page",
			flag : 1,
		});
};
exports.validUser = function(req,res) {
	var queryString = "SELECT id,question FROM question";
	connection.query(queryString, function(err, rows, fields) {
		if(!rows) {
			rows = [];
		 }
		 res.render('pages/home', {
				question : rows,
				flag : 2,
			});
	});
	
};

exports.addQuestion = function(req,res) {
var queryString = "INSERT INTO question (id,userId,categoryId,question,created_at) values ('','1','2','"+ req.question +"',now());";
console.log(queryString);
	connection.query(queryString, function(err, rows, fields) {
		res.render('pages/home', {
			title : rows,
			flag : 1,
		});

	});
	
};

exports.searchQuestion = function(req,res) {
	var queryString = "SELECT question FROM question where question like '%"+ req.search +"%'";
	connection.query(queryString, function(err, rows, fields) {
		if(!rows) {
			rows = [];
		 }
		 res.send('pages/home', {
				title : rows
			});
	});
};