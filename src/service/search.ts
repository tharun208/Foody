export class Search {
  constructor(private restaurant: any) {}
  searchRestaurants(searchQuery: string) {
    if (searchQuery !== undefined) {
      const availableRestaurants = [];
      for (const restaurant of this.restaurant.getRestaurants()) {
        if (restaurant.name.includes(searchQuery.toLowerCase())) {
          availableRestaurants.push(restaurant);
        }
      }
      return availableRestaurants;
    } else {
      return this.restaurant.getRestaurants();
    }
  }
}