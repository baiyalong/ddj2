/**
 * Created by bai on 2015/11/24.
 */

Router.configure({
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function () {
    }
});


Router.route('/', function () {
    this.render('app')
})

Router.route('/login')

Router.route('/admin')


Router.onBeforeAction(function () {
    if (!Meteor.userId()) {
        this.render('login');
    } else if (!Roles.userIsInRole(Meteor.userId(), 'admin')) {
        this.render('app');
    }
    else {
        this.next();
    }
});