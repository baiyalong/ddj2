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
    'click #IMDbEcStatorCalMain': function () {
        //端部分析-定子（解析法）
        var param = null;
        if (getValueByName('端部分析-定子（解析法）', '以下参考本体结构') != '是')
            param = ['IMDbEcStatorCalMain',
                getValueByName('端部分析-定子（解析法）', '输出功率'),
                getValueByName('端部分析-定子（解析法）', '定子线电流'),
                getValueByName('端部分析-定子（解析法）', '相数'),
                getValueByName('端部分析-定子（解析法）', '极数'),
                getValueByName('端部分析-定子（解析法）', '定子线电压'),
                getValueByName('端部分析-定子（解析法）', '定子频率'),
                getValueByName('端部分析-定子（解析法）', '定子铁心内径'),
                getValueByName('端部分析-定子（解析法）', '定子铁心长度'),
                getValueByName('端部分析-定子（解析法）', '定子槽数'),
                getValueByName('端部分析-定子（解析法）', '定子径向通风道数量'),
                getValueByName('端部分析-定子（解析法）', '定子径向通风道宽度'),
                getValueByName('端部分析-定子（解析法）', '定子槽型'),
                getValueByName('端部分析-定子（解析法）', '定子槽尺寸Bs0'),
                getValueByName('端部分析-定子（解析法）', '定子槽尺寸Bs1'),
                getValueByName('端部分析-定子（解析法）', '定子槽尺寸Bs2'),
                getValueByName('端部分析-定子（解析法）', '定子槽尺寸Hs0'),
                getValueByName('端部分析-定子（解析法）', '定子槽尺寸Hs1'),
                getValueByName('端部分析-定子（解析法）', '定子槽尺寸Hs2'),
                getValueByName('端部分析-定子（解析法）', '转子铁心外径'),
                getValueByName('端部分析-定子（解析法）', '转子铁心长度'),
                getValueByName('端部分析-定子（解析法）', '转子槽数'),
                getValueByName('端部分析-定子（解析法）', '转子径向通风道数量'),
                getValueByName('端部分析-定子（解析法）', '转子径向通风道宽度'),
                getValueByName('端部分析-定子（解析法）', '转子斜槽圆周长度'),
                getValueByName('端部分析-定子（解析法）', '转子槽型'),
                getValueByName('端部分析-定子（解析法）', '转子槽尺寸Br0'),
                getValueByName('端部分析-定子（解析法）', '转子槽尺寸Br1'),
                getValueByName('端部分析-定子（解析法）', '转子槽尺寸Br2'),
                getValueByName('端部分析-定子（解析法）', '转子槽尺寸Br3'),
                getValueByName('端部分析-定子（解析法）', '转子槽尺寸Br4'),
                getValueByName('端部分析-定子（解析法）', '转子槽尺寸Hr0'),
                getValueByName('端部分析-定子（解析法）', '转子槽尺寸Hr1'),
                getValueByName('端部分析-定子（解析法）', '转子槽尺寸Hr2'),
                getValueByName('端部分析-定子（解析法）', '定子槽楔厚度'),
                getValueByName('端部分析-定子（解析法）', '定子楔下垫条厚度'),
                getValueByName('端部分析-定子（解析法）', '定子槽底垫条厚度'),
                getValueByName('端部分析-定子（解析法）', '定子端部伸出单边直径长'),
                getValueByName('端部分析-定子（解析法）', '定子端部斜边轴向投影长'),
                getValueByName('端部分析-定子（解析法）', '转子导条长'),
                getValueByName('端部分析-定子（解析法）', '转子端环平均直径'),
                getValueByName('端部分析-定子（解析法）', '定子绕组接法'),
                getValueByName('端部分析-定子（解析法）', '定子每槽导体数'),
                getValueByName('端部分析-定子（解析法）', '定子并联支路数'),
                getValueByName('端部分析-定子（解析法）', '定子线圈截距'),
                getValueByName('端部分析-定子（解析法）', '定子端部端箍数量'),
                getValueByName('端部分析-定子（解析法）', '定子端部端箍面积'),
            ]
        else
            param = ['IMDbEcStatorCalMain',
                getValueByName('端部分析-定子（解析法）', '输出功率'),
                getValueByName('端部分析-定子（解析法）', '定子线电流'),
                getValueByName('基本参数', '相数'),
                getValueByName('基本参数', '极数'),
                getValueByName('端部分析-定子（解析法）', '定子线电压'),
                getValueByName('端部分析-定子（解析法）', '定子频率'),
                getValueByName('定子铁心', '定子铁心内径'),
                getValueByName('定子铁心', '定子铁心长度'),
                getValueByName('定子铁心', '定子槽数'),
                getValueByName('定子铁心', '定子径向通风道数量'),
                getValueByName('定子铁心', '定子径向通风道宽度'),
                getValueByName('定子铁心', '定子槽型'),
                getValueByName('定子铁心', '定子槽尺寸Bs0'),
                getValueByName('定子铁心', '定子槽尺寸Bs1'),
                getValueByName('定子铁心', '定子槽尺寸Bs2'),
                getValueByName('定子铁心', '定子槽尺寸Hs0'),
                getValueByName('定子铁心', '定子槽尺寸Hs1'),
                getValueByName('定子铁心', '定子槽尺寸Hs2'),
                getValueByName('转子铁心', '转子铁心外径'),
                getValueByName('转子铁心', '转子铁心长度'),
                getValueByName('转子铁心', '转子槽数'),
                getValueByName('转子铁心', '转子径向通风道数量'),
                getValueByName('转子铁心', '转子径向通风道宽度'),
                getValueByName('转子铁心', '转子斜槽圆周长度'),
                getValueByName('转子铁心', '转子槽型'),
                getValueByName('转子铁心', '转子槽尺寸Br0'),
                getValueByName('转子铁心', '转子槽尺寸Br1'),
                getValueByName('转子铁心', '转子槽尺寸Br2'),
                getValueByName('转子铁心', '转子槽尺寸Br3'),
                getValueByName('转子铁心', '转子槽尺寸Br4'),
                getValueByName('转子铁心', '转子槽尺寸Hr0'),
                getValueByName('转子铁心', '转子槽尺寸Hr1'),
                getValueByName('转子铁心', '转子槽尺寸Hr2'),
                getValueByName('定子绕组', '定子槽楔厚度'),
                getValueByName('端部分析-定子（解析法）', '定子楔下垫条厚度'),
                getValueByName('端部分析-定子（解析法）', '定子槽底垫条厚度'),
                getValueByName('定子绕组', '定子端部伸出单边直径长'),
                getValueByName('定子绕组', '定子端部斜边轴向投影长'),
                getValueByName('转子鼠笼', '转子导条总长'),
                getValueByName('转子鼠笼', '转子端环平均直径'),
                getValueByName('定子绕组', '定子绕组接法'),
                getValueByName('定子绕组', '定子每槽导体数'),
                getValueByName('定子绕组', '定子并联支路数'),
                getValueByName('定子绕组', '定子线圈截距'),
                getValueByName('端部分析-定子（解析法）', '定子端部端箍数量'),
                getValueByName('端部分析-定子（解析法）', '定子端部端箍面积'),
            ]
        console.log(param.join(','))
        Session.set('appPrint', 'send:' + param.join(','))
        ws.send(param.join(','))
    },
    'click #IMMeEcStatorCalMain': function () {
        //机械分析-定子（解析法）
        var param = null;
        if (getValueByName('机械分析-定子（解析法）', '以下参考本体结构') != '是')
            param = ['IMMeEcStatorCalMain',
                getValueByName('机械分析-定子（解析法）', '极数'),
                getValueByName('机械分析-定子（解析法）', '定子铁心内径'),
                getValueByName('机械分析-定子（解析法）', '定子铁心外径'),
                getValueByName('机械分析-定子（解析法）', '定子铁心长度'),
                getValueByName('机械分析-定子（解析法）', '定子槽数'),
                getValueByName('机械分析-定子（解析法）', '定子径向通风道数量'),
                getValueByName('机械分析-定子（解析法）', '定子径向通风道宽度'),
                getValueByName('机械分析-定子（解析法）', '定子铁心叠压系数'),
                getValueByName('机械分析-定子（解析法）', '定子槽型'),
                getValueByName('机械分析-定子（解析法）', '定子槽尺寸Bs0'),
                getValueByName('机械分析-定子（解析法）', '定子槽尺寸Bs1'),
                getValueByName('机械分析-定子（解析法）', '定子槽尺寸Bs2'),
                getValueByName('机械分析-定子（解析法）', '定子槽尺寸Hs0'),
                getValueByName('机械分析-定子（解析法）', '定子槽尺寸Hs1'),
                getValueByName('机械分析-定子（解析法）', '定子槽尺寸Hs2'),
                getValueByName('机械分析-定子（解析法）', '定子绕组层数'),
                getValueByName('机械分析-定子（解析法）', '定子每槽导体数'),
                getValueByName('机械分析-定子（解析法）', '定子导线类型'),
                getValueByName('机械分析-定子（解析法）', '定子线规并绕根数'),
                getValueByName('机械分析-定子（解析法）', '定子线规裸线直径'),
                getValueByName('机械分析-定子（解析法）', '定子线规裸线窄边尺寸'),
                getValueByName('机械分析-定子（解析法）', '定子线规裸线宽边尺寸'),
                getValueByName('机械分析-定子（解析法）', '定子线圈平均半匝长'),
                getValueByName('机械分析-定子（解析法）', '模态最高阶次'),
                getValueByName('机械分析-定子（解析法）', '力波阶次'),
                getValueByName('机械分析-定子（解析法）', '力波频率'),
                getValueByName('机械分析-定子（解析法）', '力波幅值'),
                getValueByName('机械分析-定子（解析法）', '分析计算类型'),
            ]
        else
            param = ['IMMeEcStatorCalMain',
                getValueByName('基本参数', '极数'),
                getValueByName('定子铁心', '定子铁心内径'),
                getValueByName('定子铁心', '定子铁心外径'),
                getValueByName('定子铁心', '定子铁心长度'),
                getValueByName('定子铁心', '定子槽数'),
                getValueByName('定子铁心', '定子径向通风道数量'),
                getValueByName('定子铁心', '定子径向通风道宽度'),
                getValueByName('定子铁心', '定子铁心叠压系数'),
                getValueByName('定子铁心', '定子槽型'),
                getValueByName('定子铁心', '定子槽尺寸Bs0'),
                getValueByName('定子铁心', '定子槽尺寸Bs1'),
                getValueByName('定子铁心', '定子槽尺寸Bs2'),
                getValueByName('定子铁心', '定子槽尺寸Hs0'),
                getValueByName('定子铁心', '定子槽尺寸Hs1'),
                getValueByName('定子铁心', '定子槽尺寸Hs2'),
                getValueByName('定子绕组', '定子绕组层数'),
                getValueByName('定子绕组', '定子每槽导体数'),
                getValueByName('定子绕组', '定子导线类型'),
                getValueByName('定子绕组', '定子线规并绕根数'),
                getValueByName('定子绕组', '定子线规裸线直径'),
                getValueByName('定子绕组', '定子线规裸线窄边尺寸'),
                getValueByName('定子绕组', '定子线规裸线宽边尺寸'),
                getValueByName('定子绕组', '定子线圈平均半匝长'),
                getValueByName('机械分析-定子（解析法）', '模态最高阶次'),
                getValueByName('机械分析-定子（解析法）', '力波阶次'),
                getValueByName('机械分析-定子（解析法）', '力波频率'),
                getValueByName('机械分析-定子（解析法）', '力波幅值'),
                getValueByName('机械分析-定子（解析法）', '分析计算类型'),
            ]
        console.log(param.join(','))
        Session.set('appPrint', 'send:' + param.join(','))
        ws.send(param.join(','))
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


function getValueByName(propertyName, name) {
    var projectID = Session.get('projectID');
    var properties = Property.find({projectID: projectID}).fetch();
    var property = properties.find(function (e) {
        return e.propertyName == propertyName && e.name == name
    });
    if (property === undefined) {
        console.log(propertyName, name)
        return;
    }
    if (property.unit == '毫米')return property.value;
    if (property.unit == '厘米')return property.value * 10;
    if (property.unit == '分米')return property.value * 100;
    if (property.unit == '米')return property.value * 1000;
    if (property.unit == '英尺')return property.value * 308.4;
    if (property.unit == '英寸')return property.value * 25.4;
    if (property.value == '全开口矩形槽')return 1;
    if (property.value == '半开口矩形槽')return 2;
    if (property.value == '半开口圆底槽')return 3;
    if (property.value == 'A型槽')return 1;
    if (property.value == 'B型槽')return 2;
    if (property.value == 'C型槽')return 3;
    if (property.value == 'D型槽')return 4;
    if (property.value == 'E型槽')return 5;
    if (property.value == 'F型槽')return 6;
    if (property.value == 'G型槽')return 7;
    if (property.value == 'H型槽')return 8;
    if (property.value == '星型')return 0;
    if (property.value == '角型')return 1;
    if (property.value == '单层')return 1;
    if (property.value == '双层')return 2;
    if (property.value == '扁线')return 1;
    if (property.value == '圆线')return 2;
    if (property.value == '模态频率')return 0;
    if (property.value == '电磁振动')return 1;
    if (property.value == '电磁噪声')return 2;
    return property.value;
}