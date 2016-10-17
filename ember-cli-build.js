/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
  });

  app.import(app.bowerDirectory + '/Materialize/dist/fonts/roboto/Roboto-Thin.woff2', { destDir: 'font/roboto' });
  app.import(app.bowerDirectory + '/Materialize/dist/fonts/roboto/Roboto-Thin.woff', { destDir: 'font/roboto' });
  app.import(app.bowerDirectory + '/Materialize/dist/fonts/roboto/Roboto-Thin.ttf', { destDir: 'font/roboto' });

  app.import(app.bowerDirectory + '/Materialize/dist/fonts/roboto/Roboto-Light.woff2', { destDir: 'font/roboto' });
  app.import(app.bowerDirectory + '/Materialize/dist/fonts/roboto/Roboto-Light.woff', { destDir: 'font/roboto' });
  app.import(app.bowerDirectory + '/Materialize/dist/fonts/roboto/Roboto-Light.ttf', { destDir: 'font/roboto' });

  app.import(app.bowerDirectory + '/Materialize/dist/fonts/roboto/Roboto-Regular.woff2', { destDir: 'font/roboto' });
  app.import(app.bowerDirectory + '/Materialize/dist/fonts/roboto/Roboto-Regular.woff', { destDir: 'font/roboto' });
  app.import(app.bowerDirectory + '/Materialize/dist/fonts/roboto/Roboto-Regular.ttf', { destDir: 'font/roboto' });

  app.import(app.bowerDirectory + '/Materialize/dist/fonts/roboto/Roboto-Medium.woff2', { destDir: 'font/roboto' });
  app.import(app.bowerDirectory + '/Materialize/dist/fonts/roboto/Roboto-Medium.woff', { destDir: 'font/roboto' });
  app.import(app.bowerDirectory + '/Materialize/dist/fonts/roboto/Roboto-Medium.ttf', { destDir: 'font/roboto' });

  app.import(app.bowerDirectory + '/Materialize/dist/fonts/roboto/Roboto-Bold.woff2', { destDir: 'font/roboto' });
  app.import(app.bowerDirectory + '/Materialize/dist/fonts/roboto/Roboto-Bold.woff', { destDir: 'font/roboto' });
  app.import(app.bowerDirectory + '/Materialize/dist/fonts/roboto/Roboto-Bold.ttf', { destDir: 'font/roboto' });

  /*app.import(app.bowerDirectory + '/material-design-icons/iconfont/MaterialIcons-Regular.eot', { destDir: 'font/material-design-icons' });
  app.import(app.bowerDirectory + '/material-design-icons/iconfont/MaterialIcons-Regular.ttf', { destDir: 'font/material-design-icons' });
  app.import(app.bowerDirectory + '/material-design-icons/iconfont/MaterialIcons-Regular.svg', { destDir: 'font/material-design-icons' });
  app.import(app.bowerDirectory + '/material-design-icons/iconfont/MaterialIcons-Regular.woff', { destDir: 'font/material-design-icons' });
  app.import(app.bowerDirectory + '/material-design-icons/iconfont/MaterialIcons-Regular.woff2', { destDir: 'font/material-design-icons' });*/

  app.import(app.bowerDirectory + '/Materialize/dist/js/materialize.js');
  app.import(app.bowerDirectory + '/underscore/underscore.js');


  return app.toTree();
};
