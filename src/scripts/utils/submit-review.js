import RestaurantSource from '../data/dicoding-restaurant-api';
import { reviewTemplate } from '../view/templates/template-creator';
import UrlParser from '../routes/url-parser';

const submitReview = () => {
  const url = UrlParser.parseActiveUrlWithoutCombiner();
  const reviewWrapper = document.querySelector('.review-wrapper');
  const submitReviewButton = document.querySelector('#submit-review');
  const validName = document.querySelector('#valid-name');
  const validReview = document.querySelector('#valid-review');
  const name = document.querySelector('#name');
  const review = document.querySelector('#review');

  submitReviewButton.addEventListener('click', async (event) => {
    event.preventDefault();
    if (!name.value.trim()) {
      validName.classList.add('invalid');
    }
    if (!review.value.trim()) {
      validReview.classList.add('invalid');
    }
    if (name.value.trim() && review.value.trim()) {
      const reviewData = {
        id: url.id,
        name: name.value,
        review: review.value,
      };
      const reviews = await RestaurantSource.postReview(reviewData);
      reviewWrapper.innerHTML = '';
      reviewWrapper.innerHTML = reviewTemplate(reviews);
      name.value = '';
      review.value = '';
    }
  });

  name.addEventListener('keyup', () => {
    validName.classList.remove('invalid');
  });
  review.addEventListener('keyup', () => {
    validReview.classList.remove('invalid');
  });
};

export default submitReview;
