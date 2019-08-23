import { genId } from '../utils/utils';
export class Restaurant {
  static restaurant: Restaurant;
  private ratings!: Array<number>;
  private avergaeRatings!: number;
  private ListOfrestaurants: Array<any> = [];
  insertRestuarants(restaurants: Array<any>) {
    for (const restaurant of restaurants) {
      const temp = restaurant;
      temp.id = genId(4);
      temp.ratings = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      };
      temp.averageRatings = 0;
      this.ListOfrestaurants.push(restaurant);
    }
  }
  findRestuarant(id: string) {
    for (const restaurant of this.ListOfrestaurants) {
      if (restaurant.id === id) {
        return restaurant;
      }
    }
  }
  getRestaurants() {
    return this.ListOfrestaurants;
  }
  addRatings(restaurant: Restaurant, ratingValue: number) {
    let averageRatings = 0;
    let totalRatings = 0;
    const { ratings } = restaurant;
    ratings[ratingValue] = ratings[ratingValue] + 1;
    for (const rating in ratings) {
      averageRatings = averageRatings + ratings[rating] * parseInt(rating);
    }
    for (const rating in ratings) {
      totalRatings = totalRatings + ratings[rating];
    }
    restaurant.avergaeRatings = averageRatings;
  }
}
