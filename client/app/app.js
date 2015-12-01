/**
 * Created by bai on 2015/11/24.
 */
//

Template.app.helpers({
    project: function () {
        return Session.get('projectID')
    }
});

Template.app.events({});

Template.app.onRendered(function () {
        $('.modal-backdrop.fade.in').remove()
    }
);

Template.app.onCreated(function () {
        //$.fn.editable.defaults.mode = 'inline';
        Session.set('projectID', this.data)
        Session.set('project', Project.findOne(Session.get('projectID')))
    }
);