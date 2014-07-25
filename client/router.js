var Router = require('ampersand-router');
var HomePage = require('./pages/home');
var HowlsPage = require('./pages/howls');
var querystring = require('querystring');


module.exports = Router.extend({
    routes: {
        '': 'home',
        'howls': 'howls',
        'auth/login': 'login',
        'auth/callback': 'authCallback'
    },

    login: function () {
        var redirect = window.location.origin + '/auth/callback';
        redirect = encodeURIComponent(redirect);
        window.location = 'http://wolves.technology/authorize?redirect_uri=' + redirect;
    },

    authCallback: function () {
        var hash = window.location.hash;
        var params = querystring.parse(hash.substr(1));
        //params = { access_token: 'asdfasdfasdfads' }
        app.me.accessToken = params.access_token;
        this.redirectTo('/howls');
    },

    home: function () {
        this.trigger('page', new HomePage());
    },

    howls: function () {
        this.trigger('page', new HowlsPage());
    }
});
