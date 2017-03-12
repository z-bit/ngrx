import { NgrxPage } from './app.po';

describe('ngrx App', function() {
  let page: NgrxPage;

  beforeEach(() => {
    page = new NgrxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
