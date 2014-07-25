var View = require('ampersand-view');
var templates = require('../templates');
var HowlView = require('../views/howl');

module.exports = View.extend({
    template: templates.pages.howls,
    initialize: function () {
        this.collection = app.howls;
    },
    render: function () {
        this.renderWithTemplate();

        this.renderCollection(this.collection, HowlView, this.getByRole('howls'));
    }
});
