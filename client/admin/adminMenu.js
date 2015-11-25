/**
 * Created by bai on 2015/11/25.
 */

Template.adminMenu.helpers({
    username: function () {
        if (Meteor.user())
            return Meteor.user().username;
    },
});

Template.adminMenu.events({
    'click .logout': function (e) {
        Meteor.logout()
    },
    'click .changePassword': function () {
        Session.set('editUser', Meteor.userId())
    }

});

Template.adminMenu.onRendered(function () {

    }
);

Template.adminMenu.onCreated(function () {

    }
);