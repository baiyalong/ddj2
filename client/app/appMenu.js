/**
 * Created by bai on 2015/11/24.
 */
Template.appMenu.helpers({
    username: function () {
        var user = Meteor.user();
        if (user)
            return user.username;
    },
});

Template.appMenu.events({

    'click .logout': function (e) {
        Meteor.logout()
    },
    'click .changePassword': function () {
        Session.set('editUser', Meteor.userId())
    },
    'click #newProject': function () {
        Session.set('newProject', true)
    },
    'click #deleteProject': function () {
        var projectID = Session.get('projectID')
        if (projectID) {
            if (confirm('确认删除当前工程吗？'))
                Meteor.call('deleteProject', projectID, function (err, res) {
                    if (err)
                        console.log(err)
                    else
                        Router.go('/app')
                })
        } else
            Util.modal('错误', '请新建或打开工程！')

    },
    'click #openProject': function () {
        Session.set('openProject', true)
    },
    'click #IMPredictFrMainCal': function () {
        Session.set('IMPredictFrMainCal', true)
    },
    'click #chengxing': function (e, t) {
        if (Session.get('projectID')) {
            t.$('#fileUpload').val('');
            t.$('#fileUpload').click();
            Session.set('fileUpload', 'chengxing')
        } else
            Util.modal('错误', '请新建或打开工程！')
    },
    'click #sanqian': function (e, t) {
        if (Session.get('projectID')) {
            t.$('#fileUpload').val('');
            t.$('#fileUpload').click();
            Session.set('fileUpload', 'sanqian')
        } else
            Util.modal('错误', '请新建或打开工程！')
    },
    'change #fileUpload': function (e, t) {
        var projectID = Session.get('projectID')
        var reader = new FileReader();

        function cb(err, res) {
            if (err || res == 0)
                console.log(err | res)
        }

        reader.onload = function (e) {
            var target = Session.get('fileUpload');
            console.log('target', target)
            var file = e.target.result;
            //console.log(file)
            var lines = file.split('\n')
            //console.log(lines)
            var line_1 = lines[2].split(' ')
            console.log(line_1)
            Meteor.call('updateProperty', projectID, '相数', line_1[4], null, cb)
            Meteor.call('updateProperty', projectID, '极数', line_1[1], null, cb)

        }
        reader.readAsText(e.target.files[0])
    }
});

Template.appMenu.onRendered(function () {

    }
);

Template.appMenu.onCreated(function () {

    }
);