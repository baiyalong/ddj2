/**
 * Created by bai on 2015/11/24.
 */
Template.appMenu.helpers({
    username: function () {
        var user = Meteor.user();
        if (user)
            return user.username;
    },
});

Template.appMenu.events({

    'click .logout': function (e) {
        Meteor.logout()
    },
    'click .changePassword': function () {
        Session.set('editUser', Meteor.userId())
    }
});

Template.appMenu.onRendered(function () {

    }
);

Template.appMenu.onCreated(function () {

    }
);