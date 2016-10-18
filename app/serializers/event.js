import DS from 'ember-data';
import Tools from "../utils/main";
import App from '../app';


export default DS.RESTSerializer.extend({
    normalizeQueryResponse: function(store, modelName, payload) {
        var res = {
            data: []
        };

        App.Settings.events.total = payload.total;
        payload.events.forEach(function(event) {
            let record = {
                id: event.id,
                type: modelName.modelName,
                attributes: {}
            };

            delete event.id;

            if (event.tags) {
                let tags = [];

                _.each(event.tags, function(tagValue, tagName) {
                    tags.push(tagName + ': ' + tagValue);
                });
                event.tags = tags.join(', ');
            }

            record.attributes = event;

            res.data.push(record);
        });

        Tools.Utils.logger('Serialized ' + modelName + ' record for findAll:', 'modelInfo');
        Tools.Utils.logger(res, 'modelInfo');
        Tools.Utils.logger('---------------------', 'modelInfo');
        return res;
    }
});
