/* jshint unused:false */

import App from '../app';
import Tools from '../utils/main';


export default Ember.Route.extend({
    model: function(params, transition) {
        Tools.Utils.logger('will now load the event model', 'appInfo');

        return this.store.findAll('event');
    },

    afterModel: function(model, transition) {
        
    },

    actions: {
        refresh: function() {
            Tools.Utils.logger('Will now reload events', 'appInfo');
            this.refresh();
        }
    }
});
