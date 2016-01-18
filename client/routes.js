Router.configure({
	layoutTemplate: 'layout'
});

Router.route('/', {
	name: 'index',
	template: 'index'
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

Router.route('/login', function () {
	this.render('login');
});