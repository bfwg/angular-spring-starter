import { WebUiPage } from './app.po';

describe('web-ui App', () => {
  let page: WebUiPage;

  beforeEach(() => {
    page = new WebUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('ANGULAR-SPRING-JWT-STARTER');
  });
});
