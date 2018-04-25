import { browser, ExpectedConditions, element, by } from 'protractor';

export class TariffDetail {

  readyElement = '.left-content thor-button';
  title = 'thor-tariff-landing h1';
  mobileData = '.tariff-info .overview-list li:first-child strong';

  constructor(private tariffPath: string) { }

  navigateTo() {
    return browser.get(`https://yoigo.com/${this.tariffPath}`);
  }

  waitUntilReady() {
    return browser.wait(
      ExpectedConditions.visibilityOf(element(by.css(this.readyElement))),
      15000
    );
  }

  getTitle() {
    return element(by.css(this.title)).getText();
  }

  getMobileData() {
    return element(by.css(this.mobileData)).getText();
  }

}
