/**
 * Created by bai on 2015/11/25.
 */


Meteor.methods({
    userCreate: function (u) {
        Accounts.createUser(u)
    },
    userDelete: function (uid) {
        if (Roles.userIsInRole(this.userId, 'admin') && !Roles.userIsInRole(uid, 'admin') && uid != this.userId)
            Meteor.users.remove(uid)
    },
    userSetPassword: function (uid, password) {
        Accounts.setPassword(uid, password)
    }
})