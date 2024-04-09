const assert = require('assert');

Feature('Liking Restaurant');

Scenario('Showing empty liked restaurant', ({ I }) => {
  I.amOnPage('/#/favorite');
  I.see('You don\'t have any favorite restaurants', 'p');
});

Scenario('Liking a restaurant', async ({ I }) => {
  I.amOnPage('/#/favorite');
  I.see('You don\'t have any favorite restaurants', 'p');

  I.amOnPage('/');
  I.seeElement('.card-title a');
  const firstRestaurant = locate('.card-title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#like-button');
  I.click('#like-button');

  I.amOnPage('/#/favorite');
  I.seeElement('.card');
  const likedRestaurantTitle = await I.grabTextFrom('.card-title a');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unliking a restaurant', async ({ I }) => {
  I.amOnPage('/#/favorite');
  I.see('You don\'t have any favorite restaurants', 'p');

  I.amOnPage('/');
  I.seeElement('.card');
  const firstRestaurant = locate('.card').first();
  I.click(firstRestaurant);

  I.seeElement('#like-button');
  I.click('#like-button');

  I.amOnPage('/#/favorite');
  I.seeElement('.card');
  const likedRestaurant = locate('.card').first();
  I.click(likedRestaurant);

  I.seeElement('#like-button');
  I.click('#like-button');

  I.amOnPage('/#/favorite');
  I.see('You don\'t have any favorite restaurants', 'p');
});
