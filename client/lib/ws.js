/**
 * Created by bai on 2015/11/29.
 */
var wsImpl = window.WebSocket || window.MozWebSocket;
Meteor.call('config', function (err, res) {
    if (err)
        console.log(err)
    else {
        (function wsInit() {
            window.ws = new wsImpl(res.ws);
            ws.onmessage = function (e) {
                //console.log(e, e.data)
                Session.set('appPrint', 'receive:' + e.data)
            };
// when the connection is established, this method is called
            ws.onopen = function () {
                console.log('ws open.')
                Session.set('appPrint', 'ws open.')
            };
// when the connection is closed, this method is called
            ws.onclose = function () {
                console.log('ws close.')
                Session.set('appPrint', 'ws close.')
                //wsInit()
            };
            ws.onerror = function () {
                console.log('ws error.')
                Session.set('appPrint', 'ws error.')
            }
        })()
    }
})


