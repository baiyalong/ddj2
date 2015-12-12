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
    'click #IMEmEcSteadCalMain': function () {
        //电磁分析-稳态（解析法）
        var project = Session.get('project');
        if (!project) return;
        var projectType = project.projectType;
        var param = ['IMEmEcSteadCalMain',
            (function (projectType) {
                if (projectType == 'raoxian') return 2;
                else if (projectType == 'shulong') return 1;
            })(projectType),
            getValueByName('基本参数', '相数'),
            getValueByName('基本参数', '极数'),
            getValueByName('定子铁心', '定子铁心外径'),
            getValueByName('定子铁心', '定子铁心内径'),
            getValueByName('定子铁心', '定子铁心长度'),
            getValueByName('定子铁心', '定子槽数'),
            getValueByName('定子铁心', '定子径向通风道数量'),
            getValueByName('定子铁心', '定子径向通风道宽度'),
            getValueByName('定子铁心', '定子铁心叠压系数'),
            getValueByName('定子铁心', '定子铁心牌号'),
            getValueByName('定子铁心', '定子铁心电导率'),
            getValueByName('定子铁心', '定子槽型'),
            getValueByName('定子铁心', '定子槽尺寸Bs0'),
            getValueByName('定子铁心', '定子槽尺寸Bs1'),
            getValueByName('定子铁心', '定子槽尺寸Bs2'),
            getValueByName('定子铁心', '定子槽尺寸Hs0'),
            getValueByName('定子铁心', '定子槽尺寸Hs1'),
            getValueByName('定子铁心', '定子槽尺寸Hs2'),
            getValueByName('定子铁心', '长轴相对量'),
            getValueByName('定子铁心', '短轴相对量'),
            getValueByName('定子绕组', '定子绕组接法'),
            getValueByName('定子绕组', '定子绕组层数'),
            getValueByName('定子绕组', '定子并联支路数'),
            getValueByName('定子绕组', '定子线圈截距'),
            getValueByName('定子绕组', '定子每槽导体数'),
            getValueByName('定子绕组', '定子线圈平均半匝长'),
            getValueByName('定子绕组', '定子线圈电阻率'),
            getValueByName('定子绕组', '定子槽楔厚度'),
            getValueByName('定子绕组', '定子槽楔比磁导'),
            getValueByName('定子绕组', '定子导线类型'),
            getValueByName('定子绕组', '定子线规并绕根数'),
            getValueByName('定子绕组', '定子线规裸线直径'),
            getValueByName('定子绕组', '定子线规裸线窄边尺寸'),
            getValueByName('定子绕组', '定子线规裸线宽边尺寸'),
            getValueByName('定子绕组', '定子端部伸出单边直径长'),
            getValueByName('定子绕组', '定子端部斜边轴向投影长'),
            getValueByName('定子绕组', '定子绕组相序'),
            getValueByName('定子绕组', '定子槽号排序'),
            getValueByName('定子绕组', '定子线圈形状'),
            getValueByName('定子绕组', '定子绕组连接类型'),
            '定子线圈输入框存储矩阵',
            getValueByName('转子铁心', '转子铁心外径'),
            getValueByName('转子铁心', '转子铁心内径'),
            getValueByName('转子铁心', '转子铁心长度'),
            getValueByName('转子铁心', '转子槽数'),
            getValueByName('转子铁心', '转子径向通风道数量'),
            getValueByName('转子铁心', '转子径向通风道宽度'),
            getValueByName('转子铁心', '转子斜槽圆周长度'),
            getValueByName('转子铁心', '转子铁心叠压系数'),
            getValueByName('转子铁心', '转子铁心牌号'),
            getValueByName('转子铁心', '转子铁心电导率'),
            getValueByName('转子铁心', '转子槽型'),
            getValueByName('转子铁心', '转子槽尺寸Br0'),
            getValueByName('转子铁心', '转子槽尺寸Br1'),
            getValueByName('转子铁心', '转子槽尺寸Br2'),
            getValueByName('转子铁心', '转子槽尺寸Br3'),
            getValueByName('转子铁心', '转子槽尺寸Br4'),
            getValueByName('转子铁心', '转子槽尺寸Hr0'),
            getValueByName('转子铁心', '转子槽尺寸Hr1'),
            getValueByName('转子铁心', '转子槽尺寸Hr2'),
            getValueByName('转子铁心', '静态相对偏心量'),
            getValueByName('转子铁心', '动态相对偏心量'),
            getValueByName('转子绕组', '转子绕组接法'),
            getValueByName('转子绕组', '转子并联支路数'),
            getValueByName('转子绕组', '转子绕组层数'),
            getValueByName('转子绕组', '转子每槽导体数'),
            getValueByName('转子绕组', '转子线圈截距'),
            getValueByName('转子绕组', '转子线圈平均半匝长'),
            getValueByName('转子绕组', '转子线圈电阻率'),
            getValueByName('转子绕组', '转子槽楔厚度'),
            getValueByName('转子绕组', '转子槽楔比磁导'),
            getValueByName('转子绕组', '转子导线类型'),
            getValueByName('转子绕组', '转子线归并绕根数'),
            getValueByName('转子绕组', '转子线归裸线直径'),
            getValueByName('转子绕组', '转子线归裸线宽边尺寸'),
            getValueByName('转子绕组', '转子线归裸线窄边尺寸'),
            getValueByName('转子绕组', '转子绕组相序'),
            '转子绕组相序方向标志数(*****非读取参数*****)',
            getValueByName('转子绕组', '转子槽号排序'),
            getValueByName('转子绕组', '转子线圈形状'),
            getValueByName('转子绕组', '转子绕组连接类型'),
            '转子线圈输入框存储矩阵',
            getValueByName('转子鼠笼', '转子导条总长'),
            getValueByName('转子鼠笼', '转子端环平均直径'),
            getValueByName('转子鼠笼', '转子端环宽度'),
            getValueByName('转子鼠笼', '转子端环高度'),
            getValueByName('转子鼠笼', '转子导条电阻率'),
            getValueByName('转子鼠笼', '转子端环电阻率'),
            getValueByName('电磁分析-稳态（解析法）', '定子线电压'),
            getValueByName('电磁分析-稳态（解析法）', '线电压频率'),
            getValueByName('电磁分析-稳态（解析法）', '转子转差率'),
            getValueByName('电磁分析-稳态（解析法）', '力波最高阶次'),
            getValueByName('电磁分析-稳态（解析法）', '求解方法'),
        ]
        console.log(param.join(','))
        Session.set('appPrint', 'send:' + param.join(','))
        ws.send(param.join(','))
    },
    'click #IMEmEcTransCalMain': function () {
        //电磁分析-暂态（解析法）
        var project = Session.get('project');
        if (!project) return;
        var param = ['IMEmEcTransCalMain',
            getValueByName('电磁分析-暂态（解析法）', '解方程龙格库塔法'),
            getValueByName('基本参数', '相数'),
            getValueByName('基本参数', '极数'),
            getValueByName('定子铁心', '定子铁心外径'),
            getValueByName('定子铁心', '定子铁心内径'),
            getValueByName('定子铁心', '定子铁心长度'),
            getValueByName('定子铁心', '定子槽数'),
            getValueByName('定子铁心', '定子径向通风道数量'),
            getValueByName('定子铁心', '定子径向通风道宽度'),
            getValueByName('定子铁心', '定子铁心叠压系数'),
            getValueByName('定子铁心', '定子铁心牌号'),
            getValueByName('定子铁心', '定子槽型'),
            getValueByName('定子铁心', '定子槽尺寸Bs0'),
            getValueByName('定子铁心', '定子槽尺寸Bs1'),
            getValueByName('定子铁心', '定子槽尺寸Bs2'),
            getValueByName('定子铁心', '定子槽尺寸Hs0'),
            getValueByName('定子铁心', '定子槽尺寸Hs1'),
            getValueByName('定子铁心', '定子槽尺寸Hs2'),
            getValueByName('定子铁心', '长轴相对量'),
            getValueByName('定子铁心', '短轴相对量'),
            getValueByName('定子绕组', '定子绕组接法'),
            getValueByName('定子绕组', '定子绕组层数'),
            getValueByName('定子绕组', '定子并联支路数'),
            getValueByName('定子绕组', '定子线圈截距'),
            getValueByName('定子绕组', '定子每槽导体数'),
            getValueByName('定子绕组', '定子线圈平均半匝长'),
            getValueByName('定子绕组', '定子线圈电阻率'),
            getValueByName('定子绕组', '定子槽楔厚度'),
            getValueByName('定子绕组', '定子槽楔比磁导'),
            getValueByName('定子绕组', '定子导线类型'),
            getValueByName('定子绕组', '定子线规并绕根数'),
            getValueByName('定子绕组', '定子线规裸线直径'),
            getValueByName('定子绕组', '定子线规裸线窄边尺寸'),
            getValueByName('定子绕组', '定子线规裸线宽边尺寸'),
            getValueByName('定子绕组', '定子端部伸出单边直径长'),
            getValueByName('定子绕组', '定子端部斜边轴向投影长'),
            getValueByName('定子绕组', '定子绕组相序'),
            getValueByName('定子绕组', '定子槽号排序'),
            getValueByName('定子绕组', '定子线圈形状'),
            getValueByName('定子绕组', '定子绕组连接类型'),
            '定子线圈输入框存储矩阵',
            getValueByName('转子铁心', '转子铁心外径'),
            getValueByName('转子铁心', '转子铁心内径'),
            getValueByName('转子铁心', '转子铁心长度'),
            getValueByName('转子铁心', '转子槽数'),
            getValueByName('转子铁心', '转子径向通风道数量'),
            getValueByName('转子铁心', '转子径向通风道宽度'),
            getValueByName('转子铁心', '转子斜槽圆周长度'),
            getValueByName('转子铁心', '转子铁心叠压系数'),
            getValueByName('转子铁心', '转子铁心牌号'),
            getValueByName('转子铁心', '转子槽型'),
            getValueByName('转子铁心', '转子槽尺寸Br0'),
            getValueByName('转子铁心', '转子槽尺寸Br1'),
            getValueByName('转子铁心', '转子槽尺寸Br2'),
            getValueByName('转子铁心', '转子槽尺寸Br3'),
            getValueByName('转子铁心', '转子槽尺寸Br4'),
            getValueByName('转子铁心', '转子槽尺寸Hr0'),
            getValueByName('转子铁心', '转子槽尺寸Hr1'),
            getValueByName('转子铁心', '转子槽尺寸Hr2'),
            getValueByName('转子铁心', '静态相对偏心量'),
            getValueByName('转子铁心', '动态相对偏心量'),
            getValueByName('转子鼠笼', '转子导条总长'),
            getValueByName('转子鼠笼', '转子端环平均直径'),
            getValueByName('转子鼠笼', '转子端环宽度'),
            getValueByName('转子鼠笼', '转子端环高度'),
            getValueByName('转子鼠笼', '转子导条电阻率'),
            getValueByName('电磁分析-暂态（解析法）', '转子转动惯量'),
            getValueByName('电磁分析-暂态（解析法）', '转子机械损耗'),
            getValueByName('电磁分析-暂态（解析法）', '旋转通风损耗'),
            getValueByName('电磁分析-暂态（解析法）', '损耗参考转速'),
            getValueByName('电磁分析-暂态（解析法）', '转子旋转类型'),
            getValueByName('电磁分析-暂态（解析法）', '转子负载变量'),
            getValueByName('电磁分析-暂态（解析法）', '转子负载类型'),
            '转子负载数量参数',
            '转子负载自变量数组',
            '转子负载应变量数组',
            getValueByName('电磁分析-暂态（解析法）', '仿真时间长度'),
            getValueByName('电磁分析-暂态（解析法）', '仿真步长'),
            getValueByName('电磁分析-暂态（解析法）', '仿真精度'),
            getValueByName('电磁分析-暂态（解析法）', '转子起始角度'),
            getValueByName('电磁分析-暂态（解析法）', '转子起始转速'),
            getValueByName('电磁分析-暂态（解析法）', '定子机端电压类型'),
            getValueByName('电磁分析-暂态（解析法）', '定子线电压有效值'),
            getValueByName('电磁分析-暂态（解析法）', '定子电压基波频率'),
            getValueByName('电磁分析-暂态（解析法）', '定子线电压采样点数'),
            '线电压波形数据的时间数组',
            '线电压波形数据',
            getValueByName('电磁分析-暂态（解析法）', '自动稳态判断'),
            getValueByName('电磁分析-暂态（解析法）', '稳态判断精度'),
        ]
        console.log(param.join(','))
        Session.set('appPrint', 'send:' + param.join(','))
        ws.send(param.join(','))
    },
    'click #IMEmSzTransCalMain': function () {
        //电磁分析-暂态（数值法）
        var project = Session.get('project');
        if (!project) return;
        var projectType = project.projectType;
        var param = ['IMEmSzTransCalMain',
            (function (projectType) {
                if (projectType == 'raoxian') return 2;
                else if (projectType == 'shulong') return 1;
            })(projectType),
            getValueByName('基本参数', '相数'),
            getValueByName('基本参数', '极数'),
            getValueByName('电磁分析-暂态（数值法）', '定子线电压有效值'),
            getValueByName('电磁分析-暂态（数值法）', '定子线电压有效值'),
            getValueByName('定子铁心', '定子铁心外径'),
            getValueByName('定子铁心', '定子铁心内径'),
            getValueByName('定子铁心', '定子铁心长度'),
            getValueByName('定子铁心', '定子槽数'),
            getValueByName('定子铁心', '定子径向通风道数量'),
            getValueByName('定子铁心', '定子径向通风道宽度'),
            getValueByName('定子铁心', '定子铁心叠压系数'),
            getValueByName('定子铁心', '定子铁心牌号'),
            getValueByName('定子铁心', '定子铁心电导率'),
            getValueByName('定子铁心', '定子槽型'),
            getValueByName('定子铁心', '定子槽尺寸Bs0'),
            getValueByName('定子铁心', '定子槽尺寸Bs1'),
            getValueByName('定子铁心', '定子槽尺寸Bs2'),
            getValueByName('定子铁心', '定子槽尺寸Hs0'),
            getValueByName('定子铁心', '定子槽尺寸Hs1'),
            getValueByName('定子铁心', '定子槽尺寸Hs2'),
            getValueByName('定子铁心', '定子铁心电导率'),
            getValueByName('定子绕组', '定子绕组接法'),
            getValueByName('定子绕组', '定子绕组层数'),
            getValueByName('定子绕组', '定子并联支路数'),
            getValueByName('定子绕组', '定子线圈截距'),
            getValueByName('定子绕组', '定子每槽导体数'),
            getValueByName('定子绕组', '定子线圈平均半匝长'),
            getValueByName('定子绕组', '定子线圈电阻率'),
            getValueByName('定子绕组', '定子槽楔厚度'),
            getValueByName('定子绕组', '定子槽楔比磁导'),
            getValueByName('定子绕组', '定子导线类型'),
            getValueByName('定子绕组', '定子线规并绕根数'),
            getValueByName('定子绕组', '定子线规裸线直径'),
            getValueByName('定子绕组', '定子线规裸线窄边尺寸'),
            getValueByName('定子绕组', '定子线规裸线宽边尺寸'),
            getValueByName('定子绕组', '定子端部伸出单边直径长'),
            getValueByName('定子绕组', '定子端部斜边轴向投影长'),
            getValueByName('定子绕组', '定子绕组相序'),
            getValueByName('定子绕组', '定子槽号排序'),
            getValueByName('定子绕组', '定子线圈形状'),
            getValueByName('定子绕组', '定子绕组连接类型'),
            '定子线圈输入框存储矩阵',
            getValueByName('转子铁心', '转子铁心外径'),
            getValueByName('转子铁心', '转子铁心内径'),
            getValueByName('转子铁心', '转子铁心长度'),
            getValueByName('转子铁心', '转子槽数'),
            getValueByName('转子铁心', '转子径向通风道数量'),
            getValueByName('转子铁心', '转子径向通风道宽度'),
            getValueByName('转子铁心', '转子斜槽圆周长度'),
            getValueByName('转子铁心', '转子铁心叠压系数'),
            getValueByName('转子铁心', '转子铁心牌号'),
            getValueByName('转子铁心', '转子槽型'),
            getValueByName('转子铁心', '转子槽尺寸Br0'),
            getValueByName('转子铁心', '转子槽尺寸Br1'),
            getValueByName('转子铁心', '转子槽尺寸Br2'),
            getValueByName('转子铁心', '转子槽尺寸Br3'),
            getValueByName('转子铁心', '转子槽尺寸Br4'),
            getValueByName('转子铁心', '转子槽尺寸Hr0'),
            getValueByName('转子铁心', '转子槽尺寸Hr1'),
            getValueByName('转子铁心', '转子槽尺寸Hr2'),
            getValueByName('转子铁心', '转子铁心电导率'),
            getValueByName('转子绕组', '转子绕组接法'),
            getValueByName('转子绕组', '转子并联支路数'),
            getValueByName('转子绕组', '转子绕组层数'),
            getValueByName('转子绕组', '转子每槽导体数'),
            getValueByName('转子绕组', '转子线圈截距'),
            getValueByName('转子绕组', '转子线圈平均半匝长'),
            getValueByName('转子绕组', '转子线圈电阻率'),
            getValueByName('转子绕组', '转子槽楔厚度'),
            getValueByName('转子绕组', '转子槽楔比磁导'),
            getValueByName('转子绕组', '转子导线类型'),
            getValueByName('转子绕组', '转子线归并绕根数'),
            getValueByName('转子绕组', '转子线归裸线直径'),
            getValueByName('转子绕组', '转子线归裸线宽边尺寸'),
            getValueByName('转子绕组', '转子线归裸线窄边尺寸'),
            getValueByName('转子绕组', '转子绕组相序'),
            '转子绕组相序方向标志数(*****非读取参数*****)',
            getValueByName('转子绕组', '转子槽号排序'),
            getValueByName('转子绕组', '转子线圈形状'),
            getValueByName('转子绕组', '转子绕组连接类型'),
            '转子线圈输入框存储矩阵',
            getValueByName('转子鼠笼', '转子导条总长'),
            getValueByName('转子鼠笼', '转子端环平均直径'),
            getValueByName('转子鼠笼', '转子端环宽度'),
            getValueByName('转子鼠笼', '转子端环高度'),
            getValueByName('转子鼠笼', '转子导条电阻率'),
            getValueByName('转子鼠笼', '转子端环电阻率'),
            getValueByName('电磁分析-暂态（数值法）', '转子转动惯量'),
            getValueByName('电磁分析-暂态（数值法）', '转子机械损耗'),
            getValueByName('电磁分析-暂态（数值法）', '旋转通风损耗'),
            getValueByName('电磁分析-暂态（数值法）', '损耗参考转速'),
            getValueByName('电磁分析-暂态（数值法）', '转子旋转类型'),
            getValueByName('电磁分析-暂态（数值法）', '转子负载变量'),
            getValueByName('电磁分析-暂态（数值法）', '转子负载类型'),
            '转子负载数量参数',
            '转子负载自变量数组',
            '转子负载应变量数组',
            getValueByName('电磁分析-暂态（数值法）', '仿真时间长度'),
            getValueByName('电磁分析-暂态（数值法）', '仿真步长'),
            getValueByName('电磁分析-暂态（数值法）', '仿真精度'),
            getValueByName('电磁分析-暂态（数值法）', '转子起始角度'),
            getValueByName('电磁分析-暂态（数值法）', '转子起始转速'),
            getValueByName('电磁分析-暂态（数值法）', '定子机端电压类型'),
            getValueByName('电磁分析-暂态（数值法）', '定子线电压有效值'),
            getValueByName('电磁分析-暂态（数值法）', '定子电压基波频率'),
            getValueByName('电磁分析-暂态（数值法）', '定子线电压采样点数'),
            '线电压波形数据的时间数组',
            '线电压波形数据',
            '轴向分段数量',
            getValueByName('电磁分析-暂态（数值法）', '轴向分段数量'),
            getValueByName('电磁分析-暂态（数值法）', '自动稳态判断'),
            getValueByName('电磁分析-暂态（数值法）', '稳态判断精度'),
            '计算Fourier级数的系数标志数',
            '计算Fourier级数的方法',
            '计算Fourier级数的起始时间(s)',
            '计算Fourier级数的最高频率(Hz)',
            '计算Fourier级数的分辨频率(Hz)',
            getValueByName('电磁分析-暂态（数值法）', '分析气隙磁密谐波'),
            getValueByName('电磁分析-暂态（数值法）', '气隙磁密最高阶次'),
            getValueByName('电磁分析-暂态（数值法）', '气隙磁密最小幅值'),
            getValueByName('电磁分析-暂态（数值法）', '分析步长自动确定'),
            getValueByName('电磁分析-暂态（数值法）', '分析步数为2的幂次'),
            //	double	drmax_rotatedNode_;				//气隙隔离带内圆的直径(mm)
            //	double	d_GapOuter_							  ;	//气隙隔离带的外圆直径(mm)
            //	int	number_of_rotating_node_in_GapSeparateBar_;	//气隙隔离带内圆上的一圈旋转的实节点总数
            //	int	total_of_NODE_in_Rotor_all_     		  ;	//转子上节点总数
            //	int	total_of_fixedELEMENT_in_Rotor_ 		  ;	//转子上固定单元总数
            //	int	total_of_NODE_in_Stator_all_    		  ;	//定子上节点总数
            //	int	total_of_fixedELEMENT_in_Stator_		  ;	//定子上固定单元总数
            //	int	total_of_NODE_all_		 ;					//节点总数
            //	int	total_of_fixedELEMENT_	 ;					//固定单元总数
            //	int	total_of_variableELEMENT_;					//可变单元总数
            //	int	total_of_ELEMENT_        ;					//单元总数
            //	double	*x_pos_ ;								//节点的X坐标值（单位：mm）
            //	double	*y_pos_ ;								//节点的Y坐标值（单位：mm）
            //	int		total_of_rotatedNODEs_	;				//旋转节点总数
            //	int		*num_of_rotatedNODE_	;				//存贮旋转节点的数组
            //	int		*total_of_NODEs_on_firstBoundaryLine_;	//第一类边界条件各段线上的节点总数
            //	int		*num_of_firstNODE_					 ;	//第一类边界条件线上的节点编号
            //	int		total_of_NODES_on_Border_Rotor_ ;		//转子上的周期性边界的节点总数(单边)
            //	int		total_of_NODES_on_Border_Stator_;		//定子上的周期性边界的节点总数(单边)
            //	int		*num_of_NODES_on_Border_Real_   ;		//存贮周期性边界实节点的数组
            //	int		*num_of_NODES_on_Border_Virtual_;		//存贮周期性边界虚节点的数组
            //	double drmax_rotatedNode__;						//气隙隔离带内圆的直径(mm)
            //	double d_GapOuter__ 	  ;						//气隙隔离带的外圆直径(mm)
            //	int	number_of_rotating_node_in_GapSeparateBar__;//气隙隔离带内圆上一圈旋转的节点总数
            //	int	total_of_NODE_in_Rotor__				   ;//转子上节点总数
            //	int	total_of_fixedELEMENT_in_Rotor__		   ;//转子上固定单元总数
            //	int	total_of_NODE_in_Stator__				   ;//定子上节点总数
            //	int	total_of_fixedELEMENT_in_Stator__		   ;//定子上固定单元总数
            //	int		*NodeNum_of_GapInner__  ;				//存放气隙隔离带内圆上的节点编号
            //	int		*NodeNum_of_GapOuter__  ;				//存放气隙隔离带外圆上的节点编号
            //	int		*ipoint__         		;				//单元的第i号节点的编号
            //	int		*jpoint__        		;				//单元的第j号节点的编号
            //	int		*kpoint__         		;				//单元的第k号节点的编号
            //	double	*area_of_ELEMENT__		;				//单元的面积(平方毫米) 
            //	int		*MatNumber__     		;				//单元的材料号
            //	int		*ElemTypeNumber__ 		;				//单元的类型号
            //	double	*x_pos__ ;								//节点的X坐标值//单位：mm
            //	double	*y_pos__ ;								//节点的Y坐标值//单位：mm
            //	int		total_of_rotatedNODEs__ ;				//旋转节点总数
            //	int		*num_of_rotatedNODE__   ;				//存贮旋转节点的数组
            //	int		*total_of_NODEs_on_firstBoundaryLine__; //第一类边界条件各段线上的节点总数
            //	int		*num_of_firstNODE__		;				//第一类边界条件线上的节点编号
        ]
        console.log(param.join(','))
        Session.set('appPrint', 'send:' + param.join(','))
        ws.send(param.join(','))
    },
    'click #IMEmSzTransMeshMain': function () {
        //电磁分析-暂态（数值法）--网格生成
        var project = Session.get('project');
        if (!project) return;
        var projectType = project.projectType;
        var param = null;
        if (!getValueByName('网格生成', '以下参考本体结构'))
            param = ['IMEmSzTransMeshMain',
                getValueByName('网格生成', '定子铁心外径'),
                getValueByName('网格生成', '定子铁心内径'),
                getValueByName('网格生成', '定子槽数'),
                getValueByName('网格生成', '定子槽型'),
                getValueByName('网格生成', '定子槽尺寸Bs0'),
                getValueByName('网格生成', '定子槽尺寸Bs1'),
                getValueByName('网格生成', '定子槽尺寸Bs2'),
                getValueByName('网格生成', '定子槽尺寸Hs0'),
                getValueByName('网格生成', '定子槽尺寸Hs1'),
                getValueByName('网格生成', '定子槽尺寸Hs2'),
                getValueByName('网格生成', '定子绕组层数'),
                getValueByName('网格生成', '定子槽楔比磁导'),
                getValueByName('网格生成', '定子槽楔厚度'),
                getValueByName('网格生成', '转子铁心外径'),
                getValueByName('网格生成', '整圆为解域的倍数'),
                getValueByName('网格生成', '定子线圈对地绝缘双边厚度'),
                getValueByName('网格生成', '定子槽楔下垫条厚度'),
                getValueByName('网格生成', '定子槽底垫条厚度'),
                '定子齿内半径的标志数',
                '定子齿内半径数组元素数量',
                '定子齿内半径数组 (mm)',
                getValueByName('网格生成', '定子单个齿距单元边数'),
                getValueByName('网格生成', '定子剖分等级'),
                getValueByName('网格生成', '定子齿中添加辅助槽'),
                getValueByName('网格生成', '定子齿中辅助槽口宽度'),
                getValueByName('网格生成', '定子齿中辅助槽口高度'),
                (function (projectType) {
                    if (projectType == 'raoxian') return 2;
                    else if (projectType == 'shulong') return 1;
                })(projectType),
                getValueByName('网格生成', '转子铁心内径'),
                getValueByName('网格生成', '转子槽数'),
                getValueByName('网格生成', '转子槽型'),
                getValueByName('网格生成', '转子槽尺寸Br0'),
                getValueByName('网格生成', '转子槽尺寸Br1'),
                getValueByName('网格生成', '转子槽尺寸Br2'),
                getValueByName('网格生成', '转子槽尺寸Br3'),
                getValueByName('网格生成', '转子槽尺寸Br4'),
                getValueByName('网格生成', '转子槽尺寸Hr0'),
                getValueByName('网格生成', '转子槽尺寸Hr1'),
                getValueByName('网格生成', '转子槽尺寸Hr2'),
                getValueByName('网格生成', '转子绕组层数'),
                getValueByName('网格生成', '转子槽楔厚度'),
                getValueByName('网格生成', '转子槽楔比磁导'),
                '转子槽口沿圆周分布的标志数',
                '转子槽口中心线机械角度数组元素数量',
                '转子槽口中心线机械角度数组 (度)',
                getValueByName('网格生成', '转子剖分等级'),
            ]
        else
            param = ['IMEmSzTransMeshMain',
                getValueByName('定子铁心', '定子铁心外径'),
                getValueByName('定子铁心', '定子铁心内径'),
                getValueByName('定子铁心', '定子槽数'),
                getValueByName('定子铁心', '定子槽型'),
                getValueByName('定子铁心', '定子槽尺寸Bs0'),
                getValueByName('定子铁心', '定子槽尺寸Bs1'),
                getValueByName('定子铁心', '定子槽尺寸Bs2'),
                getValueByName('定子铁心', '定子槽尺寸Hs0'),
                getValueByName('定子铁心', '定子槽尺寸Hs1'),
                getValueByName('定子铁心', '定子槽尺寸Hs2'),
                getValueByName('定子绕组', '定子绕组层数'),
                getValueByName('定子绕组', '定子槽楔比磁导'),
                getValueByName('定子绕组', '定子槽楔厚度'),
                getValueByName('转子铁心', '转子铁心外径'),
                getValueByName('网格生成', '整圆为解域的倍数'),
                getValueByName('网格生成', '定子线圈对地绝缘双边厚度'),
                getValueByName('网格生成', '定子槽楔下垫条厚度'),
                getValueByName('网格生成', '定子槽底垫条厚度'),
                '定子齿内半径的标志数',
                '定子齿内半径数组元素数量',
                '定子齿内半径数组 (mm)',
                getValueByName('网格生成', '定子单个齿距单元边数'),
                getValueByName('网格生成', '定子剖分等级'),
                getValueByName('网格生成', '定子齿中添加辅助槽'),
                getValueByName('网格生成', '定子齿中辅助槽口宽度'),
                getValueByName('网格生成', '定子齿中辅助槽口高度'),
                (function (projectType) {
                    if (projectType == 'raoxian') return 2;
                    else if (projectType == 'shulong') return 1;
                })(projectType),
                getValueByName('转子铁心', '转子铁心内径'),
                getValueByName('转子铁心', '转子槽数'),
                getValueByName('转子铁心', '转子槽型'),
                getValueByName('转子铁心', '转子槽尺寸Br0'),
                getValueByName('转子铁心', '转子槽尺寸Br1'),
                getValueByName('转子铁心', '转子槽尺寸Br2'),
                getValueByName('转子铁心', '转子槽尺寸Br3'),
                getValueByName('转子铁心', '转子槽尺寸Br4'),
                getValueByName('转子铁心', '转子槽尺寸Hr0'),
                getValueByName('转子铁心', '转子槽尺寸Hr1'),
                getValueByName('转子铁心', '转子槽尺寸Hr2'),
                getValueByName('转子绕组', '转子绕组层数'),
                getValueByName('转子绕组', '转子槽楔厚度'),
                getValueByName('转子绕组', '转子槽楔比磁导'),
                '转子槽口沿圆周分布的标志数',
                '转子槽口中心线机械角度数组元素数量',
                '转子槽口中心线机械角度数组 (度)',
                getValueByName('网格生成', '转子剖分等级'),
            ]
        console.log(param.join(','))
        Session.set('appPrint', 'send:' + param.join(','))
        ws.send(param.join(','))
    },
    'click #IMMeEcStatorCalMain': function () {
        //机械分析-定子（解析法）
        var param = null;
        if (!getValueByName('机械分析-定子（解析法）', '以下参考本体结构'))
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
    'click #IMMeSzStatorCalMain': function () {
        //机械分析-定子（数值法）
        var param = null;
        if (!getValueByName('机械分析-定子（数值法）', '以下参考本体结构'))
            param = ['IMMeSzStatorCalMain',
                getValueByName('机械分析-定子（数值法）', '定子铁心外径'),
                getValueByName('机械分析-定子（数值法）', '定子铁心内径'),
                getValueByName('机械分析-定子（数值法）', '定子铁心长度'),
                getValueByName('机械分析-定子（数值法）', '定子槽数'),
                getValueByName('机械分析-定子（数值法）', '定子径向通风道数量'),
                getValueByName('机械分析-定子（数值法）', '定子径向通风道宽度'),
                getValueByName('机械分析-定子（数值法）', '定子铁心叠压系数'),
                getValueByName('机械分析-定子（数值法）', '定子槽型'),
                getValueByName('机械分析-定子（数值法）', '定子槽尺寸Bs0'),
                getValueByName('机械分析-定子（数值法）', '定子槽尺寸Bs1'),
                getValueByName('机械分析-定子（数值法）', '定子槽尺寸Bs2'),
                getValueByName('机械分析-定子（数值法）', '定子槽尺寸Hs0'),
                getValueByName('机械分析-定子（数值法）', '定子槽尺寸Hs1'),
                getValueByName('机械分析-定子（数值法）', '定子槽尺寸Hs2'),
                getValueByName('机械分析-定子（数值法）', '定子绕组层数'),
                getValueByName('机械分析-定子（数值法）', '定子每槽导体数'),
                getValueByName('机械分析-定子（数值法）', '定子导线类型'),
                getValueByName('机械分析-定子（数值法）', '定子线规并绕根数'),
                getValueByName('机械分析-定子（数值法）', '定子线规裸线直径'),
                getValueByName('机械分析-定子（数值法）', '定子线规裸线窄边尺寸'),
                getValueByName('机械分析-定子（数值法）', '定子线规裸线宽边尺寸'),
                getValueByName('机械分析-定子（数值法）', '定子裸扁导线排列排数'),
                getValueByName('机械分析-定子（数值法）', '定子槽楔厚度'),
                getValueByName('机械分析-定子（数值法）', '定子导线绝缘双边厚度'),
                getValueByName('机械分析-定子（数值法）', '定子线圈匝间绝缘双边厚度'),
                getValueByName('机械分析-定子（数值法）', '定子线圈对地绝缘双边厚度'),
                getValueByName('机械分析-定子（数值法）', '定子线圈排间绝缘双边厚度'),
                getValueByName('机械分析-定子（数值法）', '定子槽垫下垫条厚度'),
                getValueByName('机械分析-定子（数值法）', '定子槽底垫条厚度'),
                getValueByName('机械分析-定子（数值法）', '分析计算类型'),
                (function () {
                    var res = getValueByName('机械分析-定子（数值法）', '分析结构类型');
                    if (res == '定子铁心' || res == '定子铁心绕组' || res == '定子整机') return 1;
                    else return 0;
                })(),
                (function () {
                    var res = getValueByName('机械分析-定子（数值法）', '分析结构类型');
                    if (res == '定子绕组' || res == '定子铁心绕组' || res == '定子整机') return 1;
                    else return 0;
                })(),
                (function () {
                    var res = getValueByName('机械分析-定子（数值法）', '分析结构类型');
                    if (res == '定子基座' || res == '定子整机') return 1;
                    else return 0;
                })(),
                '定子铁芯段数',
                '铁心每段的长度数组 mm',
                getValueByName('机械分析-定子（数值法）', '定子单个绕组质量'),
                getValueByName('机械分析-定子（数值法）', '模态提取最大数量'),
                getValueByName('机械分析-定子（数值法）', '模态分析最小频率'),
                getValueByName('机械分析-定子（数值法）', '模态分析最大频率'),
                getValueByName('机械分析-定子（数值法）', '磁力采样起始机械角度'),
                getValueByName('机械分析-定子（数值法）', '基座弹簧模量'),
                getValueByName('机械分析-定子（数值法）', '基座泊松比'),
                getValueByName('机械分析-定子（数值法）', '基座材料密度'),
                '智能网格划分时的等级',
                '固定单元边长时的单元边长的长度（mm）',
                getValueByName('机械分析-定子（数值法）', '定子铁心与基座连接方式'),
                getValueByName('机械分析-定子（数值法）', '装配过盈量'),
                getValueByName('机械分析-定子（数值法）', '槽钢轴向长度'),
                getValueByName('机械分析-定子（数值法）', '固定约束点的数量'),
                '固定约束点的坐标数组 mm'
            ]
        else
            param = ['IMMeSzStatorCalMain',
                getValueByName('定子铁心', '定子铁心外径'),
                getValueByName('定子铁心', '定子铁心内径'),
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
                getValueByName('机械分析-定子（数值法）', '定子裸扁导线排列排数'),
                getValueByName('机械分析-定子（数值法）', '定子槽楔厚度'),
                getValueByName('机械分析-定子（数值法）', '定子导线绝缘双边厚度'),
                getValueByName('机械分析-定子（数值法）', '定子线圈匝间绝缘双边厚度'),
                getValueByName('机械分析-定子（数值法）', '定子线圈对地绝缘双边厚度'),
                getValueByName('机械分析-定子（数值法）', '定子线圈排间绝缘双边厚度'),
                getValueByName('机械分析-定子（数值法）', '定子槽垫下垫条厚度'),
                getValueByName('机械分析-定子（数值法）', '定子槽底垫条厚度'),
                getValueByName('机械分析-定子（数值法）', '分析计算类型'),
                (function () {
                    var res = getValueByName('机械分析-定子（数值法）', '分析结构类型');
                    if (res == '定子铁心' || res == '定子铁心绕组' || res == '定子整机') return 1;
                    else return 0;
                })(),
                (function () {
                    var res = getValueByName('机械分析-定子（数值法）', '分析结构类型');
                    if (res == '定子绕组' || res == '定子铁心绕组' || res == '定子整机') return 1;
                    else return 0;
                })(),
                (function () {
                    var res = getValueByName('机械分析-定子（数值法）', '分析结构类型');
                    if (res == '定子基座' || res == '定子整机') return 1;
                    else return 0;
                })(),
                '定子铁芯段数',
                '铁心每段的长度数组 mm',
                getValueByName('机械分析-定子（数值法）', '定子单个绕组质量'),
                getValueByName('机械分析-定子（数值法）', '模态提取最大数量'),
                getValueByName('机械分析-定子（数值法）', '模态分析最小频率'),
                getValueByName('机械分析-定子（数值法）', '模态分析最大频率'),
                getValueByName('机械分析-定子（数值法）', '磁力采样起始机械角度'),
                getValueByName('机械分析-定子（数值法）', '基座弹簧模量'),
                getValueByName('机械分析-定子（数值法）', '基座泊松比'),
                getValueByName('机械分析-定子（数值法）', '基座材料密度'),
                '智能网格划分时的等级',
                '固定单元边长时的单元边长的长度（mm）',
                getValueByName('机械分析-定子（数值法）', '定子铁心与基座连接方式'),
                getValueByName('机械分析-定子（数值法）', '装配过盈量'),
                getValueByName('机械分析-定子（数值法）', '槽钢轴向长度'),
                getValueByName('机械分析-定子（数值法）', '固定约束点的数量'),
                '固定约束点的坐标数组 mm'
            ]
        console.log(param.join(','))
        Session.set('appPrint', 'send:' + param.join(','))
        ws.send(param.join(','))
    },
    'click #IMDbEcStatorCalMain': function () {
        //端部分析-定子（解析法）
        var param = null;
        if (!getValueByName('端部分析-定子（解析法）', '以下参考本体结构'))
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


        function update(name, value, unit) {
            Meteor.call('updateProperty', projectID, name, value, unit, function (err, res) {
                // if (err || res == 0)
                console.log(err, res)
            })
        }

        reader.onload = function (e) {
            var target = Session.get('fileUpload');
            console.log('target', target)
            var file = e.target.result;
            console.log(file)
            var lines = file.split('\n')
            console.log(lines)
            //成形的第一部分 和散嵌的所有
            //第一类：基本数据 (01～22)
            var line_1 = lines[2].split(' ')
            console.log(line_1)
            update('相数', line_1[4], null);
            update('极数', line_1[1], null);
            //第二类：定子铁心数据(23～33)
            var line_2 = lines[3].split(' ')
            console.log(line_2)
            update('定子铁心外径', line_2[0], '厘米')
            update('定子铁心内径', line_2[1], '厘米')
            //第三类：转子铁心数据	34～49 
            var line_3 = lines[4].split(' ')
            console.log(line_3)
            //第四类：笼形转子数据
            var line_4 = lines[5].split(' ')
            console.log(line_4)
            //第五类：定子绕组数据	56～60
            var line_5 = lines[6].split(' ')
            console.log(line_5)
            //第六类：转子绕组数据
            var line_6 = lines[7].split(' ')
            console.log(line_6)
            //第七类：其它数据
            var line_7 = lines[8].split(' ')
            console.log(line_7)
            //成形第二部分

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
    var properties = Property.find({ projectID: projectID }).fetch();
    var property = properties.find(function (e) {
        return e.propertyName == propertyName && e.name == name
    });
    if (property === undefined) {
        console.log('undefined', propertyName, name)
        return;
    }
    if (property.unit == '毫米') return property.value;
    if (property.unit == '厘米') return property.value * 10;
    if (property.unit == '分米') return property.value * 100;
    if (property.unit == '米') return property.value * 1000;
    if (property.unit == '英尺') return property.value * 308.4;
    if (property.unit == '英寸') return property.value * 25.4;
    if (property.unit == '千瓦') return property.value * 1000;

    if (property.value == '全开口矩形槽') return 1;
    if (property.value == '半开口矩形槽') return 2;
    if (property.value == '半开口圆底槽') return 3;
    if (property.value == 'A型槽') return 1;
    if (property.value == 'B型槽') return 2;
    if (property.value == 'C型槽') return 3;
    if (property.value == 'D型槽') return 4;
    if (property.value == 'E型槽') return 5;
    if (property.value == 'F型槽') return 6;
    if (property.value == 'G型槽') return 7;
    if (property.value == 'H型槽') return 8;
    if (property.value == '星型') return 0;
    if (property.value == '角型') return 1;
    if (property.value == '单层') return 1;
    if (property.value == '双层') return 2;
    if (property.value == '扁线') return 1;
    if (property.value == '圆线') return 2;
    if (property.value == '模态频率') return 0;
    if (property.value == '电磁振动') return 1;
    if (property.value == '电磁噪声') return 2;
    if (property.value == '50W470') return 1;
    if (property.value == '50W540') return 2;
    if (property.value == '顺时针') return 1;
    if (property.value == '逆时针') return -1;
    if (property.value == '左入槽') return 1;
    if (property.value == '右入槽') return -1;
    if (property.value == '显极') return 1;
    if (property.value == '庶极') return 2;
    if (property.value == '同侧') return 1;
    if (property.value == '异侧') return -1;
    if (property.value == '解法1') return 1;
    if (property.value == '解法2') return 2;
    if (property.value == '解法一') return 1;
    if (property.value == '解法二') return 2;
    if (property.value == '半隐式') return 1;
    if (property.value == '显式四阶') return 2;
    if (property.value == '转速恒定') return 0;
    if (property.value == '转速可变') return 1;
    if (property.value == '时间') return 0;
    if (property.value == '转速') return 1;
    if (property.value == '输出转矩') return 0;
    if (property.value == '输出功率') return 1;
    if (property.value == '正弦类型') return 0;
    if (property.value == '表格输入') return 1;
    if (property.value == '是') return 1;
    if (property.value == '否') return 0;
    if (property.value == '机械力学参数') return 1;
    if (property.value == '机械模态特性') return 2;
    if (property.value == '谐波响应振动') return 3;
    if (property.value == '瞬态响应振动') return 4;
    if (property.value == '谐波电噪指数') return 5;
    if (property.value == '瞬态电噪指数') return 6;
    if (property.value == '谐波电磁噪声') return 7;
    if (property.value == '瞬态电磁噪声') return 8;
    if (property.value == '过盈装配') return 0;
    if (property.value == '骨架链接') return 1;

    return property.value;
}