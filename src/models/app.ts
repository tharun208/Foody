import { Restaurant } from './restaurant';
import { Search } from '../service/search';
import { Rating } from '../service/rating';

const ListOfrestaurants = [
  {
    id: '1',
    name: 'meghana foods',
    type: ['indian', 'chinese'],
  },
  {
    id: '2',
    name: 'leon grill',
    type: ['American', 'chinese', 'desserts'],
  },
  {
    id: '3',
    name: 'mortis',
    type: ['Indian', 'North', 'South'],
  },
  {
    id: '4',
    name: 'adayar anandha bhavan',
    type: ['Indian', 'South', 'Desserts'],
  },
  {
    id: '5',
    name: 'thickshake factory',
    type: ['Beverages', 'Desserts'],
  },
  {
    id: '6',
    name: 'stoner',
    type: ['icecream', 'Desserts'],
  },
];

export default class App {
  static restaurant: Restaurant;
  static search: Search;
  static rating: Rating;
  static async init() {
    App.restaurant = new Restaurant();
    App.restaurant.insertRestuarants(ListOfrestaurants);
    App.search = new Search(this.restaurant);
    App.rating = new Rating(this.restaurant);
  }
}
