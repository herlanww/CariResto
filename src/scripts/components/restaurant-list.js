import CONFIG from '../globals/config';

const { BASE_S_IMAGE_URL } = CONFIG;

class Restaurants extends HTMLDivElement {
  set restaurants(restaurants) {
    this._restaurants = restaurants;
    this._render();
  }

  renderError(message) {
    this.innerHTML = '';
    this.innerHTML = `
      <div class="error-message">
        <p>${message}</p>
    `;
  }

  renderSearchError(message) {
    this.innerHTML = '';
    this.innerHTML = `
      <div class="error-message">
        <p>${message}</p>
        <p>Sugestion:</p>
        <ul>
          <li>Make sure that all words are spelled correctly.</li>
          <li>Try one word keywords.</li>
          <li>Try different keywords.</li>
        </ul>
        <p>or</p>
        <a href="./"><< Back to Explore Restaurants</a>
      </div>
    `;
  }

  _render() {
    this.innerHTML = '';

    const restoWrapper = document.createElement('ul');
    restoWrapper.className = 'restaurants';
    this.appendChild(restoWrapper);

    this._restaurants.forEach((restaurant) => {
      const card = document.createElement('li');
      card.classList = 'card';
      card.restaurant = restaurant;
      card.innerHTML = `
        <img class="lazyload" src="${BASE_S_IMAGE_URL}/${restaurant.pictureId}" alt="">
        <div class="card-body">
          <h4 class="card-title">
            <a href="#/detail/${restaurant.id}">${restaurant.name}</a>
          </h4>
          <p class="description">${restaurant.description}</p>
        </div>
        <div class="card-footer">
          <div class="location">
            <i class="fa-solid fa-location-dot" style="font-size: 16px;"></i>
            <p>${restaurant.city}</p>
          </div>
          <div class="rating">
            <i class="fa-solid fa-star" style="color: #FFD43B; font-size: 16px;"></i>
            <p>${restaurant.rating.toFixed(1)}</p>
          </div>
        </div>
      `;
      restoWrapper.appendChild(card);
    });
  }
}

customElements.define('restaurant-list', Restaurants, { extends: 'div' });
