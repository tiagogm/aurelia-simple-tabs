'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _simpleTabs = require('./simple-tabs');

Object.keys(_simpleTabs).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _simpleTabs[key];
    }
  });
});
exports.configure = configure;

var _aureliaPal = require('aurelia-pal');

function configure(config) {
  config.globalResources([_aureliaPal.PLATFORM.moduleName('./simple-tabs'), _aureliaPal.PLATFORM.moduleName('./simple-tab.html')]);
}