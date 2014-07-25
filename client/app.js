var domready = require('domready');
var MainView = require('./views/main');
var Router = require('./router');
var Howls = require('./models/howls');
var Me = require('./models/me');

window.app = {
    init: function () {
        var self = this;

        this.me = new Me();
        this.me.fetch();

        this.howls = new Howls();
        this.howls.fetch();

        setInterval(function () {
           self.howls.fetch();
        }, 5000);

        this.router = new Router();

        domready(function () {
            self.view = new MainView({
                el: document.body
            });

            self.router.history.start({pushState: true});
        });
    }
};

window.app.init();
