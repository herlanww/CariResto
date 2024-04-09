class SkipLink extends HTMLAnchorElement {
  connectedCallback() {
    this.className = 'skip-link';
    this.href = '#maincontent';
    this.innerHTML = `
      Skip to main content
    `;
  }
}

customElements.define('skip-link', SkipLink, { extends: 'a' });
