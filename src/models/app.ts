import { Restaurant } from './restaurant';
import { Search } from './search';

export default class App {
  static restaurant: Restaurant;
  static search: Search;
  static async init() {
    App.restaurant = new Restaurant();
    App.search = new Search(this.restaurant);
  }
}
