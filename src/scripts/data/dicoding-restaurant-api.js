import API_ENDPOINT from '../globals/api-endpoint';

const {
  GET_RESTAURANT_LIST, GET_DETAIL, SEARCH_RESTAURANT, ADD_REVIEW,
} = API_ENDPOINT;

class RestaurantSource {
  static async getList() {
    const response = await fetch(GET_RESTAURANT_LIST);
    const responseJson = await response.json();
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    return responseJson.restaurants;
  }

  static async getDetail(id) {
    const response = await fetch(GET_DETAIL(id));
    const responseJson = await response.json();
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    return responseJson.restaurant;
  }

  static async getSearch(query) {
    const response = await fetch(SEARCH_RESTAURANT(query));
    const responseJson = await response.json();
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`);
    }
    if (responseJson.restaurants.length === 0) {
      const message = `There are no restaurants that matched your query "${query}"`;
      throw message;
    }
    return responseJson.restaurants;
  }

  static async postReview(data) {
    const response = await fetch(ADD_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const responseJson = await response.json();
    return responseJson.customerReviews;
  }
}

export default RestaurantSource;
