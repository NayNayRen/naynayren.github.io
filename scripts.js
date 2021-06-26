

const nav = document.querySelector('.nav-container');
const scrollPoint = document.querySelector('#scroll-point');

function fixedNav() {
  if (document.documentElement.scrollTop > 75 && window.innerWidth > 1000) {// scroll point in pixels to start the fixed position
    nav.classList.add('fixed');
    scrollPoint.style.paddingTop = '130px';// padding of the scroll point when fixed
  }
  else if(document.documentElement.scrollTop > 75 && window.innerWidth < 1000 && window.innerWidth > 700){// changes scroll point and padding for 700px width
    nav.classList.add('fixed');
    scrollPoint.style.paddingTop = '120px';
  }else if(document.documentElement.scrollTop > 70 && window.innerWidth < 700){
    nav.classList.add('fixed');
    scrollPoint.style.paddingTop = '110px';
  }else {
    nav.classList.remove('fixed');
    scrollPoint.style.paddingTop = '45px';// padding of the scroll point when not fixed
  }
}

window.addEventListener('scroll', fixedNav);
