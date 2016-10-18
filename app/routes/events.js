/* jshint unused:false */

import App from '../app';
import Tools from '../utils/main';


export default Ember.Route.extend({
    offset: 0,
    limit: 25,
    interval: 30000,
    active: 1,

    queryParams: {
        page: {}
    },

    model: function(params, transition) {
        let self = this;

        self.set('offset', (params.page - 1) * 25);

        clearTimeout(this.get('timedReload'));
        this.set('timedReload', setTimeout(function() {
            Tools.Utils.logger('Will now reload events', 'appInfo');
            self.refresh();
        }, self.get('interval')));

        Tools.Utils.logger('will now load the event model', 'appInfo');
        return this.store.query('event', {offset: self.get('offset'), limit: self.get('limit')});
    },

    afterModel: function(model, transition) {
        model.total = App.Settings.events.total;
        model.pages = Math.ceil(model.total / this.get('limit'));
        model.active = this.get('active');
    },

    actions: {
        refresh: function() {
            Tools.Utils.logger('Will now reload events', 'appInfo');
            this.refresh();
        },

        changePage: function(type) {
            let self = this;
            let model = self.modelFor(this.routeName);
            let controller = self.controllerFor(this.routeName);

            switch (type) {
                case 'next':
                if (controller.get('page') === model.pages) {
                    Tools.Utils.logger('already on the last page', 'appInfo');
                    return false;
                }
                controller.incrementProperty('page');
                self.set('offset', self.get('offset') + self.get('limit'));
                break;

                case 'prev':
                if (controller.get('page') === 1) {
                    Tools.Utils.logger('already on the first page', 'appInfo');
                    return false;
                }
                controller.decrementProperty('page');
                self.set('offset', self.get('offset') -  self.get('limit'));
                break;

                default:
                controller.set('page', type);
                self.set('offset', (type - 1) * 25);

            }

            self.refresh();
        }
    }
});
