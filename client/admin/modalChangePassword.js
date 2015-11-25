/**
 * Created by DESKTOP-R62PT6H$ on 2015/11/25.
 */
/**
 * Created by bai on 2015/11/25.
 */

Template.modalChangePassword.helpers({
    err: function () {
        return Session.get('err')
    },
    isCurrentUser: function () {
        return Meteor.userId() == Session.get('editUserId')
    },
    username: function () {
        if (Session.get('editUserId') && Meteor.users.findOne(Session.get('editUserId')))
            return Meteor.users.findOne(Session.get('editUserId')).username
    }
});

Template.modalChangePassword.events({
    'click .save': function (e, t) {
        var passwordOld = t.$('#passwordOld').val();
        var passwordNew = t.$('#passwordNew').val();
        if (passwordNew == '') {
            Session.set('err', '新密码不能为空！');
        } else if (Meteor.userId() == Session.get('editUserId')) {
            if (passwordOld == '') {
                Session.set('err', '旧密码不能为空！');
            } else {
                Accounts.changePassword(passwordOld, passwordNew, function (err) {
                    if (err)
                        Session.set('err', err.message)
                    else {
                        $('#modalChangePassword').modal('hide');
                        t.$('#passwordOld').val('');
                        t.$('#passwordNew').val('');
                        Session.set('err', null);
                    }
                })
            }
        } else {
            Meteor.call('userSetPassword', Session.get('editUserId'), passwordNew, function (err) {
                if (err)
                    Session.set('err', err)
                else {
                    $('#modalChangePassword').modal('hide');
                    t.$('#passwordOld').val('');
                    t.$('#passwordNew').val('');
                    Session.set('err', null);
                }
            })
        }

    },
    'click .cancel': function (e, t) {
        t.$('#passwordOld').val('');
        t.$('#passwordNew').val('');
        Session.set('err', null);
    }
});

Template.modalChangePassword.onRendered(function () {
        Session.set('editUser', null);
        this.autorun(function () {
            if (Session.get('editUser')) {
                Session.set('editUserId', Session.get('editUser'))
                Session.set('err', null)
                $('#modalChangePassword').modal();
                Session.set('editUser', null);
            }
        })
    }
);

Template.modalChangePassword.onCreated(function () {

    }
);