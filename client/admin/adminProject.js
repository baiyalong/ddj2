/**
 * Created by bai on 2015/11/25.
 */

Template.adminProject.helpers({
    projectList: function () {
        return Project.find({}, {
            sort: {projectName: 1},
            fields: {projectName: 1, projectUser: 1, createdAt: 1, updatedAt: 1}
        });
    },
    moment: function (timestamp) {
        return moment(timestamp).format('YYYY-MM-DD HH:mm:ss');
    }
});

Template.adminProject.events({
    'click .remove': function () {
        if (confirm('确定删除项目 ' + this.projectName + ' 吗？'))
            Project.remove(this._id)
    },
});

Template.adminProject.onRendered(function () {

    }
);

Template.adminProject.onCreated(function () {

    }
);