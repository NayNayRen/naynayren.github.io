const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('.nav-container');
const scrollPoint = document.getElementById('scroll-point');
const containers = document.querySelectorAll('.container');

// fixed navigation settings for all screens
function fixedNav() {
  // scroll point in pixels to start the fixed position and window width
  if (document.documentElement.scrollTop > 120 && window.innerWidth > 1300) {
    nav.style.position = 'fixed';
    nav.style.top = '0';
    document.querySelector('.up-arrow').style.left = '0';
    scrollPoint.style.paddingTop = '80px';
  } else if (document.documentElement.scrollTop > 105 && window.innerWidth < 1300 && window.innerWidth > 700) {
    nav.style.position = 'fixed';
    nav.style.top = '0';
    document.querySelector('.up-arrow').style.left = '0';
    scrollPoint.style.paddingTop = '75px';
  } else if (document.documentElement.scrollTop > 85 && window.innerWidth < 700 && window.innerWidth > 400) {
    nav.style.position = 'fixed';
    nav.style.top = '0';
    document.querySelector('.up-arrow').style.left = '0';
    scrollPoint.style.paddingTop = '35px';
  } else if (document.documentElement.scrollTop > 60 && window.innerWidth < 400) {
    nav.style.position = 'fixed';
    nav.style.top = '0';
    document.querySelector('.up-arrow').style.left = '0';
    scrollPoint.style.paddingTop = '25px';
  } else {
    nav.style.position = 'relative';
    document.querySelector('.up-arrow').style.left = '-60px';
    scrollPoint.style.paddingTop = '0px';
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
function fadeIn(container) {
  container.style.opacity = '1';
  container.style.transition = 'opacity 750ms ease';
}

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
});
// on page scroll sticky nav container takes hold
window.addEventListener('scroll', fixedNav);
