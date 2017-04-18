var _dec, _dec2, _dec3, _class, _desc, _value, _class2;

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

import { inject, bindable, DOM, computedFrom } from 'aurelia-framework';

export let SimpleTabs = (_dec = inject(DOM.Element), _dec2 = computedFrom('tabsEl'), _dec3 = computedFrom('tabsEl', 'activeTabIdx'), _dec(_class = (_class2 = class SimpleTabs {

  constructor(_DOMElement) {
    this.element = _DOMElement;
    this.tabsEl = [];
    this.activeTabIdx = 0;
  }

  get tabsHeaders() {
    return this.tabsEl.map(t => {
      return {
        name: t.getAttribute('name') || 'tab',
        css: { width: `${this.tabWidth}%` }
      };
    });
  }

  get slideCss() {
    let width = `${this.tabWidth}%`;
    return {
      width,
      left: `calc(${this.activeTabIdx} * ${width})`
    };
  }

  get tabWidth() {
    return 100 / ((this.tabsEl || {}).length || 0);
  }

  attached() {
    if (!this.element) return;

    this.tabsEl = [].slice.call(this.element.querySelectorAll('simple-tab'));
    this.changeTab(0);
  }

  changeTab(index) {
    this.activeTabIdx = index;
    this.tabsEl.forEach((t, i) => t.setAttribute('data-active', i === index));
  }

}, (_applyDecoratedDescriptor(_class2.prototype, 'tabsHeaders', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'tabsHeaders'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'slideCss', [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'slideCss'), _class2.prototype)), _class2)) || _class);