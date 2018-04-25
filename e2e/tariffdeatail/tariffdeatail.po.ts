import { browser, ExpectedConditions, element, by } from 'protractor';

by.addLocator('dataHook', function (hook, optParentElement, optRootSelector) {
  const using = optParentElement || document.querySelector(optRootSelector) || document;
  return using.querySelector('[data-hook=\'' + hook + '\']');
});

export class TariffDetail {

  readyElement = 'readyElement';
  title = 'title';
  mobileData = 'mobileData';

  constructor(private tariffPath: string) { }

  navigateTo() {
    return browser.get(`https://yoigo.com/${this.tariffPath}`);
  }

  waitUntilReady() {
    return browser.wait(
      ExpectedConditions.visibilityOf(element(by.dataHook(this.readyElement))),
      15000
    );
  }

  getTitle() {
    return element(by.dataHook(this.title)).getText();
  }

  getMobileData() {
    return element(by.dataHook(this.mobileData)).getText();
  }

}
