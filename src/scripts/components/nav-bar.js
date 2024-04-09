class NavBar extends HTMLDivElement {
  connectedCallback() {
    this._render();
    this._toggleMenu();
  }

  _toggleMenu() {
    const button = this.querySelector('.toggle-menu');
    const open = this.querySelector('.open-menu');
    const close = this.querySelector('.close-menu');
    const menuList = this.querySelector('.menu-list');
    button.addEventListener('click', () => {
      open.classList.toggle('open');
      close.classList.toggle('open');
      menuList.classList.toggle('open');
      button.ariaLabel = menuList.classList.contains('open') ? 'Close menu' : 'Menu';
    });
    const logo = document.querySelector('.nav-brand');
    logo.addEventListener('click', () => {
      open.classList.remove('open');
      close.classList.remove('open');
      menuList.classList.remove('open');
      button.ariaLabel = menuList.classList.contains('open') ? 'Close menu' : 'Menu';
    });
    const content = document.querySelector('#app');
    content.addEventListener('click', () => {
      open.classList.remove('open');
      close.classList.remove('open');
      menuList.classList.remove('open');
      button.ariaLabel = menuList.classList.contains('open') ? 'Close menu' : 'Menu';
    });
    const list = this.querySelectorAll('li');
    list.forEach((item) => item.addEventListener('click', () => {
      open.classList.remove('open');
      close.classList.remove('open');
      menuList.classList.remove('open');
      button.ariaLabel = menuList.classList.contains('open') ? 'Close menu' : 'Menu';
    }));
  }

  _render() {
    this.setAttribute('class', 'container');
    this.innerHTML = `
      <div class="nav-content">
        <a href="./" class="nav-brand">
          <img class="logo" src="./images/logo/logo-small.png" alt="">
          <h1 class="brand-name">CariResto</h1>
        </a>
        <div class="nav-menu">
          <button class="toggle-menu" aria-label="Menu">
            <i class="open-menu fa-solid fa-bars"></i>
            <i class="close-menu fa-solid fa-xmark"></i>
          </button>
          <ul class="menu-list">
            <li><a href="./">Home</a></li>
            <li><a href="#/favorite">Favorite</a></li>
            <li><a href="https://www.instagram.com/herlanww" target="_blank">About Us</a></li>
          </ul>
        </div>
      </div>
    `;
  }
}

customElements.define('nav-bar', NavBar, { extends: 'div' });
