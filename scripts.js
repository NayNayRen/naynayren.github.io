const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('.nav-container');
const scrollPoint = document.getElementById('scroll-point');
const containers = document.querySelectorAll('.container');
const education = document.querySelector('.education');
const containerSquares = document.querySelectorAll('.container-square');

// fixed navigation settings for all screens
function fixedNav() {
  // scroll point in pixels to start the fixed position and window width
  if (document.documentElement.scrollTop > 120 && window.innerWidth > 1300) {
    nav.style.position = 'fixed';
    nav.style.top = '0';
    scrollPoint.style.paddingTop = '80px';
    document.querySelector('.up-arrow').style.left = '0';
  } else if (document.documentElement.scrollTop > 105 && window.innerWidth < 1300 && window.innerWidth > 700) {
    nav.style.position = 'fixed';
    nav.style.top = '0';
    scrollPoint.style.paddingTop = '75px';
    document.querySelector('.up-arrow').style.left = '0';
  } else if (document.documentElement.scrollTop > 85 && window.innerWidth < 700 && window.innerWidth > 400) {
    nav.style.position = 'fixed';
    nav.style.top = '0';
    scrollPoint.style.paddingTop = '35px';
    document.querySelector('.up-arrow').style.left = '0';
  } else if (document.documentElement.scrollTop > 60 && window.innerWidth < 400) {
    nav.style.position = 'fixed';
    nav.style.top = '0';
    scrollPoint.style.paddingTop = '25px';
    document.querySelector('.up-arrow').style.left = '0';
  } else {
    nav.style.position = 'relative';
    scrollPoint.style.paddingTop = '0px';
    document.querySelector('.up-arrow').style.left = '-60px';
  }
}

// read more buttons for each project in the projects section
function readMore(project) {
  let dots = document.querySelector(`.project-photo-container[data-project="${project}"] .dots`);
  let moreText = document.querySelector(`.project-photo-container[data-project="${project}"] .more`);
  let readButton = document.querySelector(`.project-photo-container[data-project="${project}"] .read-button`);

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    readButton.textContent = "Read More";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    readButton.textContent = "Read Less";
    moreText.style.display = "inline";
  }
}

// fades each container for the scroll effect
function fadeIn(element) {
  element.style.opacity = '1';
  element.style.transition = 'opacity 750ms ease-in';
}
// fades each square for the scroll effect
function moveSquares(element) {
  element.style.right = '-100px';
  element.style.transition = 'right 650ms ease-out';
}

// on page scroll sticky nav container takes hold
window.addEventListener('scroll', fixedNav);
// toggles the links menu left and right when clicked
burgerMenu.addEventListener('click', () => {
  document.querySelector('.nav-links-container').classList.toggle('move-nav-links-on');
  document.querySelector('#burger-bars-1').classList.toggle('burger-bars-remove');
  document.querySelector('#burger-bars-2').classList.toggle('burger-bars-rotate-clockwise');
  document.querySelector('#burger-bars-3').classList.toggle('burger-bars-rotate-counter-clockwise');
  document.querySelector('#burger-bars-4').classList.toggle('burger-bars-remove');
});
// on page scroll containers are faded in and out when reaching the distance from the top and according to window width
window.addEventListener('scroll', () => {
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
      square.style.right = '-1000px';
    }
  });
});
// on page load, checks to see where education container is according to page top, and adds opacity
window.addEventListener('load', () => {
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
      square.style.right = '-1000px';
    }
  });
});
