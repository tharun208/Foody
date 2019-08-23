export class Restaurant {
  static restaurant: Restaurant;

  private ListOfrestaurants = [
    {
      name: 'meghana foods',
      type: ['indian', 'chinese'],
    },
    {
      name: 'leon grill',
      type: ['American', 'chinese', 'desserts'],
    },
    {
      name: 'mortis',
      type: ['Indian', 'North', 'South'],
    },
    {
      name: 'adayar anandha bhavan',
      type: ['Indian', 'South', 'Desserts'],
    },
    {
      name: 'thickshake factory',
      type: ['Beverages', 'Desserts'],
    },
    {
      name: 'stoner',
      type: ['icecream', 'Desserts'],
    },
  ];
  getRestaurants() {
    return this.ListOfrestaurants;
  }
}
