function loadScript() {
  const burgerMenu = document.querySelector(".burger-menu");
  const upArrow = document.querySelector(".up-arrow");
  const navigationLinks = document.querySelectorAll(".navigation-link");
  const containerHeadings = document.querySelectorAll(".container-heading");
  const fadingText = document.querySelectorAll(".fading-text");
  const topContainer = document.querySelector("#me");
  const nextBtn = document.querySelector(".next");
  const prevBtn = document.querySelector(".prev");
  const slide = document.querySelectorAll(".slide");
  let i = 0;

  // show and hide up arrow
  function activateUpArrow() {
    if (document.documentElement.scrollTop > 0) {
      upArrow.style.right = "0";
    } else {
      upArrow.style.right = "-60px";
    }
  }

  // displays and hides container heading and highlights nav menu
  function headingAndNavActions() {
    containerHeadings.forEach((heading) => {
      const windowHeight = window.innerHeight;
      const headingDistanceFromTop = heading.getBoundingClientRect().top;
      if (headingDistanceFromTop < windowHeight * 0.5) {
        navigationLinks.forEach((link) => {
          if (link.getAttribute("value") === heading.innerText) {
            // updatePageTitle(link);
            link.classList.replace("purple-text", "green-text");
            link.children[0].classList.add("active");
          } else {
            link.classList.replace("green-text", "purple-text");
            link.children[0].classList.remove("active");
          }
        });
        // heading.classList.replace("red-text", "green-text");
        // heading.style.borderColor = '#4be574';
      } else {
        // heading.classList.replace("green-text", "red-text");
        // heading.style.borderColor = '#fff';
      }
      if (topContainer.getBoundingClientRect().top > 115) {
        // updatePageTitle(upArrow);
        // heading.classList.replace("green-text", "red-text");
        // heading.style.borderColor = '#fff';
        navigationLinks.forEach((link) => {
          link.classList.replace("green-text", "purple-text");
          link.children[0].classList.remove("active");
        });
      }
    });
  }

  function showHideText() {
    fadingText.forEach((text) => {
      const windowHeight = window.innerHeight;
      const textDistanceFromTop = text.getBoundingClientRect().top;
      if (textDistanceFromTop < windowHeight * 0.75) {
        text.style.opacity = "1";
      } else {
        text.style.opacity = "0";
      }
    });
  }

  // project previous button
  prevBtn.addEventListener("click", () => {
    slide[i].classList.remove("current");
    i--;
    if (i < 0) {
      i = slide.length - 1;
    }
    slide[i].classList.add("current");
  });

  // project next button
  nextBtn.addEventListener("click", () => {
    slide[i].classList.remove("current");
    i++;
    if (i >= slide.length) {
      i = 0;
    }
    slide[i].classList.add("current");
  });

  // mobile burger menu actions
  burgerMenu.addEventListener("click", () => {
    document
      .querySelector("#burger-overlay")
      .classList.toggle("burger-overlay-dim");
    document
      .querySelector(".navigation-links-container")
      .classList.toggle("show-navigation-links");
    document
      .querySelector("#burger-bars-1")
      .classList.toggle("burger-bars-rotate-clockwise");
    document
      .querySelector("#burger-bars-2")
      .classList.toggle("burger-bars-remove");
    document
      .querySelector("#burger-bars-3")
      .classList.toggle("burger-bars-rotate-counter-clockwise");
  });

  window.addEventListener("scroll", () => {
    activateUpArrow();
    headingAndNavActions();
    showHideText();
  });
  activateUpArrow();
  headingAndNavActions();
  showHideText();
}

window.onload = loadScript;
