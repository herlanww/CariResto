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
  I.waitForElement('.card-title a');
  const firstRestaurant = locate('.card-title a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.waitForElement('#like-button');
  I.click('#like-button');

  I.amOnPage('/#/favorite');
  I.waitForElement('.card');
  const likedRestaurantTitle = await I.grabTextFrom('.card-title a');

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('Unliking a restaurant', async ({ I }) => {
  I.amOnPage('/#/favorite');
  I.see('You don\'t have any favorite restaurants', 'p');

  I.amOnPage('/');
  I.waitForElement('.card');
  const firstRestaurant = locate('.card').first();
  I.click(firstRestaurant);

  I.waitForElement('#like-button');
  I.click('#like-button');

  I.amOnPage('/#/favorite');
  I.waitForElement('.card');
  const likedRestaurant = locate('.card').first();
  I.click(likedRestaurant);

  I.waitForElement('#like-button');
  I.click('#like-button');

  I.amOnPage('/#/favorite');
  I.see('You don\'t have any favorite restaurants', 'p');
});
