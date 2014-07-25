var View = require('ampersand-view');
var templates = require('../templates');

module.exports = View.extend({
    template: templates.includes.newHowl,
    autoRender: true,

    events: {
        'submit [role=new-howl]': 'createNewHowl'
    },

    createNewHowl: function (event) {
        event.preventDefault();

        var self = this;

        var howl = app.howls.create({
            content: this.get('[name=content]').value,
            createdAt: new Date()
        }, {
            wait: true,
            success: function () {
                self.get('[name=content]').value = '';
            },
            error: function () {
                alert('Uh oh, something is wrong. Wolves?');
            }
        });

    }
});
