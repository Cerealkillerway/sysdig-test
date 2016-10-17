import DS from 'ember-data';
import App from "../app";


export default DS.RESTAdapter.extend({
    host: App.Configuration.API.baseUrl,
    headers: Ember.computed(function() {
        return  {
            'Authorization': App.Configuration.API.Authorization
        };
    })
});
