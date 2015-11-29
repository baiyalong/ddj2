/**
 * Created by bai on 2015/11/29.
 */
/**
 * Created by bai on 2015/11/24.
 */
Template.modalOpenProject.helpers({
    err: function () {
        return Session.get('err')
    },
    projectList: function () {
        if (Meteor.user())
            return Project.find({projectUser: Meteor.user().username});
    },
    moment: function (timestamp) {
        return moment(timestamp).format('YYYY-MM-DD HH:mm:ss');
    }
});

Template.modalOpenProject.events({
    'click a.open': function (e, t) {
        Router.go('/app/' + this._id)
    },
    'click a.delete': function (e, t) {
        if (confirm('确认要删除吗？'))
            Project.remove(this._id)
    }
});

Template.modalOpenProject.onRendered(function () {
        Session.set('openProject', false);
        this.autorun(function () {
            if (Session.get('openProject')) {
                Session.set('err', null)
                $('#modalOpenProject').modal();
                Session.set('openProject', false);
            }
        })
    }
);

Template.modalOpenProject.onCreated(function () {

    }
);