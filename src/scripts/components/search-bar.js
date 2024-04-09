class SearchBar extends HTMLDivElement {
  set searchEvent(event) {
    this.search = event;
    this._render();
  }

  get value() {
    return this.querySelector('.search-input').value.trim();
  }

  resetValue() {
    this.querySelector('.search-input').value = '';
  }

  _render() {
    this.className = 'search-bar';
    this.innerHTML = `
      <form class="search-form" role="search">
        <input class="search-input" type="search" placeholder="Search restaurant name, category or menu" aria-label="search" required>
        <button class="search-btn" type="submit" aria-label="search">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    `;
    this.querySelector('.search-form').addEventListener('submit', this.search);
  }
}

customElements.define('search-bar', SearchBar, { extends: 'div' });
