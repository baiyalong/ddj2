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
        Meteor.logout(function (err) {
            if (err)Util.modal('用户注销', err)
            else
                Router.go('/')
        })
    }
});

Template.appMenu.onRendered(function () {

    }
);

Template.appMenu.onCreated(function () {

    }
);