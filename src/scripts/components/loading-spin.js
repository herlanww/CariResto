class Spinner extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        #loading {
          width: 2rem;
          height: 2rem;
          border: 0.25em solid #222;
          border-right: 0.25em solid #eee;
          border-radius: 50%;
          animation: spin 0.75s infinite linear;
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }
      </style>
      
      <div id="loading"></div>
    `;
  }
}

customElements.define('loading-spin', Spinner);
