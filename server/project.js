/**
 * Created by bai on 2015/11/24.
 */
Meteor.methods({
    addProject: function (project) {
        var pid = Project.insert(project)
        propertyTemplate[0].children.forEach(function (e) {
            if (e.attributes) {
                e.attributes.property.forEach(function (p) {
                    Property.insert({
                        projectID: pid,
                        propertyName: e.text,
                        name: p.name,
                        value: p.value,
                        unit: p.unit
                    })
                })
            }
            if (e.children) {
                e.children.forEach(function (c) {
                    if (c.attributes) {
                        c.attributes.property.forEach(function (pp) {
                            Property.insert({
                                projectID: pid,
                                propertyName: c.text,
                                name: pp.name,
                                value: pp.value,
                                unit: pp.unit
                            })
                        })
                    }
                })
            }
        })
        return pid;
    },
    deleteProject: function (id) {
        Project.remove(id);
        Property.remove({projectID: id})
    }
})
Meteor.publish('project', function (id) {
    return Project.find({_id: id});
})

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


Meteor.methods({
    getProperty: function (pid, name) {
        return Property.findOne({projectID: pid, name: name})
    },
    updateProperty: function (pid, name, value, unit) {
        //console.log(pid, name, value, unit)
        return Property.update({projectID: pid, name: name}, {
            $set: {
                value: value,
                unit: unit
            }
        })
    }
})
Meteor.publish('property', function (id) {
    return Property.find({projectID: id});
})

Property.allow({
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


