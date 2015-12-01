/**
 * Created by bai on 2015/11/24.
 */
/**
 * Created by bai on 2015/11/24.
 */
Template.appTree.helpers({
    project: function () {
        return Session.get('projectID')
    }
});

Template.appTree.events({});

Template.appTree.onRendered(function () {
        function getTree() {
            // Some logic to retrieve, or generate tree structure
            var tree = [
                {
                    text: "Parent 1",
                    nodes: [
                        {
                            text: "Child 1",
                            nodes: [
                                {
                                    text: "Grandchild 1"
                                },
                                {
                                    text: "Grandchild 2"
                                }
                            ]
                        },
                        {
                            text: "Child 2"
                        }
                    ]
                },
                {
                    text: "Parent 2"
                },
                {
                    text: "Parent 3"
                },
                {
                    text: "Parent 4"
                },
                {
                    text: "Parent 5"
                }
            ];
            return tree;
        }

        $('#tree').treeview({data: getTree()});
    }
);

Template.appTree.onCreated(function () {

    }
);