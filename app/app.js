import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
import Tools from './utils/main';
import ENV from './config/environment';


let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
    modulePrefix: config.modulePrefix,
    podModulePrefix: config.podModulePrefix,
    Resolver
});

App.Settings = {
    events: {
        total: 0
    }
};

Ember.Application.initializer({
    name: 'confLoader',

    initialize: function(application) {
        // load main configuration
        App.Configuration = ENV.APP.Configuration;
        Tools.Utils.logger('APP READY --> ENVIRONMENT: ' + ENV.environment, 'appSuccess');
        Tools.Utils.logger('GLOBAL CONFIGURATION LOADED', 'appSuccess');
        Tools.Utils.logger(App.Configuration);
        Tools.Utils.logger('---------------------------', 'appSuccess');
    }
});

loadInitializers(App, config.modulePrefix);

export default App;
