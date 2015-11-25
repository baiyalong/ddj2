/**
 * Created by bai on 2015/11/25.
 */

Template.admin.helpers({
    username: function () {
        var user = Meteor.user();
        if (user)
            return user.username;
    },
});

Template.admin.events({
    'click .logout': function (e) {
        Meteor.logout(function (err) {
            if (err)Util.modal('用户注销', err)
            else
                Router.go('/')
        })
    }
});

Template.admin.onRendered(function () {

    }
);

Template.admin.onCreated(function () {
        if (!Roles.userIsInRole(Meteor.userId(), 'admin'))
            Meteor.logout();


    }
);