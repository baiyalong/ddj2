/**
 * Created by bai on 2015/11/24.
 */
/**
 * Created by bai on 2015/11/24.
 */
Template.appPrint.helpers({});

Template.appPrint.events({});

Template.appPrint.onRendered(function () {
        //Session.set('appPrint', null);
        this.autorun(function () {
            var message = Session.get('appPrint')
            if (message) {
                $('textArea').append(message + '\t' + moment(new Date()).format('HH:mm:ss') + '\n')
                Session.set('appPrint', null);
            }
        })
    }
);

Template.appPrint.onCreated(function () {

    }
);