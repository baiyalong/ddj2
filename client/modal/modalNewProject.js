/**
 * Created by bai on 2015/11/29.
 */
/**
 * Created by bai on 2015/11/24.
 */
Template.modalNewProject.helpers({
    err: function () {
        return Session.get('err')
    }
});

Template.modalNewProject.events({
    'click .save': function (e, t) {

        var projectName = t.$('#projectName').val().trim();
        var projectType = t.$('input:radio[name="projectType"]:checked').val();
        var projectUser = Meteor.user().username;
        if (projectName == '') {
            Session.set('err', '工程名称不能为空！')
        } else {
            Project.insert({
                projectName: projectName,
                projectType: projectType,
                projectUser: projectUser,
                createdAt: new Date(),
                updatedAt: new Date()
            }, function (err, res) {
                if (err)
                    Session.set('err', err.message)
                else {
                    t.$('#modalNewProject').modal('hide');
                    t.$('#projectName').val('');
                    Session.set('err', null);
                    Router.go('/app/' + res)
                }
            })
        }


    }
});

Template.modalNewProject.onRendered(function () {
        Session.set('newProject', false);
        this.autorun(function () {
            if (Session.get('newProject')) {
                Session.set('err', null)
                $('#modalNewProject').modal();
                Session.set('newProject', false);
            }
        })
    }
);

Template.modalNewProject.onCreated(function () {

    }
);