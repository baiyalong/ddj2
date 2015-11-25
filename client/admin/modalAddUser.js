/**
 * Created by DESKTOP-R62PT6H$ on 2015/11/25.
 */
/**
 * Created by bai on 2015/11/25.
 */

Template.modalAddUser.helpers({
    err: function () {
        return Session.get('err')
    },
});

Template.modalAddUser.events({
    'click .save': function (e, t) {
        var username = t.$('#username').val().trim();
        var password = t.$('#password').val();
        if (username == '') {
            Session.set('err', '用户名不能为空！');
        }
        else if (password == '') {
            Session.set('err', '密码不能为空！');
        }
        else if (Meteor.users.findOne({username: username})) {
            Session.set('err', '用户名被占用！');
        } else {
            Meteor.call('userCreate', {username: username, password: password}, function (err) {
                if (err)
                    Session.set('err', err);
                else {
                    $('#modalAddUser').modal('hide');
                    t.$('#username').val('');
                    t.$('#password').val('');
                    Session.set('err', null);
                }
            })
        }
    },
    'click .cancel': function (e, t) {
        t.$('#username').val('');
        t.$('#password').val('');
        Session.set('err', null);
    }
});

Template.modalAddUser.onRendered(function () {
        Session.set('addUser', false);
        this.autorun(function () {
            if (Session.get('addUser')) {
                Session.set('err', null)
                $('#modalAddUser').modal();
                Session.set('addUser', false);
            }
        })
    }
);

Template.modalAddUser.onCreated(function () {

    }
);