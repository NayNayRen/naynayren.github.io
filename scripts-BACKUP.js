function loadScript() {
  const burgerMenu = document.querySelector('.burger-menu');
  const upArrow = document.querySelector('.up-arrow');
  const navigationLinks = document.querySelectorAll('.navigation-link');
  const containerHeadings = document.querySelectorAll('.container-heading');
  const topPosition = document.querySelector('#me');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');
  const slide = document.querySelectorAll('.slide');
  let i = 0;

  // show and hide up arrow
  function activateUpArrow() {
    if (document.documentElement.scrollTop > 0) {
      upArrow.style.right = '0';
    } else {
      upArrow.style.right = '-60px';
    }
  }

  // updates page title with value of link clicked
  function updatePageTitle(link) {
    document.title = link.getAttribute('value');
  }

  // displays and hides container heading
  function headingAndNavActions() {
    containerHeadings.forEach((heading) => {
      const middleOfWindow = window.innerHeight * 0.5;
      const headingDistanceFromTop = heading.getBoundingClientRect().top;
      if (headingDistanceFromTop < middleOfWindow) {
        navigationLinks.forEach((link) => {
          if (link.getAttribute('value') === heading.innerText) {
            // updatePageTitle(link);
            link.classList.replace('purple-text', 'green-text');
            link.children[0].classList.add('active');
          } else {
            link.classList.replace('green-text', 'purple-text');
            link.children[0].classList.remove('active');
          }
        });
      }
      if (topPosition.getBoundingClientRect().top > 75) {
        // updatePageTitle(upArrow);
        navigationLinks.forEach((link) => {
          link.classList.replace('green-text', 'purple-text');
          link.children[0].classList.remove('active');
        });
      }
    });
  }

  // upArrow.addEventListener('click', () => {
  //   updatePageTitle(upArrow);
  // });

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
    headingAndNavActions();
  });
  activateUpArrow();
  headingAndNavActions();
}

window.onload = loadScript;
