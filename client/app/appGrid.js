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
    propertyName: function () {
        return Session.get('propertyName')
    },
    project: function () {
        return Session.get('projectID')
    },
    property: function () {
        var projectID = Session.get('projectID');
        var propertyName = Session.get('propertyName');
        if (projectID && propertyName) {
            return Property.find({projectID: projectID, propertyName: propertyName}).map(function (e) {
                function unitOptions(units) {
                    if (units.indexOf(e.unit) != -1) {
                        e.selectUnit = true;
                        e.options = units.map(function (u) {
                            var res = {option: u}
                            if (u == e.unit) {
                                res.selected = 'selected'
                            }
                            return res;
                        })
                    }
                }

                unitOptions(['毫米', '厘米', '分米', '米', '英尺', '英寸'])
                function valueOptions(values) {
                    if (values.indexOf(e.value) != -1) {
                        e.selectValue = true;
                        e.options = values.map(function (v) {
                            var res = {option: v}
                            if (v == e.value) {
                                res.selected = 'selected'
                            }
                            return res;
                        })
                    }
                }

                valueOptions(['是', '否']);
                valueOptions(['50W470', '50W540', '50D23']);
                valueOptions(['单层', '双层']);
                valueOptions(['星型', '角型']);
                valueOptions(['扁线', '圆线']);
                valueOptions(['显极', '庶极']);
                valueOptions(['同侧', '异侧']);
                valueOptions(['顺时针', '逆时针']);
                valueOptions(['入槽在左边', '入槽在右边']);
                valueOptions(['解法1', '解法2']);
                valueOptions(['正弦类型', '表格输入']);
                valueOptions(['转速恒定', '转速可变']);
                valueOptions(['输出转矩', '输出功率']);
                valueOptions(['时间', '转速']);
                valueOptions(['显式四阶', '半隐式']);
                valueOptions(['方法一', '方法二']);
                valueOptions(['定子铁心', '定子绕组', '定子基座', '定子铁心绕组', '定子整机']);
                valueOptions(["机械力学参数", "机械模态特征", "谐波响应振动", "瞬态响应振动", "谐波电噪指数", "瞬态电噪指数", "谐波电磁噪声", "瞬态电磁噪声"]);
                valueOptions(["单根单排", "单根双排", "双根单排", "双根双排", "三根三排", "四根双排", "九根三排", "其他排列"]);
                valueOptions(["钢材", "铸铁", "铝合金", "其他材料"]);
                valueOptions(["过盈装配", "骨架链接"]);
                valueOptions(["智能网格剖分", "单元边长固定"]);
                valueOptions(["A型槽", "B型槽", "C型槽", "D型槽", "E型槽", "F型槽", "G型槽", "H型槽"]);
                valueOptions(['全开口矩形槽', '半开口矩形槽', '半开口圆底槽']);

                return e;
            });
        }
    },
});

Template.appGrid.events({
    'blur .edit': function (e, t) {
        var id = this._id;
        var change = e.target.value;
        var type = e.target.name;
        var edit = {};
        edit[type] = change;
        Property.update({_id: id}, {$set: edit})
    }
});

Template.appGrid.onRendered(function () {

    }
);

Template.appGrid.onCreated(function () {

    }
);