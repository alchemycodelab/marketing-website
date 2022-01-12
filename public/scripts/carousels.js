import { getLoadAll } from './load.js';

export const loadCarousels = getLoadAll('.carousel-script', loadCarousel);

function getObserver(root, callback) {
  // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#creating_an_intersection_observer
  return new IntersectionObserver(callback, {
    root,
    rootMargin: '0px',
    threshold: 0.9
  });
}

function loadCarousel(carousel) {
  const scroller = carousel.querySelector('.carousel-scroller');
  const inputs = carousel.querySelectorAll('input');
  const cards = carousel.querySelectorAll('li');
  // map the DOM nodes to their respective index
  const cardIndex = new Map([...cards.entries()].map(([k, v]) => [v, k]));

  let currentIndex = 0;

  const observer = getObserver(scroller, events => {
    events.forEach(({ isIntersecting, target: card }) => {
      if (!isIntersecting) return;
      currentIndex = cardIndex.get(card);
      inputs[currentIndex].checked = true;
    });
  });

  cards.forEach(card => observer.observe(card));

  const scrollTo = i => {
    scroller.scroll({
      left: cards[i].clientWidth * i,
      behavior: 'smooth',
    });
  };

  window.addEventListener('resize', () => {
    scrollTo(currentIndex);
  });

  // // makes the dots clickable, too small for good UX and not
  // // needed because the carousel is already scrollable
  // inputs.forEach(input => {
  //   input.addEventListener('input', ({ target }) => {
  //     currentIndex = +target.value;
  //     scrollTo(currentIndex);
  //   });
  // });

  let interval = 0;
  let timeout = 0;
  let hasScrolled = false;
  const WAIT = 5000;

  scroller.addEventListener('scroll', () => {
    clearInterval(interval);

    if (timeout) return hasScrolled = true;

    timeout = setTimeout(() => {
      timeout = 0;
      if (!hasScrolled) return;
      hasScrolled = false;
      start();
    }, 3000);
  });

  const start = () => {
    clearInterval(interval);

    interval = setInterval(() => {
      currentIndex = ++currentIndex % cards.length;
      scrollTo(currentIndex);
    }, WAIT);
  };

  start();
}