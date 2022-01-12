import { getLoadAll } from './load.js';

export const loadSelections = getLoadAll('.selection-script', loadSelection);
export const loadToggles = getLoadAll('.toggle-script', loadToggle);
export const loadScrollSelects = getLoadAll('.scroll-selection-script', loadScrollSelect);

const ACTIVE = 'active';
const hasActive = node => node?.classList.contains(ACTIVE);
const addActive = node => node?.classList.add(ACTIVE);
const removeActive = node => node?.classList.remove(ACTIVE);
const addAll = nodes => nodes.forEach(addActive);
const removeAll = nodes => nodes.forEach(removeActive);
const resetScroll = node => node.scrollTop = 0;

function loadSelection(node) {
  const triggers = node.querySelectorAll('.trigger-script');
  const targets = node.querySelectorAll('.target-script');
  const secondaryTargets = node.querySelectorAll('.secondary-target-script');
  const scrollResets = node.querySelectorAll('.scroll-reset-script');

  triggers.forEach((trigger, index) => {
    const target = targets[index];
    const secondaryTarget = secondaryTargets[index];
    const scrollReset = scrollResets[index];

    trigger.addEventListener('click', event => {
      event.stopPropagation();

      targets.forEach(each => each === target || removeActive(each));
      addActive(target);

      secondaryTargets.forEach(each => each === secondaryTarget || removeActive(each));
      addActive(secondaryTarget);

      triggers.forEach(each => each === trigger || removeActive(each));
      addActive(trigger);

      scrollResets.forEach(each => each === scrollReset || resetScroll(each));

    });
  });
}


function getObserver(root, callback) {
  // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#creating_an_intersection_observer
  return new IntersectionObserver(callback, {
    root,
    rootMargin: '0px',
    threshold: 1
  });
}

function loadScrollSelect(scrollable) {
  const items = scrollable.querySelectorAll('.scroll-item-script');

  const observer = getObserver(scrollable, events => {
    console.log('events');
    events.forEach((entry) => {
      // if (!entry.isVisible) return;
      console.log(entry);
    });
  });

  items.forEach(item => observer.observe(item));
}

function loadToggle(node) {
  const triggers = node.querySelectorAll('.trigger-script');
  const escapes = node.querySelectorAll('.escape-script');
  const targets = node.querySelectorAll('.target-script');

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', event => {
      event.stopPropagation();

      triggers.forEach(each => each === trigger || removeActive(each));

      if (hasActive(trigger)) {
        removeAll(triggers);
        removeAll(escapes);
        removeAll(targets);
      } else {
        addAll(triggers);
        addAll(escapes);
        addAll(targets);
      }
    });

  });

  const escapeAll = () => {
    removeAll(triggers);
    removeAll(escapes);
    removeAll(targets);
  };

  // escapes only toggle "off"
  escapes.forEach((escape) => {
    escape.addEventListener('click', escapeAll);
    escape.addEventListener('keyup', ({ key }) => {
      if (key !== 'Escape') return;
      escapeAll();
    });
  });
}