const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('.nav-container');
const scrollPoint = document.getElementById('scroll-point');
const containers = document.querySelectorAll('.container');

function fixedNav() {
  if (document.documentElement.scrollTop > 120 && window.innerWidth > 1300) { // scroll point in pixels to start the fixed position
    nav.style.position = 'fixed';
    nav.style.top = '0';
    document.querySelector('.up-arrow').style.left = '0';
    scrollPoint.style.paddingTop = '80px'; // padding when 0px from the top is hit
  } else if (document.documentElement.scrollTop > 105 && window.innerWidth < 1300 && window.innerWidth > 700) { // range from 1000px to 700px width
    nav.style.position = 'fixed';
    nav.style.top = '0';
    document.querySelector('.up-arrow').style.left = '0';
    scrollPoint.style.paddingTop = '75px'; // padding when 0px from the top is hit
  } else if (document.documentElement.scrollTop > 85 && window.innerWidth < 700 && window.innerWidth > 400) { // range from 1000px to 700px width
    nav.style.position = 'fixed';
    nav.style.top = '0';
    document.querySelector('.up-arrow').style.left = '0';
    scrollPoint.style.paddingTop = '35px'; // padding when 0px from the top is hit
  } else if (document.documentElement.scrollTop > 60 && window.innerWidth < 400) { // range from 1000px to 700px width
    nav.style.position = 'fixed';
    nav.style.top = '0';
    document.querySelector('.up-arrow').style.left = '0';
    scrollPoint.style.paddingTop = '25px'; // padding when 0px from the top is hit
  } else {
    // education.style.opacity = '0';
    // projects.style.opacity = '0';
    nav.style.position = 'relative';
    document.querySelector('.up-arrow').style.left = '-60px';
    scrollPoint.style.paddingTop = '0px'; // padding of the scroll point when at the top of the page
  }
}

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

function fadeIn(container){
  container.style.opacity = '1';
  container.style.transition = 'opacity 750ms ease';
}

window.addEventListener('scroll', () => {
  containers.forEach(container =>{
    const distanceFromTopOfPage = container.getBoundingClientRect().top;
    if(distanceFromTopOfPage < 700){
      fadeIn(container);
    }else{
      container.style.opacity = '0';
    }
  });
});

window.addEventListener('scroll', fixedNav);
// toggles the links menu left and right when clicked
burgerMenu.addEventListener('click', () => {
  document.querySelector('.nav-links-container').classList.toggle('move-nav-links-on');
  document.querySelector('#burger-bars-1').classList.toggle('burger-bars-remove');
  document.querySelector('#burger-bars-2').classList.toggle('burger-bars-rotate-clockwise');
  document.querySelector('#burger-bars-3').classList.toggle('burger-bars-rotate-counter-clockwise');
  document.querySelector('#burger-bars-4').classList.toggle('burger-bars-remove');
});
