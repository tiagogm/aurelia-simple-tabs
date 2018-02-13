import { PLATFORM } from 'aurelia-pal';

export * from './simple-tabs';

export function configure(config) {
  config.globalResources([PLATFORM.moduleName('./simple-tabs'), PLATFORM.moduleName('./simple-tab.html')]);
}