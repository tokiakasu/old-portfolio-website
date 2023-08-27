// https://github.com/VincentGarreau/particles.js

particlesJS.load('particles-js', 'assets/particles.json', function() {
    // console.log('particles.js loaded - callback');
});


// from https://verstaem.online/blog/fadein-i-fadeout-na-chistom-js/

const fadeIn = (el, timeout, display) => {
  el.style.opacity = 0;
  el.style.display = display || 'particles-js';
  el.style.transition = `opacity ${timeout}ms`;
  setTimeout(() => {
    el.style.opacity = 1;
  }, 10);
};
