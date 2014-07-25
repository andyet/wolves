var View = require('ampersand-view');
var templates = require('../templates');

module.exports = View.extend({
    template: templates.includes.howl,
    bindings: {
        'model.content': {
            type: 'text',
            role: 'content'
        },
        'model.humanCreatedAt': '[role=createdAt]'
    }
});
