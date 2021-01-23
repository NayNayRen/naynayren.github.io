

const nav = document.querySelector('.nav-container');
const scrollPoint = document.querySelector('#scroll-point');

function fixedNav() {
  if (document.documentElement.scrollTop > 75) {// scroll point in pixels to start the fixed position
    nav.classList.add('fixed');
    scrollPoint.style.paddingTop = '185px';// padding of the scroll point when fixed
  }else {
    nav.classList.remove('fixed');
    scrollPoint.style.paddingTop = '35px';// padding of the scroll point when not fixed
  }
  if(document.documentElement.scrollTop > 70 && window.innerWidth <= 700){// changes scroll point and padding for 700px width
    nav.classList.add('fixed');
    scrollPoint.style.paddingTop = '110px';
  }
}

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

window.addEventListener('scroll', fixedNav);
