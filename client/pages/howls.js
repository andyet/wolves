var View = require('ampersand-view');
var templates = require('../templates');
var HowlView = require('../views/howl');
var NewHowlView = require('../views/new-howl');

module.exports = View.extend({
    template: templates.pages.howls,

    initialize: function () {
        this.collection = app.howls;
    },

    subviews: {
        newHowl: {
            constructor: NewHowlView,
            role: 'new-howl'
        }
    },

    render: function () {
        this.renderWithTemplate();

        this.renderCollection(this.collection, HowlView, this.getByRole('howls'));
    }
});
