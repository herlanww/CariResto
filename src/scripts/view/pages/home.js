import RestaurantSource from '../../data/dicoding-restaurant-api';

const Home = {
  async render() {
    return `
      <div is="hero-section" class="hero-container">
        <picture>
          <source media="(min-width: 920px)" srcset="./images/heros/hero-image_2-large.jpg">
          <source media="(min-width: 620px)" srcset="./images/heros/hero-image_2-medium.jpg">
          <img fetchpriority="high" src="./images/heros/hero-image_2-small.jpg" alt="">
        </picture>
        <div class="hero-content">
          <h2 class="headline">Find the best restaurant<br>for any occasion.</h2>
          <div class="search-bar-preload">
            <div is="search-bar" id="search-bar"></div>
          </div>
        </div>
      </div>
      <loading-spin style="height: calc(100vh - 425px);"></loading-spin>
      <div id="maincontent" class="container">
        <div is="result-header" id="result-header"></div>
        <div is="restaurant-list" id="restaurant-list"></div>
      </div>
    `;
  },

  async afterRender() {
    const restoListElm = document.querySelector('#restaurant-list');
    const searchBarElm = document.querySelector('#search-bar');
    const resultHeaderElm = document.querySelector('#result-header');
    const loadingElm = document.querySelector('loading-spin');
    const mainContent = document.querySelector('#maincontent');

    function renderResto(restaurants) { restoListElm.restaurants = restaurants; }
    function renderResultHeader(header) { resultHeaderElm.header = header; }
    function getListFallback(message) { restoListElm.renderError(message); }
    function searchFallback(message) { restoListElm.renderSearchError(message); }

    try {
      const restaurants = await RestaurantSource.getList();
      loadingElm.setAttribute('style', 'display: none;');
      renderResultHeader('Explore Restaurants');
      renderResto(restaurants);
    } catch (message) {
      loadingElm.setAttribute('style', 'display: none;');
      renderResultHeader('Ooops!');
      getListFallback(message);
    }

    const searchRestaurant = async (e) => {
      e.preventDefault();
      if (searchBarElm.value.trim()) {
        loadingElm.removeAttribute('style');
        mainContent.setAttribute('style', 'display: none;');
        try {
          const result = await RestaurantSource.getSearch(searchBarElm.value);
          loadingElm.setAttribute('style', 'display: none;');
          mainContent.removeAttribute('style');
          const searchResultHeader = `${result.length} results were found for your query "${searchBarElm.value}"`;
          renderResultHeader(searchResultHeader);
          renderResto(result);
        } catch (message) {
          loadingElm.setAttribute('style', 'display: none;');
          mainContent.removeAttribute('style');
          renderResultHeader('Ooops!');
          searchFallback(message);
        }
      }
      searchBarElm.resetValue();
    };

    searchBarElm.searchEvent = searchRestaurant;
  },
};

export default Home;
