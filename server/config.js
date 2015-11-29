/**
 * Created by bai on 2015/11/29.
 */



Meteor.methods({
    config: function () {
        return JSON.parse(Assets.getText('config.json'));
    }
})

