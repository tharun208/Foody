import App from '../../src/models/app';

describe('Test Suites for Restaurant', () => {
  beforeAll(() => {
    App.init();
  });
  it('it should return the list of restuarants', () => {
    const availableRestuarants = App.restaurant.getRestaurants();
    expect(availableRestuarants.length).toBeGreaterThan(0);
    expect(availableRestuarants[0].name).toBe('meghana foods');
  });
});
