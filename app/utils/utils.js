import ENV from '../config/environment';


// general utility functions
let Utils = {
    logger: function(message, type) {
        var separator = '--------------------------\n';
        var types = {
            appInfo: 'background-color: #333; color: #eee;',
            adapterInfo: 'background-color: #4a148c; color: #eee;',
            appComponentInfo: 'background-color: #c6ff00; color: #222;',

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


    range: function(i) {
        return i ? Utils.range(i - 1).concat(i) : [];
    }
};


export default Utils;
