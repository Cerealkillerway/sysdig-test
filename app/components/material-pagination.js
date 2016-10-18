import Ember from "ember";
import Tools from "../utils/main";


export default Ember.Component.extend({
    pagesArray: Ember.computed('pages', 'active', function() {
        let array = Ember.A([]);
        let index = 0;

        while (index < this.get('pages')) {
            index++;

            if (index === this.get('active')) {
                array.pushObject('active');
            }
            else {
                array.pushObject('');
            }
        }

        return array;
    }),

    actions: {
        changePage: function(type) {
            if (type === 'next' || type === 'prev') {
                this.sendAction('changePage', type);
            }
            else {
                this.sendAction('changePage', type + 1);
            }
        }
    }
});
