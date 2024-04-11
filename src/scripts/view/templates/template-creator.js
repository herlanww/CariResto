import CONFIG from '../../globals/config';

export const restaurantDetailTemplate = (restaurant) => `
  <div class="cover-img">
    <picture>
      <source media="(min-width: 920px)" srcset="${CONFIG.BASE_L_IMAGE_URL}/${restaurant.pictureId}">
      <source media="(min-width: 620px)" srcset="${CONFIG.BASE_M_IMAGE_URL}/${restaurant.pictureId}">
      <img src="${CONFIG.BASE_S_IMAGE_URL}/${restaurant.pictureId}" alt="">
    </picture>
  </div>
  <div class="container">

    <div class="detail-header">
      <div>
        <h2 class="restaurant-name">${restaurant.name}</h2>
        <div class="detail-header-content">
          <div class="rating">
            <i class="fa-solid fa-star" style="color: #FFD43B; font-size: 16px;"></i>
            <p>${restaurant.rating.toFixed(1)}</p>
          </div>
          <div class="location">
            <i class="fa-solid fa-location-dot" style="font-size: 16px;"></i>
            <p>${restaurant.city}</p>
          </div>
          <p>${restaurant.address}</p>
        </div>
      </div>
      <button is="like-button" id="like-button"></button>
    </div>

    <hr>

    <div class="detail-description">
      <p>${restaurant.description}</p>
    </div>

    <div class="categories">
      <p><strong>Categories: </strong></p>
      ${restaurant.categories.map((category) => `<div class="tag">${category.name}</div>`).join('')}
    </div>

    <div class="menus">
      <h3>Menu</h3>
      <div class="table-menu">
        <div>
          <h4>Foods</h4>
          <ul>
            ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join(' ')}
          </ul>
        </div>
        <div>
          <h4>Drinks</h4>
          <ul>
            ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join(' ')}
          </ul>
        </div>
      </div>
    </div>

    <div class="reviews">
      <h3>What people are saying</h3>
      <div class="review-wrapper">
        ${restaurant.customerReviews.map((review) => `
        <div class="review">
          <div class="review-header">
            <img src="./images/avatar/avatar-2.png" alt="" style="width: 40px; height: 40px;">
            <div>
              <p class="review-name"><strong>${review.name}</strong></p>
              <p class="review-date" style="font-size: 14px; color: #555;">${review.date}</p>
            </div>
          </div>
          <p class="review-review"><q>${review.review}</q></p>
        </div>
        `).join('')}
      </div>
    </div>

    <form class="post-review">
      <h3>Write a review</h3>
      <div class="review-content">
        <label for="name">Name</label>
        <input type="text" id="name" placeholder="Your name"></input>
        <div id="valid-name" class="valid-feedback">Please fill out this field.</div>
      </div>
      <div class="review-content">
        <label for="review">Review</label>
        <textarea id="review" rows="5" placeholder="Share details of your experience at this restaurant"></textarea>
        <div id="valid-review" class="valid-feedback">Please fill out this field.</div>
      </div>
      <button type="submit" id="submit-review">Submit</button>
    </form>

  </div>
`;

export const reviewTemplate = (reviews) => reviews.map((review) => `
  <div class="review">
    <div class="review-header">
      <img src="./images/avatar/avatar-2.png" alt="" style="height: 40px;">
      <div>
        <p class="review-name"><strong>${review.name}</strong></p>
        <p class="review-date" style="font-size: 14px; color: #555;">${review.date}</p>
      </div>
    </div>
    <p class="review-review"><q>${review.review}</q></p>
  </div>
`).join('');
