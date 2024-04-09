class Footer extends HTMLDivElement {
  connectedCallback() {
    this.className = 'footer-content';
    this.innerHTML = `
      <p>Copyright &copy; 2024 CariResto</p>
    `;
  }
}

customElements.define('footer-content', Footer, { extends: 'div' });
