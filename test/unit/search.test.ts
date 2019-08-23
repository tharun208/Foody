import App from '../../src/models/app';

describe('Test Suites for Restaurant', () => {
  beforeAll(() => {
    App.init();
  });
  it('it should return a particular restuarant', () => {
    const searchRestuarants = App.search.searchRestaurants('meg');
    expect(searchRestuarants.length).toBeGreaterThan(0);
    expect(searchRestuarants[0].name).toBe('meghana foods');
  });
  it('it should return all restuarants when no search query is given', () => {
    const searchRestuarants = App.search.searchRestaurants(undefined);
    expect(searchRestuarants.length).toBeGreaterThan(0);
    expect(searchRestuarants[0].name).toBe('meghana foods');
  });
});
