Router.configure({
    layoutTemplate : 'layout',
    loadingTemplate : 'loading',
    NotFoundTemplate : 'notFound'
});
Router.route('/', function () {
    this.layout('loginLayout');
    this.render('login');
}, {
    name: 'login'
});
Router.route('/feed', function () {
    this.layout('layout');
    this.render('feed');
}, {
    name: 'feed'
});

Router.route('/*', function () {
    this.layout('loginLayout');
    this.render('notFound');
}, {
    name: 'notFound'
});