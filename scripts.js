

const nav = document.querySelector('.nav-container');
const scrollPoint = document.querySelector('#scroll-point');

function fixedNav() {
  if (document.documentElement.scrollTop > 75) {// scroll point in pixels to start the fixed position
    nav.classList.add('fixed');
    nav.style.transition = 'box-shadow 200ms ease-in';
    nav.style.boxShadow = '0 60px 50px 50px rgba(0,0,0,0.75)';
    scrollPoint.style.paddingTop = '130px';// padding of the scroll point when fixed
  }else {
    nav.classList.remove('fixed');
    nav.style.boxShadow = 'none';
    scrollPoint.style.paddingTop = '45px';// padding of the scroll point when not fixed
  }
  if(document.documentElement.scrollTop > 70 && window.innerWidth <= 700){// changes scroll point and padding for 700px width
    nav.classList.add('fixed');
    nav.style.boxShadow = 'none';
    scrollPoint.style.paddingTop = '110px';
  }
}

window.addEventListener('scroll', fixedNav);
