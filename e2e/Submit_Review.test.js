const assert = require('assert');

Feature('Submit Review');

Scenario('Submit a review', async ({ I }) => {
  I.amOnPage('/');
  I.waitForElement('.card');
  const firstRestaurant = locate('.card').first();
  I.click(firstRestaurant);

  I.waitForElement('.post-review');
  I.waitForElement('.review-name strong');
  I.waitForElement('.review-review q');

  const name = 'E2ETest';
  const date = new Date();
  const review = date[Symbol.toPrimitive]('number').toString();

  I.fillField('Name', name);
  I.fillField('Review', review);
  I.click('#submit-review');

  I.wait(1);

  const lastName = locate('.review-name strong').last();
  const lastReview = locate('.review-review q').last();

  const submittedName = await I.grabTextFrom(lastName);
  const submittedReview = await I.grabTextFrom(lastReview);

  assert.strictEqual(submittedName, name);
  assert.strictEqual(submittedReview, review);
});
