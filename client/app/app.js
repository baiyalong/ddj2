/**
 * Created by bai on 2015/11/24.
 */
//

Template.app.helpers({});

Template.app.events({});

Template.app.onRendered(function () {
        $('.modal-backdrop.fade.in').remove()
    }
);

Template.app.onCreated(function () {
        //$.fn.editable.defaults.mode = 'inline';
        Session.set('projectID', this.data)
    }
);