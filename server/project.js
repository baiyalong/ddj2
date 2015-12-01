/**
 * Created by bai on 2015/11/24.
 */


Project.allow({
    insert: function () {
        return true;
    },
    remove: function () {
        return true;
    },
    update: function () {
        return true;
    },
})
Meteor.publish('project', function (id) {
    return Project.find({_id: id});
})
