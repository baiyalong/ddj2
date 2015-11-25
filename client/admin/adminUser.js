/**
 * Created by bai on 2015/11/25.
 */

Template.adminUser.helpers({
    userList: function () {
        return Meteor.users.find({}, {
            sort: {username: 1},
        })
    },
    isAdmin: function (roles) {
        return roles && roles.indexOf('admin') != -1;

    }
});

Template.adminUser.events({
    'click .add': function () {
        Session.set('addUser', true)
    },
    'click .edit': function () {
        Session.set('editUser', this._id)
    },
    'click .remove': function () {
        if (confirm('确定删除用户 ' + this.username + ' 吗？'))
            Meteor.call('userDelete', this._id)
    },

});

Template.adminUser.onRendered(function () {

    }
);

Template.adminUser.onCreated(function () {

    }
);