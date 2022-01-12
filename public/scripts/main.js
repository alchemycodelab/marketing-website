/* eslint-disable no-unused-vars */
import { loadCarousels } from './carousels.js';
import { loadSelections, loadToggles, loadScrollSelects } from './actives.js';

function loadScripts() {
  loadSelections();
  loadToggles();
  loadCarousels();
  // loadScrollSelects();
};

loadScripts();
