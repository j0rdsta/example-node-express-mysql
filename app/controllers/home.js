var express = require('express'),
router = express.Router(),
db = require('../models');

module.exports = function (app) {
	app.use('/', router);
};

// List
router.get('/', function (req, res, next) {
	db.Article.findAll().then(function(articles) {
		res.render('index', {
			title: 'Test Node Project',
			articles: articles
		});
	});
});

// Create
router.get('/create', function (req, res, next) {
	res.render('articles/create', {
		title: 'Test Node Project'
	});
});

// Store
router.post('/store', function (req, res, next) {
	db.Article.create({
		title : req.body.title,
		url : req.body.url,
		text : req.body.text
	}).then(function(article) {
		res.redirect('/');
	});
});



// Show
router.get('/:article_id', function (req, res, next) {
	var article_id = req.params.article_id;
	db.Article.find(article_id).then(function(article) {
		res.render('articles/show', {
			title: 'Test Node Project',
			article: article
		});
	});
});

// Edit
router.get('/:article_id/edit', function (req, res, next) {
	var article_id = req.params.article_id;
	db.Article.find(article_id).then(function(article) {
		res.render('articles/edit', {
			title: 'Test Node Project',
			article: article
		});
	});
});

// Update
router.post('/:article_id/update', function (req, res, next) {
	var article_id = req.params.article_id;
	db.Article.update({
		title : req.body.title,
		url : req.body.url,
		text : req.body.text
	}, {
		where: { id : article_id }
	}).then(function(article) {
		res.redirect('/' + article_id);
	});
});

// Destroy
router.post('/:article_id/destroy', function (req, res, next) {
	var article_id = req.params.article_id;
	db.Article.destroy({
		where: { id : article_id }
	}).then(function(article) {
		res.redirect('/');
	});
});
