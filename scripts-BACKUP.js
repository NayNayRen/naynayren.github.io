function loadScript() {
  const burgerMenu = document.querySelector('.burger-menu');
  const upArrow = document.querySelector('.up-arrow');

  function activateUpArrow() {
    if (document.documentElement.scrollTop > 0) {
      upArrow.style.left = '5px';
    } else {
      upArrow.style.left = '-60px';
    }
  }

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
