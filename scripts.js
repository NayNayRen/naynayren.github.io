

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

window.addEventListener('scroll', fixedNav);
