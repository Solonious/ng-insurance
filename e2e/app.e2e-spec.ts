import { NgIngoPage } from './app.po';

describe('ng-ingo App', () => {
  let page: NgIngoPage;

  beforeEach(() => {
    page = new NgIngoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
