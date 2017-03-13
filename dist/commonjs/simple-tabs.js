'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleTabs = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _dec2, _dec3, _class, _desc, _value, _class2;

var _aureliaFramework = require('aurelia-framework');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var SimpleTabs = exports.SimpleTabs = (_dec = (0, _aureliaFramework.inject)(_aureliaFramework.DOM.Element), _dec2 = (0, _aureliaFramework.computedFrom)('tabsEl'), _dec3 = (0, _aureliaFramework.computedFrom)('tabsEl', 'activeTabIdx'), _dec(_class = (_class2 = function () {
  function SimpleTabs(_DOMElement) {
    _classCallCheck(this, SimpleTabs);

    this.element = _DOMElement;
    this.tabsEl = [];
    this.activeTabIdx = 0;
  }

  SimpleTabs.prototype.attached = function attached() {
    if (!this.element) return;

    this.tabsEl = [].slice.call(this.element.querySelectorAll('simple-tab'));
    this.changeTab(0);
  };

  SimpleTabs.prototype.changeTab = function changeTab(index) {
    this.activeTabIdx = index;
    this.tabsEl.forEach(function (t, i) {
      return t.setAttribute('data-active', i === index);
    });
  };

  _createClass(SimpleTabs, [{
    key: 'tabsHeaders',
    get: function get() {
      var _this = this;

      return this.tabsEl.map(function (t) {
        return {
          title: t.getAttribute('title') || 'tab',
          css: { width: _this.tabWidth + '%' }
        };
      });
    }
  }, {
    key: 'slideCss',
    get: function get() {
      var width = this.tabWidth + '%';
      return {
        width: width,
        left: 'calc(' + this.activeTabIdx + ' * ' + width + ')'
      };
    }
  }, {
    key: 'tabWidth',
    get: function get() {
      return 100 / ((this.tabsEl || {}).length || 0);
    }
  }]);

  return SimpleTabs;
}(), (_applyDecoratedDescriptor(_class2.prototype, 'tabsHeaders', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'tabsHeaders'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'slideCss', [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'slideCss'), _class2.prototype)), _class2)) || _class);