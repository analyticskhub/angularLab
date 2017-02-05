import { AngularlabPage } from './app.po';

describe('angularlab App', function() {
  let page: AngularlabPage;

  beforeEach(() => {
    page = new AngularlabPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
