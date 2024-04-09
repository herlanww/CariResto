import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Favorite = {
  async render() {
    return `
      <loading-spin style="height: calc(100vh - 65px);"></loading-spin>
      <div id="favorite" class="container">
        <h2 id="fav-header"></h2>
        <div is="restaurant-list" id="restaurant-list"></div>
      </div>
    `;
  },

  async afterRender() {
    const favContainer = document.querySelector('#favorite');
    const loadingElm = document.querySelector('loading-spin');
    const favHeader = document.querySelector('#fav-header');

    const favorite = await FavoriteRestaurantIdb.getAllRestaurants();
    loadingElm.setAttribute('style', 'display: none;');
    favHeader.textContent = 'Your Favorite Restaurants';
    const restoListElm = document.querySelector('#restaurant-list');
    function renderResto(restaurants) { restoListElm.restaurants = restaurants; }

    if (favorite.length) {
      renderResto(favorite);
    } else {
      favContainer.innerHTML = '<p style="text-align: center;">You don\'t have any favorite restaurants</p>';
    }
  },
};

export default Favorite;
