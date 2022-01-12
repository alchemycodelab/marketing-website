/* eslint-disable no-unused-vars */
import { loadCarousels } from './carousels.js';
import { loadSelections, loadToggles } from './actives.js';

function loadScripts() {
  loadSelections();
  loadToggles();
  loadCarousels();
  // loadScrollSelects();
};

loadScripts();
