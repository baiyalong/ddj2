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
        if (!project)return;
        var projectType = project.projectType;
        $('#tree').treeview({
            onNodeSelected: function (event, data) {
                Session.set('propertyName', data.text)
            },
            data: [
                {
                    text: (function (projectType) {
                        if (projectType == 'raoxian') return "绕线型三相异步电动机";
                        else if (projectType == 'shulong') return "鼠笼型三相异步电动机";
                    })(projectType),
                    nodes: [
                        {
                            text: "本体结构",
                            nodes: [
                                {text: "基本参数"},
                                {text: "定子铁心"},
                                {text: "定子绕组"},
                                {text: "转子铁心"},
                                {text: "转子绕组"},
                                {text: "转子鼠笼"},
                                // {
                                //     text: (function (projectType) {
                                //         if (projectType == 'raoxian') return "转子绕组";
                                //         else if (projectType == 'shulong') return "转子鼠笼";
                                //     })(projectType)
                                // },
                            ]
                        },
                        {
                            text: "电磁分析-稳态（解析法）",
                            nodes: [
                                {text: "文本结果"},
                                {text: "曲线结果"},
                            ]
                        },
                        {
                            text: "电磁分析-暂态（解析法）",
                            nodes: [
                                {text: "曲线结果"},
                            ]
                        },
                        {
                            text: "电磁分析-暂态（数值法）",
                            nodes: [
                                {text: "网格生成"},
                                {text: "文本结果"},
                                {text: "曲线结果"},
                            ]
                        },
                        {
                            text: "机械分析-定子（解析法）",
                            nodes: [
                                {text: "文本结果"},
                            ]
                        },
                        {
                            text: "机械分析-定子（数值法）",
                        },
                        {
                            text: "端部分析-定子（解析法）",
                            nodes: [
                                {text: "文本结果"},
                            ]
                        },
                    ]
                },
            ]
        });
    }
);

Template.appTree.onCreated(function () {

    }
);