/**
 * Created by bai on 2015/11/24.
 */
Template.appProgress.helpers({});

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