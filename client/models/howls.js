var Collection = require('ampersand-rest-collection');
var Howl = require('./howl');

module.exports = Collection.extend({
    model: Howl,
    url: 'http://wolves.technology/howls',
    comparator: function (model) {
        return -1 * model.createdAt.valueOf();
    },

    fetchRealtime: function () {
        this.fetch();

        var self = this;
        var socket = new WebSocket('ws://wolves.technology');

        socket.onmessage = function (event) {
            var data = JSON.parse(event.data);

            if (data.channel === self.url && data.action === 'update') {
                console.log('Got a howl with id', data.id);
                self.fetchById(data.id);
            }
        };
    }
});
