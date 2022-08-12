function loadScript() {
  const burgerMenu = document.querySelector('.burger-menu');
  const upArrow = document.querySelector('.up-arrow');
  const navigationLinks = document.querySelectorAll('.navigation-link');

  // show and hide up arrow
  function activateUpArrow() {
    if (document.documentElement.scrollTop > 0) {
      upArrow.style.right = '25px';
    } else {
      upArrow.style.right = '-60px';
    }
  }

  // updates page title with value of navigation links
  function updatePageTitle(link) {
    document.title = link.getAttribute('value');
  }

  navigationLinks.forEach((link) => {
    link.addEventListener('click', () => {
      updatePageTitle(link);
    });
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
  });
}

window.onload = loadScript;
