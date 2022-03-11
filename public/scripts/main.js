/* eslint-disable no-unused-vars */
import { loadCarousels } from './carousels.js';
import { loadSelections, loadToggles } from './actives.js';

function loadScripts() {
  loadSelections();
  loadToggles();
  loadCarousels();
  // loadScrollSelects();
}

loadScripts();

// In dev and cms mode where Build happens client side,
// retry attaching script after 5 seconds. (We keep a 
// list of processed nodes in loading function so won't put
// multiple listeners on the nodes, see ./load.js)
setTimeout(loadScripts, 5000);
