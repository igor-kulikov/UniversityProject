import { UniversityProjectPage } from './app.po';

describe('university-project App', () => {
  let page: UniversityProjectPage;

  beforeEach(() => {
    page = new UniversityProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
