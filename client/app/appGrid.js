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
    name: function () {
        return 'name';
    },
    value: function () {
        return 'value';
    },
    unit: function () {
        return 'unit';
    }
});

Template.appGrid.events({});

Template.appGrid.onRendered(function () {

        $('.editable').editable({
            mode: 'inline',
            showbuttons: false,
            success: function (response, newValue) {
                //<do something with newValue - usually a collection.update call>
            }
        });
        $('.edit-select').editable({
            mode: 'inline',
            showbuttons: false,
            value: 2,
            source: [
                {value: 1, text: 'Active'},
                {value: 2, text: 'Blocked'},
                {value: 3, text: 'Deleted'}
            ]
        });
        $('.status').editable({
            mode: 'inline',
            showbuttons: false,
            value: 2,
            source: [
                {value: 1, text: 'Active'},
                {value: 2, text: 'Blocked'},
                {value: 3, text: 'Deleted'}
            ]
        });
    }
);

Template.appGrid.onCreated(function () {
        //$.fn.editable.defaults.mode = 'inline';
    }
);