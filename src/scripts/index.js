import 'regenerator-runtime'; /* for async await transpile */
import '../styles/style.css';
import '../styles/responsive.css';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import './components/nav-bar';
import './components/skip-link';
import './components/search-bar';
import './components/result-header';
import './components/restaurant-list';
import './components/footer-content';
import './components/like-button';
import './components/loading-spin';

import App from './view/app';
import swRegister from './utils/sw-register';

const app = new App({
  content: document.querySelector('#app'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', async () => {
  app.renderPage();
  await swRegister();
});
