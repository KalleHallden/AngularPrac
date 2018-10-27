import { PracticeAppPage } from './app.po';

describe('practice-app App', function() {
  let page: PracticeAppPage;

  beforeEach(() => {
    page = new PracticeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
