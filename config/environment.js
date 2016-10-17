/* jshint node: true */

module.exports = function(environment) {
    var ENV = {
        modulePrefix: 'sysdig-test',
        environment: environment,
        rootURL: '/',
        locationType: 'auto',
        EmberENV: {
            FEATURES: {}
        },

        APP: {
            Configuration: {
                "version": "v0.0.0",
                "siteName": "Sysdig-test",
                "API": {
                    "Authorization": "Bearer 8aef9517-3070-4090-b55e-83296cee8cd1",
                    "baseUrl": "https://app-staging.sysdigcloud.com/api"
                }
            }
        }
    };


    if (environment === 'development') {
        ENV.APP.DEBUG = true;   // enable internal webapp logger
    }

    if (environment === 'test') {
        // Testem prefers this...
        ENV.locationType = 'none';

        // keep test console output quieter
        ENV.APP.LOG_ACTIVE_GENERATION = false;
        ENV.APP.LOG_VIEW_LOOKUPS = false;

        ENV.APP.rootElement = '#ember-testing';
        ENV.APP.DEBUG = true;   // enable internal webapp logger
    }

    if (environment === 'production') {}

    return ENV;
};
