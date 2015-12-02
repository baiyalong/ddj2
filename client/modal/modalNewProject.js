/**
 * Created by bai on 2015/11/29.
 */
/**
 * Created by bai on 2015/11/24.
 */
Template.modalNewProject.helpers({
    err: function () {
        return Session.get('err')
    }
});

Template.modalNewProject.events({
    'click .save': function (e, t) {

        var projectName = t.$('#projectName').val().trim();
        var projectType = t.$('input:radio[name="projectType"]:checked').val();
        var projectUser = Meteor.user().username;
        if (projectName == '') {
            Session.set('err', '工程名称不能为空！')
        } else {
            Meteor.call('addProject', {
                projectName: projectName,
                projectType: projectType,
                projectUser: projectUser,
                createdAt: new Date(),
                updatedAt: new Date(),
                //tree: ,
                //grid: [{
                //    name: '基本参数',
                //    "property": [
                //        {
                //            "name": "相数",
                //            "value": 3,
                //            "unit": null
                //        },
                //        {
                //            "name": "极数",
                //            "value": 2,
                //            "unit": null
                //        }
                //    ]
                //}, {
                //    name: "定子铁心",
                //    "property": [
                //        {
                //            "name": "定子外径",
                //            "value": "740.00",
                //            "unit": "毫米"
                //        },
                //        {
                //            "name": "定子内径",
                //            "value": "450.00",
                //            "unit": "毫米"
                //        },
                //        {
                //            "name": "定子铁心长度",
                //            "value": "380.00",
                //            "unit": "毫米"
                //        },
                //        {
                //            "name": "叠压系数",
                //            "value": "0.97",
                //            "unit": null
                //        },
                //        {
                //            "name": "铁心牌号",
                //            "value": "50W470",
                //            "unit": null
                //        },
                //        {
                //            "name": "定子槽数",
                //            "value": "48",
                //            "unit": null
                //        },
                //        {
                //            "name": "定子槽型",
                //            "value": "全开口矩形槽",
                //            "unit": null
                //        },
                //        {
                //            "name": "定子槽尺寸Hs0",
                //            "value": "1.00",
                //            "unit": "毫米"
                //        },
                //        {
                //            "name": "定子槽尺寸Hs1",
                //            "value": "4.00",
                //            "unit": "毫米"
                //        },
                //        {
                //            "name": "定子槽尺寸Hs2",
                //            "value": "66.00",
                //            "unit": "毫米"
                //        },
                //        {
                //            "name": "定子槽尺寸Bs0",
                //            "value": "15.00",
                //            "unit": "毫米"
                //        },
                //        {
                //            "name": "定子槽尺寸Bs1",
                //            "value": "17.00",
                //            "unit": "毫米"
                //        },
                //        {
                //            "name": "定子槽尺寸Bs2",
                //            "value": "18.00",
                //            "unit": "毫米"
                //        },
                //        {
                //            "name": "径向通风道数",
                //            "value": "5",
                //            "unit": null
                //        },
                //        {
                //            "name": "径向通风道宽度",
                //            "value": "10.00",
                //            "unit": "毫米"
                //        },
                //        {
                //            "name": "铁心电导率",
                //            "value": "0.01",
                //            "unit": "MS/m"
                //        },
                //        {
                //            "name": "定子内圆为椭圆",
                //            "value": "是",
                //            "unit": null
                //        },
                //        {
                //            "name": "长轴相对量",
                //            "value": "1.00",
                //            "unit": null
                //        },
                //        {
                //            "name": "短轴相对量",
                //            "value": "1.00",
                //            "unit": null
                //        }
                //    ]
                //}, {
                //    name: "定子绕组",
                //    "property": [
                //        {
                //            "name": "定子绕组层数",
                //            "value": "双层",
                //            "unit": null
                //        },
                //        {
                //            "name": "定子绕组接法",
                //            "value": "星型",
                //            "unit": null
                //        },
                //        {
                //            "name": "并联支路数",
                //            "value": "1",
                //            "unit": null
                //        },
                //        {
                //            "name": "每槽导体数",
                //            "value": "0",
                //            "unit": null
                //        },
                //        {
                //            "name": "线圈截距",
                //            "value": "0",
                //            "unit": null
                //        },
                //        {
                //            "name": "导线类型",
                //            "value": "扁线",
                //            "unit": null
                //        },
                //        {
                //            "name": "线规并绕根数",
                //            "value": "0",
                //            "unit": null
                //        },
                //        {
                //            "name": "线规裸线直径",
                //            "value": "0",
                //            "unit": "毫米"
                //        },
                //        {
                //            "name": "线规裸线窄边尺寸",
                //            "value": "0",
                //            "unit": "毫米"
                //        },
                //        {
                //            "name": "线规裸线宽边尺寸",
                //            "value": "0",
                //            "unit": "毫米"
                //        },
                //        {
                //            "name": "线圈平均半匝长",
                //            "value": "0",
                //            "unit": "毫米"
                //        },
                //        {
                //            "name": "端部伸出单边直径长",
                //            "value": "0",
                //            "unit": "毫米"
                //        },
                //        {
                //            "name": "端部斜边轴向投影长",
                //            "value": "0",
                //            "unit": "毫米"
                //        },
                //        {
                //            "name": "线圈电阻率",
                //            "value": "0",
                //            "unit": "Ωmm^2/m"
                //        },
                //        {
                //            "name": "槽楔厚度",
                //            "value": "0",
                //            "unit": "毫米"
                //        },
                //        {
                //            "name": "槽楔比磁导",
                //            "value": "1",
                //            "unit": null
                //        },
                //        {
                //            "name": "定子绕组连接类型",
                //            "value": "显极",
                //            "unit": null
                //        },
                //        {
                //            "name": "定子绕组相序",
                //            "value": "逆时针",
                //            "unit": null
                //        },
                //        {
                //            "name": "定子槽号排序",
                //            "value": "逆时针",
                //            "unit": null
                //        },
                //        {
                //            "name": "定子线圈形状",
                //            "value": "入槽在右边",
                //            "unit": null
                //        }
                //    ]
                //}, {
                //    name: "转子铁心",
                //    "property": [
                //        {
                //            "name": "转子外径",
                //            "value": "0",
                //            "unit": "毫米"
                //        },
                //        {
                //            "name": "转子内径",
                //            "value": "0",
                //            "unit": "毫米"
                //        },
                //        {
                //            "name": "转子铁心长度",
                //            "value": "0",
                //            "unit": "毫米"
                //        },
                //        {
                //            "name": "叠压系数",
                //            "value": "0.97",
                //            "unit": null
                //        },
                //        {
                //            "name": "铁心牌号",
                //            "value": "50W470",
                //            "unit": null
                //        },
                //        {
                //            "name": "转子槽数",
                //            "value": "0",
                //            "unit": null
                //        },
                //        {
                //            "name": "转子槽类型",
                //            "value": "A型槽",
                //            "unit": null
                //        },
                //        {
                //            "name": "转子槽尺寸Hr0",
                //            "value": "0",
                //            "unit": "毫米"
                //        },
                //        {
                //            "name": "转子槽尺寸Hr1",
                //            "value": "0",
                //            "unit": "毫米"
                //        },
                //        {
                //            "name": "转子槽尺寸Hr2",
                //            "value": "0",
                //            "unit": "毫米"
                //        },
                //        {
                //            "name": "转子槽尺寸Br0",
                //            "value": "0",
                //            "unit": "毫米"
                //        },
                //        {
                //            "name": "转子槽尺寸Br1",
                //            "value": "0",
                //            "unit": "毫米"
                //        },
                //        {
                //            "name": "转子槽尺寸Br2",
                //            "value": "0",
                //            "unit": "毫米"
                //        },
                //        {
                //            "name": "转子槽尺寸Br3",
                //            "value": "0",
                //            "unit": "毫米"
                //        },
                //        {
                //            "name": "转子槽尺寸Br4",
                //            "value": "0",
                //            "unit": "毫米"
                //        },
                //        {
                //            "name": "径向通风道数",
                //            "value": "0",
                //            "unit": null
                //        },
                //        {
                //            "name": "径向通风道宽度",
                //            "value": "10",
                //            "unit": "毫米"
                //        },
                //        {
                //            "name": "铁心电导率",
                //            "value": "0.01",
                //            "unit": "MS/m"
                //        },
                //        {
                //            "name": "斜槽圆周长度",
                //            "value": "0",
                //            "unit": "毫米"
                //        },
                //        {
                //            "name": "转子静态偏心",
                //            "value": "是",
                //            "unit": null
                //        },
                //        {
                //            "name": "静态相对偏心量",
                //            "value": "0",
                //            "unit": null
                //        },
                //        {
                //            "name": "转子动态偏心",
                //            "value": "是",
                //            "unit": null
                //        },
                //        {
                //            "name": "动态相对偏心量",
                //            "value": "0",
                //            "unit": null
                //        }
                //    ]
                //}, {
                //    name: "转子绕组",
                //    "property": [
                //        {
                //            "name": "转子绕组层数",
                //            "value": "双层",
                //            "unit": null
                //        },
                //        {
                //            "name": "转子绕组接法",
                //            "value": "星型",
                //            "unit": null
                //        },
                //        {
                //            "name": "并联支路数",
                //            "value": "1",
                //            "unit": null
                //        },
                //        {
                //            "name": "每槽导体数",
                //            "value": "0",
                //            "unit": null
                //        },
                //        {
                //            "name": "线圈截距",
                //            "value": "0",
                //            "unit": "槽"
                //        },
                //        {
                //            "name": "导线类型",
                //            "value": "扁线",
                //            "unit": null
                //        },
                //        {
                //            "name": "线归并绕根数",
                //            "value": "0",
                //            "unit": null
                //        },
                //        {
                //            "name": "线归裸线直径",
                //            "value": "0",
                //            "unit": "毫米"
                //        },
                //        {
                //            "name": "线归裸线窄边尺寸",
                //            "value": "0",
                //            "unit": "毫米"
                //        },
                //        {
                //            "name": "线归裸线宽边尺寸",
                //            "value": "0",
                //            "unit": "毫米"
                //        },
                //        {
                //            "name": "线圈平均半匝长",
                //            "value": "0",
                //            "unit": "毫米"
                //        },
                //        {
                //            "name": "线圈电阻率",
                //            "value": "0",
                //            "unit": "Ωmm^2/m"
                //        },
                //        {
                //            "name": "槽楔厚度",
                //            "value": "0",
                //            "unit": null
                //        },
                //        {
                //            "name": "槽楔比磁导",
                //            "value": "1",
                //            "unit": null
                //        },
                //        {
                //            "name": "乙类波绕组",
                //            "value": "否",
                //            "unit": null
                //        },
                //        {
                //            "name": "转子绕组连接类型",
                //            "value": "显极",
                //            "unit": null
                //        },
                //        {
                //            "name": "转子绕组相序",
                //            "value": "同侧",
                //            "unit": null
                //        },
                //        {
                //            "name": "转子槽号排序",
                //            "value": "逆时针",
                //            "unit": null
                //        },
                //        {
                //            "name": "转子线圈形状",
                //            "value": "入槽在右边",
                //            "unit": null
                //        }
                //    ]
                //}]
            }, function (err, res) {
                if (err)
                    Session.set('err', err.message)
                else {
                    t.$('#modalNewProject').modal('hide');
                    t.$('#projectName').val('');
                    Session.set('err', null);
                    Router.go('/app/' + res)
                }
            })
        }
    }
});

Template.modalNewProject.onRendered(function () {
        Session.set('newProject', false);
        this.autorun(function () {
            if (Session.get('newProject')) {
                Session.set('err', null)
                $('#modalNewProject').modal();
                Session.set('newProject', false);
            }
        })
    }
);

Template.modalNewProject.onCreated(function () {

    }
);