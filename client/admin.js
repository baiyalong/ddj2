/**
 * Created by bai on 2015/11/25.
 */

Template.admin.helpers({
    username: function () {
        var user = Meteor.user();
        if (user)
            return user.username;
    },
    userList: function () {
        return Meteor.users.find({}, {sort: {createdAt: 1}, fields: {username: 1, createdAt: 1}});
    },
    projectList: function () {
        return Project.find({}, {
            sort: {updatedAt: 1},
            fields: {projectName: 1, projectUser: 1, createdAt: 1, updatedAt: 1}
        });
    },
    moment: function (timestamp) {
        return moment(timestamp).format('YYYY-MM-DD HH:mm:ss');
    }
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