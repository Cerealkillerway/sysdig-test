/* jshint unused:false */
/* global Ember, $ */

import Ember from 'ember';
import App from '../app';


export default Ember.Helper.helper(function(params, hash) {
    let data = params[0];

    return data + 1;
});
