import { Restaurant } from './restaurant';
import { SearchService } from '../service/search';
import { RatingService } from '../service/rating';
import { UserService } from '../service/user';
import { User } from './user';

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
  static user: User;
  static restaurant: Restaurant;
  static search: SearchService;
  static rating: RatingService;
  static userService: UserService;
  static async init() {
    App.user = new User();
    App.restaurant = new Restaurant();
    App.restaurant.insertRestuarants(ListOfrestaurants);
    App.search = new SearchService(this.restaurant);
    App.rating = new RatingService(this.restaurant);
    App.userService = new UserService(this.user);
  }
}
