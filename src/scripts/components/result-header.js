class ResultHeader extends HTMLDivElement {
  set header(header) {
    this._header = header;
    this._render();
  }

  _render() {
    this.className = 'result-header';
    this.innerHTML = `
      <h3>${this._header}</h3>
    `;
  }
}

customElements.define('result-header', ResultHeader, { extends: 'div' });
