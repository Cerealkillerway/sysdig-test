import ENV from '../config/environment';


// general utility functions
let Utils = {
    logger: function(message, type) {
        var separator = '--------------------------\n';
        var types = {
            appInfo: 'background-color: #333; color: #eee;',
            adapterInfo: 'background-color: #4a148c; color: #eee;',

            appSuccess: 'background-color: #4caf50; color: #eee;',
            appError: 'background-color: #f00; color: #eee;',
            appLocalError: 'background-color: #ff9000; color: #eee;',
        };

        if (ENV.APP.DEBUG) {
            switch (typeof message) {
                case 'object':
                console.dir(message);
                break;

                default:
                message.toString().replace('<separator>', separator);
                type = types[type] || '';
                console.log("%c" + message, type);
            }
        }

        return false;
    },


    normalize: {
        normalizeEvent: function(event, type) {
            let result = {
                type: type.modelName,
                attributes: {}
            };

            if (event.id) {
                result.id = event.id;
                delete event.id;
            }

            if (event.tags) {
                let tags = [];

                _.each(event.tags, function(tagValue, tagName) {
                    tags.push(tagValue + ': ' + tagName);
                });
                event.tags = tags.join(', ');
            }

            result.attributes = event;

            return result;
        }
    }
};


export default Utils;
