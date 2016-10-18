import Ember from "ember";
import Tools from "../utils/main";


export default Ember.Component.extend({
    didInsertElement: function () {
        let self = this;

        self.$('.tooltipped').tooltip({
            delay: 20
        });
    },

    willDestroyElement: function() {
        let self = this;

        self.$('.tooltipped').tooltip('remove');
    }
});
