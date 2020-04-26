import {browser, by, element} from 'protractor';

export class WebUiPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root app-header span')).getText();
  }
}
