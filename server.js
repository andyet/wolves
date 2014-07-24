var hapi = require('hapi');
var moonboots = require('moonboots_hapi');
var server = hapi.createServer(8080, 'localhost');
var config = require('getconfig');
var templatizer = require('templatizer');


server.pack.register({
    plugin: moonboots,
    options: {
        appPath: '/{p*}',
        moonboots: {
            main: __dirname + '/client/app.js',
            developmentMode: config.isDev,
            stylesheets: [
                __dirname + '/public/css/bootstrap.css'
            ],
            beforeBuildJS: function () {
                templatizer(__dirname + '/templates', __dirname + '/client/templates.js');
            }
        }
    }
}, function () {
    server.start();
    console.log('wolves running at http://localhost:8080');
});


// getconfig, ampersand-view, ampersand-model, ampersand-router
