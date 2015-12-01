/**
 * Created by bai on 2015/11/24.
 */
/**
 * Created by bai on 2015/11/24.
 */
/**
 * Created by bai on 2015/11/24.
 */
Template.appGrid.helpers({
    propertyName: function () {
        return Session.get('propertyName')
    },
    project: function () {
        return Session.get('projectID')
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

Template.appGrid.events({});

Template.appGrid.onRendered(function () {

    }
);

Template.appGrid.onCreated(function () {

    }
);