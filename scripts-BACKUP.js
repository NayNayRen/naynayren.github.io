function loadScript() {
  const burgerMenu = document.querySelector('.burger-menu');
  const upArrow = document.querySelector('.up-arrow');
  const navigationLinks = document.querySelectorAll('.navigation-link');
  const navigationLinkActive = document.querySelectorAll(
    '.navigation-link-dot'
  );

  // show and hide up arrow
  function activateUpArrow() {
    if (document.documentElement.scrollTop > 0) {
      upArrow.style.right = '25px';
    } else {
      upArrow.style.right = '-60px';
    }
  }

  // updates page title with value of link clicked
  function updatePageTitle(link) {
    document.title = link.getAttribute('value');
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
  });
}

window.onload = loadScript;
