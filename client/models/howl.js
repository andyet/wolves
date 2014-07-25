var Model = require('ampersand-model');
var moment = require('moment');

module.exports = Model.extend({
    ajaxConfig: function () {
        return {
            headers: {
                'Auth-Token': app.me.accessToken
            }
        };
    },

    props: {
        id: 'string',
        content: 'string',
        createdAt: 'date',
        firstName: 'string',
        lastName: 'string'
    },

    derived: {
        humanCreatedAt: {
            deps: ['createdAt'],
            fn: function () {
                return moment(this.createdAt).fromNow();
            }
        }
    }
});
