/**
 * Created by bai on 2015/11/24.
 */
/**
 * Created by bai on 2015/11/24.
 */
Template.appTree.helpers({
    project: function () {
        return Session.get('project')
    },
    projectName: function () {
        var project = Session.get('project');
        return project ? project.projectName : null;
    }
});

Template.appTree.events({});

Template.appTree.onRendered(function () {
        var project = Session.get('project');
        $('#tree').treeview({
            onNodeSelected: function (event, data) {
                Session.set('propertyName', data.text)
            },
            data: project.tree
        });
    }
);

Template.appTree.onCreated(function () {

    }
);