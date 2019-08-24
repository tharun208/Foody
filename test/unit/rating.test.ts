import App from '../../src/models/app';

describe('Test Suites for Rating', () => {
  beforeAll(() => {
    App.init();
  });
  it('it should add rating to a restuarant', () => {
    const searchRestuarants = App.search.searchRestaurants('meg');
    App.rating.giveRatings(searchRestuarants[0].id, 5);
    const ratedRestuarant = App.search.searchRestaurants('meg');
    expect(ratedRestuarant[0].averageRatings).toBe(5);
  });
  it('it should update the rating to a restuarant', () => {
    const searchRestuarants = App.search.searchRestaurants('meg');
    App.rating.giveRatings(searchRestuarants[0].id, 5);
    const ratedRestuarant = App.search.searchRestaurants('meg');
    expect(ratedRestuarant[0].averageRatings).toBe(10);
  });
});
