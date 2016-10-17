import ApplicationAdapter from './application';
import App from "../app";
import Tools from "../utils/main";


export default ApplicationAdapter.extend({
    buildURL: function(modelName, id, snapshot, type, query) {
        Tools.Utils.logger('EVENT adapter: returning normal endpoint', 'adapterInfo');
        return App.Configuration.API.baseUrl + '/events';
    }
});
