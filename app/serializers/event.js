import DS from 'ember-data';
import Tools from "../utils/main";


export default DS.RESTSerializer.extend({
    normalizeFindAllResponse: function(store, modelName, payload) {
        var response = {
            data: []
        };

        payload.events.forEach(function(event) {
            response.data.push(Tools.Utils.normalize.normalizeEvent(event, modelName));
        });

        Tools.Utils.logger('Serialized ' + modelName + ' record for findAll:', 'modelInfo');
        Tools.Utils.logger(response, 'modelInfo');
        Tools.Utils.logger('---------------------', 'modelInfo');
        return response;
    }
});
