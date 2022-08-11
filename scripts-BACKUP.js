const burgerMenu = document.querySelector('.burger-menu');
const upArrow = document.querySelector('.up-arrow');
const header = document.querySelector('.header');
const scrollPoint = document.getElementById('scroll-point');

function fixedHeader() {
  // scroll point in pixels to start the fixed position and window width
  if (document.documentElement.scrollTop > 0 && window.innerWidth > 1300) {
    header.style.position = 'fixed';
    header.style.top = '0';
    upArrow.style.left = '5px';
    scrollPoint.style.paddingTop = '100px';
  } else if (
    document.documentElement.scrollTop > 0 &&
    window.innerWidth < 1300 &&
    window.innerWidth > 1000
  ) {
    header.style.position = 'fixed';
    header.style.top = '0';
    upArrow.style.left = '5px';
    scrollPoint.style.paddingTop = '100px';
  } else if (
    document.documentElement.scrollTop > 0 &&
    window.innerWidth < 1000 &&
    window.innerWidth > 700
  ) {
    header.style.position = 'fixed';
    header.style.top = '0';
    upArrow.style.left = '5px';
    scrollPoint.style.paddingTop = '100px';
  } else if (
    document.documentElement.scrollTop > 0 &&
    window.innerWidth < 700 &&
    window.innerWidth > 400
  ) {
    header.style.position = 'fixed';
    header.style.top = '0';
    upArrow.style.left = '5px';
    scrollPoint.style.paddingTop = '100px';
  } else if (
    document.documentElement.scrollTop > 0 &&
    window.innerWidth < 400
  ) {
    header.style.position = 'fixed';
    header.style.top = '0';
    upArrow.style.left = '5px';
    scrollPoint.style.paddingTop = '100px';
  } else {
    header.style.position = 'relative';
    scrollPoint.style.paddingTop = '0px';
    upArrow.style.left = '-60px';
  }
}

burgerMenu.addEventListener('click', () => {
  document
    .querySelector('#burger-overlay')
    .classList.toggle('burger-overlay-dim');
  document
    .querySelector('.navigation-links-container')
    .classList.toggle('show-navigation-links');
  document
    .querySelector('#burger-bars-1')
    .classList.toggle('burger-bars-rotate-clockwise');
  document
    .querySelector('#burger-bars-2')
    .classList.toggle('burger-bars-remove');
  document
    .querySelector('#burger-bars-3')
    .classList.toggle('burger-bars-rotate-counter-clockwise');
});

window.addEventListener('scroll', () => {
  fixedHeader();
});
