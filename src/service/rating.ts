export class RatingService {
  constructor(private restaurant: any) {}
  giveRatings(id: string, rating: number) {
    const findRestaurant = this.restaurant.findRestuarant(id);
    if (findRestaurant) {
      this.restaurant.addRatings(findRestaurant, rating);
      return true;
    } else {
      return false;
    }
  }
}
