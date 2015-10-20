Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', function () {
	this.render('index');
});

Router.route('/about', function () {
	this.render('about');
});

Router.route('/hubs', function () {
	this.render('hubs');
});

Router.route('/contact', function () {
	this.render('contact');
});