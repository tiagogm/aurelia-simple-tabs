'use strict';

System.register(['aurelia-pal', './simple-tabs'], function (_export, _context) {
  "use strict";

  var PLATFORM;
  function configure(config) {
    config.globalResources([PLATFORM.moduleName('./simple-tabs'), PLATFORM.moduleName('./simple-tab.html')]);
  }

  _export('configure', configure);

  return {
    setters: [function (_aureliaPal) {
      PLATFORM = _aureliaPal.PLATFORM;
    }, function (_simpleTabs) {
      var _exportObj = {};

      for (var _key in _simpleTabs) {
        if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _simpleTabs[_key];
      }

      _export(_exportObj);
    }],
    execute: function () {}
  };
});