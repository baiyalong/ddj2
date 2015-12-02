/**
 * Created by bai on 2015/11/29.
 */
/**
 * Created by bai on 2015/11/29.
 */
/**
 * Created by bai on 2015/11/24.
 */
Template.modalFileUpload.helpers({
    err: function () {
        return Session.get('err')
    },
    title: function (timestamp) {
        return Session.get('fileUpload.d')
    }
});

Template.modalFileUpload.events({
    'click .save': function (e, t) {
        var file = t.$('input[type="file"]');
        if (file.val() == '')
            Session.set('err', '请选择文件！')
        else {
            console.log(file)





        }
    }
});

Template.modalFileUpload.onRendered(function () {
        Session.set('fileUpload', null);
        this.autorun(function () {
            var fileUpload = Session.get('fileUpload')
            if (fileUpload) {
                Session.set('fileUpload.d', fileUpload)
                Session.set('err', null)
                $('#modalFileUpload').modal();
                Session.set('fileUpload', null);
            }
        })
    }
);

Template.modalFileUpload.onCreated(function () {

    }
);