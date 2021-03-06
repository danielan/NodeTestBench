var express = require('express');

module.exports = (function() {
	'use strict';
	var api = express.Router();

	api.get('/', function(req, res) {
		res.render('../vulnerabilities/unvalidated-redirect/views/index');
	});

	api.get('/redir', function(req, res) {
		var path = req.query.user_path;
		res.redirect(path);
	});

	api.get('/redir_status', function(req, res) {
		var path = req.query.user_path;
		res.redirect(302, path);
	});

	return api;
})();
