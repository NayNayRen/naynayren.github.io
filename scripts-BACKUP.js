function loadScript() {
  const burgerMenu = document.querySelector('.burger-menu');
  const upArrow = document.querySelector('.up-arrow');
  const navigationLinks = document.querySelectorAll('.navigation-link');
  const navigationLinkActive = document.querySelectorAll(
    '.navigation-link-dot'
  );
  const containerHeadings = document.querySelectorAll('.container-heading');

  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');
  const slide = document.querySelectorAll('.slide');
  let i = 0;

  // show and hide up arrow
  function activateUpArrow() {
    if (document.documentElement.scrollTop > 0) {
      upArrow.style.right = '15px';
    } else {
      upArrow.style.right = '-60px';
    }
  }

  // updates page title with value of link clicked
  function updatePageTitle(link) {
    document.title = link.getAttribute('value');
  }

  // displays and hides container heading
  function showHideHeading() {
    containerHeadings.forEach((heading) => {
      const headingDistanceFromTop = heading.getBoundingClientRect().top;
      if (headingDistanceFromTop < 700 && window.innerWidth > 1000) {
        heading.style.opacity = 1;
      } else if (
        headingDistanceFromTop < 650 &&
        window.innerWidth < 1000 &&
        window.innerWidth > 700
      ) {
        heading.style.opacity = 1;
      } else if (
        headingDistanceFromTop < 575 &&
        window.innerWidth < 700 &&
        window.innerWidth > 400
      ) {
        heading.style.opacity = 1;
      } else if (headingDistanceFromTop < 475 && window.innerWidth < 400) {
        heading.style.opacity = 1;
      } else {
        heading.style.opacity = 0;
      }
    });
  }

  // updates page title using nav links
  navigationLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navigationLinkActive.forEach((activeLink) => {
        activeLink.classList.remove('active');
      });
      link.children[0].classList.add('active');
      updatePageTitle(link);
    });
  });

  // project previous button
  prevBtn.addEventListener('click', () => {
    slide[i].classList.remove('current');
    i--;
    if (i < 0) {
      i = slide.length - 1;
    }
    slide[i].classList.add('current');
  });

  // project next button
  nextBtn.addEventListener('click', () => {
    slide[i].classList.remove('current');
    i++;
    if (i >= slide.length) {
      i = 0;
    }
    slide[i].classList.add('current');
  });

  // updates page title with up arrow
  upArrow.addEventListener('click', () => {
    navigationLinkActive.forEach((activeLink) => {
      activeLink.classList.remove('active');
    });
    updatePageTitle(upArrow);
  });

  // mobile burger menu actions
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
    activateUpArrow();
    showHideHeading();
  });
  activateUpArrow();
  showHideHeading();
}

window.onload = loadScript;
