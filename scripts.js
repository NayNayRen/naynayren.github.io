

const nav = document.querySelector('.nav-container');
const scrollPoint = document.querySelector('#scroll-point');

function fixedNav() {
  if (document.documentElement.scrollTop > 125) {// scroll point in pixels to start the fixed position
    nav.classList.add('fixed');
    scrollPoint.style.paddingTop = '115px';// padding of the scroll point when fixed
  } else {
    nav.classList.remove('fixed');
    scrollPoint.style.paddingTop = '35px';// padding of the scroll point when not fixed
  }
}

window.addEventListener('scroll', fixedNav);
