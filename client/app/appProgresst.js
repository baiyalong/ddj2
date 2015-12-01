/**
 * Created by bai on 2015/11/24.
 */
Template.appProgress.helpers({
    project: function () {
        return Session.get('projectID')
    }
});

Template.appProgress.events({});

Template.appProgress.onRendered(function () {
        Session.set('appProgress', null);
        this.autorun(function () {
            var progress = Session.get('appProgress')
            if (progress) {
                $('.progress-bar').css('width', progress)
                Session.set('appProgress', null);
            }
        })
    }
);

Template.appPrint.onCreated(function () {

    }
);