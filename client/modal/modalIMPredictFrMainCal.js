/**
 * Created by bai on 2015/11/29.
 */
/**
 * Created by bai on 2015/11/29.
 */
/**
 * Created by bai on 2015/11/24.
 */
Template.modalIMPredictFrMainCal.helpers({
    err: function () {
        return Session.get('err')
    }
});

Template.modalIMPredictFrMainCal.events({
    'click .save': function (e, t) {
        var param = ['IMPredictFrMainCal',
            t.$('#p1').val(),
            t.$('#p2').val(),
            t.$('#p3').val(),
            t.$('#p4').val(),
            t.$('#p5').val(),
            t.$('#p6').val()]
        Session.set('err', null)
        param.forEach(function (p, i) {
            if (p == '')
                Session.set('err', '参数不能为空！')
            else if (Number(p) < 0)
                Session.set('err', '参数不能为负！')
            else if (i == 6 && Number(p) > 20)
                Session.set('err', '力波最高阶次(0-20)！')
        })
        if (!Session.get('err')) {
            $('#modalIMPredictFrMainCal').modal('hide');
            Session.set('appPrint', 'send:' + param.join(','))
            console.log(param.join(','))
            ws.send(param.join(','))
        }
        //if (isNaN(p1))
        //    Session.set('err', '')


    }
});

Template.modalIMPredictFrMainCal.onRendered(function () {
        Session.set('IMPredictFrMainCal', false);
        this.autorun(function () {
            if (Session.get('IMPredictFrMainCal')) {
                Session.set('err', null)
                $('#modalIMPredictFrMainCal').modal();
                Session.set('IMPredictFrMainCal', false);
            }
        })
    }
);

Template.modalIMPredictFrMainCal.onCreated(function () {

    }
);