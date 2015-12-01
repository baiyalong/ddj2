/**
 * Created by bai on 2015/11/29.
 */
/**
 * Created by bai on 2015/11/24.
 */
Template.modalProperty.helpers({
    err: function () {
        return Session.get('err')
    },
    title: function () {
        return Session.get('propertyName')
    },
    property: function () {
        var project = Session.get('project');
        var propertyName = Session.get('propertyName');
        if (project && propertyName) {
            var property = project.grid.find(function (e) {
                return e.name == propertyName;
            });
            return property ? property.property : null;
        }
    },
});

Template.modalProperty.events({
    'click .save': function (e, t) {
        var propertyName = Session.get('propertyName');
        console.log(this)
    }
});

Template.modalProperty.onRendered(function () {
        Session.set('editProperty', false);
        this.autorun(function () {
            if (Session.get('editProperty')) {
                Session.set('err', null)
                $('#modalProperty').modal();
                Session.set('editProperty', false);
            }
        })
    }
);

Template.modalProperty.onCreated(function () {
        //this.subscribe('projects')
    }
);