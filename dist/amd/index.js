define(['exports', './simple-tabs', 'aurelia-pal'], function (exports, _simpleTabs, _aureliaPal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_simpleTabs).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _simpleTabs[key];
      }
    });
  });
  exports.configure = configure;
  function configure(config) {
    config.globalResources([_aureliaPal.PLATFORM.moduleName('./simple-tabs'), _aureliaPal.PLATFORM.moduleName('./simple-tab.html')]);
  }
});