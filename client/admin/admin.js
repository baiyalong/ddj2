/**
 * Created by bai on 2015/11/25.
 */

Template.admin.helpers({});

Template.admin.events({});

Template.admin.onRendered(function () {

    }
);

Template.admin.onCreated(function () {
        if (!Roles.userIsInRole(Meteor.userId(), 'admin'))
            Meteor.logout();


    }
);