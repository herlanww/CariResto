const LikeButtonPresenter = {
  async init({
    likeButton, restaurant, likeIcon, favoriteRestaurant,
  }) {
    this._likeButton = likeButton;
    this._restaurant = restaurant;
    this._likeIcon = likeIcon;
    this._favoriteRestaurant = favoriteRestaurant;
    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isExist(id)) {
      this._renderUnlikeButton();
      this._unlike();
    } else {
      this._renderLikeButton();
      this._like();
    }
  },

  async _isExist(id) {
    const restaurant = await this._favoriteRestaurant.getRestaurant(id);
    return !!restaurant;
  },

  async _like() {
    this._likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },

  async _unlike() {
    this._likeButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },

  _renderLikeButton() {
    this._likeButton.setAttribute('aria-label', 'like');
    this._likeIcon.classList.replace('fa-solid', 'fa-regular');
  },

  _renderUnlikeButton() {
    this._likeButton.setAttribute('aria-label', 'unlike');
    this._likeIcon.classList.replace('fa-regular', 'fa-solid');
  },
};

export default LikeButtonPresenter;
