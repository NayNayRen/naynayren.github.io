const burgerMenu = document.querySelector('.burger-menu');
const nav = document.getElementById('nav-container');
const scrollPoint = document.getElementById('scroll-point');
const containers = document.querySelectorAll('.container');
const education = document.querySelector('.education');
const containerSquares = document.querySelectorAll('.container-square');
const headerLogo = document.querySelector('.header-logo');
const upArrow = document.querySelector('.up-arrow');

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const slide = document.querySelectorAll(".slide");
let i = 0;

prevBtn.onclick = function () {
  slide[i].classList.remove("current");
  i--;
  if (i < 0) {
    i = slide.length - 1;
  }
  slide[i].classList.add("current");
};

nextBtn.onclick = function () {
  slide[i].classList.remove("current");
  i++;
  if (i >= slide.length) {
    i = 0;
  }
  slide[i].classList.add("current");
};

// fixed navigation settings for all screens
function fixedNav() {
  // scroll point in pixels to start the fixed position and window width
  if (document.documentElement.scrollTop > 105 && window.innerWidth > 1300) {
    nav.style.position = 'fixed';
    nav.style.top = '0';
    upArrow.style.right = '5px';
    scrollPoint.style.paddingTop = '75px';
  } else if (document.documentElement.scrollTop > 105 && window.innerWidth < 1300 && window.innerWidth > 1000) {
    nav.style.position = 'fixed';
    nav.style.top = '0';
    upArrow.style.right = '5px';
    scrollPoint.style.paddingTop = '80px';
  } else if (document.documentElement.scrollTop > 95 && window.innerWidth < 1000 && window.innerWidth > 700) {
    nav.style.position = 'fixed';
    nav.style.top = '0';
    upArrow.style.right = '5px';
    scrollPoint.style.paddingTop = '75px';
  }else if (document.documentElement.scrollTop > 75 && window.innerWidth < 700 && window.innerWidth > 400) {
    nav.style.position = 'fixed';
    nav.style.top = '0';
    upArrow.style.right = '5px';
    scrollPoint.style.paddingTop = '50px';
  } else if (document.documentElement.scrollTop > 60 && window.innerWidth < 400) {
    nav.style.position = 'fixed';
    nav.style.top = '0';
    upArrow.style.right = '5px';
    scrollPoint.style.paddingTop = '50px';
  } else {
    nav.style.position = 'relative';
    scrollPoint.style.paddingTop = '0px';
    upArrow.style.right = '-60px';
  }
}

// fades each container for the scroll effect
function fadeIn(element) {
  element.style.opacity = '1';
}
// fades each square for the scroll effect
function moveSquares(element) {
  element.style.opacity = '1';
  element.style.right = '10%';
}

// settings for container info and decorative squares to be faded in
function pageContainerActions(){
  containers.forEach(container => {
    const distanceFromTopOfPage = container.getBoundingClientRect().top;
    if (distanceFromTopOfPage < 650 && window.innerWidth > 1000) {
      fadeIn(container);
    } else if (distanceFromTopOfPage < 575 && window.innerWidth < 1000 && window.innerWidth > 700) {
      fadeIn(container);
    } else if (distanceFromTopOfPage < 500 && window.innerWidth < 700 && window.innerWidth > 400) {
      fadeIn(container);
    } else if (distanceFromTopOfPage < 350 && window.innerWidth < 400) {
      fadeIn(container);
    } else {
      container.style.opacity = '0';
    }
  });
  containerSquares.forEach(square => {
    const squareDistanceFromTopOfPage = square.getBoundingClientRect().top;
    if (squareDistanceFromTopOfPage < 425 && window.innerWidth > 1000) {
      moveSquares(square);
    } else if (squareDistanceFromTopOfPage < 400 && window.innerWidth < 1000 && window.innerWidth > 700) {
      moveSquares(square);
    } else {
      square.style.opacity = '0';
      square.style.right = '-600px';
    }
  });
}

// on page load and scroll sticky nav container takes hold
// on page load and scroll containers are faded in and out when reaching the distance from the top and according to window width
window.addEventListener('load', () => {
  fixedNav();
  pageContainerActions();
});
window.addEventListener('scroll', () => {
  fixedNav();
  pageContainerActions();
});

// toggles the links menu left and right when clicked
burgerMenu.addEventListener('click', () => {
  document.querySelector('#burger-overlay').classList.toggle('burger-overlay-dim');
  document.querySelector('.nav-links-container').classList.toggle('move-nav-links-on');
  document.querySelector('#burger-bars-1').classList.toggle('burger-bars-remove');
  document.querySelector('#burger-bars-2').classList.toggle('burger-bars-rotate-clockwise');
  document.querySelector('#burger-bars-3').classList.toggle('burger-bars-rotate-counter-clockwise');
  document.querySelector('#burger-bars-4').classList.toggle('burger-bars-remove');
});
