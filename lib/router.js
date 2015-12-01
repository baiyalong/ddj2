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
    Router.go('/app')
})
Router.route('/app', {
    waitOn: function () {
        return [this.subscribe('projects')]
    }
})
Router.route('/app/:id', function () {
    this.render('app', {data: this.params.id})
}, {
    waitOn: function () {
        return [this.subscribe('project', this.params.id), this.subscribe('projects')]
    }
})

Router.route('/login')

Router.route('/admin', {
    waitOn: function () {
        return [this.subscribe('user'), this.subscribe('projects')]
    }
})


Router.onBeforeAction(function () {
    if (!Meteor.userId()) {
        this.render('login');
    } else if (Roles.userIsInRole(Meteor.userId(), 'admin')) {
        this.render('admin');
    }
    else {
        this.next();
    }
});