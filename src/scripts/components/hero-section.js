import './search-bar';

class Hero extends HTMLDivElement {
  connectedCallback() {
    this.className = 'hero-container';
    this.innerHTML = `
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
    `;
  }
}

customElements.define('hero-section', Hero, { extends: 'div' });
