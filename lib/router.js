/**
 * Created by bai on 2015/11/24.
 */

Router.configure({
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    waitOn: function () {
    }
});


Router.route('/', function () {
    this.render('app')
})

Router.route('/login')