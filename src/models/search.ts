export class Search {
  constructor(private restaurant: any) {}
  searchRestaurants(searchQuery: string) {
    const availableRestaurants = [];
    for (const restaurant of this.restaurant.getRestaurants()) {
      if (restaurant.name.includes(searchQuery) === true) {
        availableRestaurants.push(restaurant);
      }
    }
    return availableRestaurants;
  }
}
