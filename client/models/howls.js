var Collection = require('ampersand-rest-collection');
var Howl = require('./howl');

module.exports = Collection.extend({
    model: Howl,
    url: 'http://wolves.technology/howls',
    comparator: function (model) {
        return -1 * model.createdAt.valueOf();
    }
});
