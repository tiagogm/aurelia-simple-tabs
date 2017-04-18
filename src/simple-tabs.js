import { inject, bindable, DOM, computedFrom } from 'aurelia-framework';

@inject(DOM.Element)
export class SimpleTabs {

  constructor(_DOMElement) {
    this.element = _DOMElement;
    this.tabsEl = [];
    this.activeTabIdx = 0;
  }

  @computedFrom('tabsEl')
  get tabsHeaders() {
    return this.tabsEl.map(t => {
      return {
        name: t.getAttribute('name') || 'tab',
        css: { width: `${this.tabWidth}%` }
      }
    });
  }

  @computedFrom('tabsEl', 'activeTabIdx')
  get slideCss() {
    let width = `${this.tabWidth}%`;
    return {
      width,
      left: `calc(${this.activeTabIdx} * ${width})`
    }
  }

  get tabWidth() {
    return (100 / ((this.tabsEl||{}).length || 0));
  }

  attached() {
    if(!this.element) return;
    //TODO: setup mutation observer to observe tab slot changes and rebuild the tab headers if needed
    this.tabsEl = [].slice.call(this.element.querySelectorAll('simple-tab')) 
    this.changeTab(0);
  }

  changeTab(index) {
    this.activeTabIdx = index;
    this.tabsEl.forEach((t, i) => t.setAttribute('data-active', i === index))
  }

}
