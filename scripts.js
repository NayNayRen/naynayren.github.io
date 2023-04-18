function loadScript() {
  const burgerMenu = document.querySelector(".burger-menu");
  const upArrow = document.querySelector(".up-arrow");
  const navigationLinks = document.querySelectorAll(".navigation-link");
  const containerHeadings = document.querySelectorAll(".container-heading");
  const containerHeadingUnderlines = document.querySelectorAll(
    ".container-heading-underline"
  );
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

  // highlights nav menu link
  function navigationActions() {
    containerHeadings.forEach((heading) => {
      const windowHeight = window.innerHeight;
      const headingDistanceFromTop = heading.getBoundingClientRect().top;
      if (headingDistanceFromTop < windowHeight * 0.75) {
        navigationLinks.forEach((link) => {
          if (link.getAttribute("value") === heading.innerText) {
            link.classList.replace("purple-text", "green-text");
            link.children[0].classList.add("active");
          } else {
            link.classList.replace("green-text", "purple-text");
            link.children[0].classList.remove("active");
          }
        });
      }
      // was 115
      if (topContainer.getBoundingClientRect().top > 225) {
        navigationLinks.forEach((link) => {
          link.classList.replace("green-text", "purple-text");
          link.children[0].classList.remove("active");
        });
      }
    });
  }

  // shows and hides the heading underline
  function showHideUnderline() {
    containerHeadingUnderlines.forEach((headingUnderline) => {
      const windowHeight = window.innerHeight;
      const underlineDistanceFromTop =
        headingUnderline.getBoundingClientRect().top;
      if (underlineDistanceFromTop < windowHeight * 0.75) {
        headingUnderline.style.width = "100%";
      } else {
        headingUnderline.style.width = "0";
      }
      // was 115
      if (topContainer.getBoundingClientRect().top > 225) {
        headingUnderline.style.width = "0";
      }
    });
  }

  // does the fade in and out of text
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
      .classList.toggle("burger-bars-remove");
    document
      .querySelector("#burger-bars-2")
      .classList.toggle("burger-bars-rotate-clockwise");
    document
      .querySelector("#burger-bars-3")
      .classList.toggle("burger-bars-rotate-counter-clockwise");
  });

  // scroll
  window.addEventListener("scroll", () => {
    activateUpArrow();
    navigationActions();
    showHideUnderline();
    showHideText();
  });
  // resize
  window.addEventListener("resize", () => {
    activateUpArrow();
    navigationActions();
    showHideUnderline();
    showHideText();
  });
  // load
  activateUpArrow();
  navigationActions();
  showHideUnderline();
  showHideText();
}

window.onload = loadScript;
