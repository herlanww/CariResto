import RestaurantSource from '../../data/dicoding-restaurant-api';
import UrlParser from '../../routes/url-parser';
import { restaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import submitReview from '../../utils/submit-review';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <loading-spin style="height: calc(100vh - 65px);"></loading-spin>
      <div id="restaurant"></div>
    `;
  },

  async afterRender() {
    const loadingElm = document.querySelector('loading-spin');
    const restoContainer = document.querySelector('#restaurant');
    const url = UrlParser.parseActiveUrlWithoutCombiner();

    try {
      const restaurant = await RestaurantSource.getDetail(url.id);
      loadingElm.setAttribute('style', 'display: none;');
      restoContainer.innerHTML = restaurantDetailTemplate(restaurant);

      LikeButtonPresenter.init({
        likeButton: document.querySelector('#like-button'),
        restaurant: {
          id: restaurant.id,
          pictureId: restaurant.pictureId,
          name: restaurant.name,
          description: restaurant.description,
          city: restaurant.city,
          rating: restaurant.rating,
        },
        likeIcon: document.querySelector('#like-button i'),
        favoriteRestaurant: FavoriteRestaurantIdb,
      });
    } catch (error) {
      loadingElm.setAttribute('style', 'display: none;');
      restoContainer.innerHTML = `<p style="text-align: center; margin-top: 60px;">${error}</p>`;
    }
    submitReview();
  },
};

export default Detail;
