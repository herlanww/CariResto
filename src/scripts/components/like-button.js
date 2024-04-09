class LikeButton extends HTMLButtonElement {
  connectedCallback() {
    this.className = 'like-button';
    this.setAttribute('aria-label', 'like');
    this.innerHTML = `
      <i class="fa-regular fa-heart"></i>
    `;
  }
}

customElements.define('like-button', LikeButton, { extends: 'button' });
