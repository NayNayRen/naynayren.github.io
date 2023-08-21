function loadHeaderAndArrow() {
    const upArrow = document.querySelector(".up-arrow");
    const headerTitleContainer = document.querySelector(".header-title-container");

    // show and hide up arrow
    function activateUpArrow() {
        if (document.documentElement.scrollTop > 0) {
            if (window.innerWidth <= 700) {
                upArrow.style.right = "5px";
            } else {
                upArrow.style.right = "10px";
            }
        } else {
            upArrow.style.right = "-60px";
        }
    }

    // fades header title in on page load
    function showHeaderText() {
        headerTitleContainer.style.top = "10px";
        headerTitleContainer.style.opacity = "1";
    }

    // scroll
    window.addEventListener("scroll", () => {
        activateUpArrow();
    });

    // resize
    window.addEventListener("resize", () => {
        activateUpArrow();
    });

    // load
    activateUpArrow();
    // waits 1.5 seconds after page load to fire 
    setTimeout(() => {
        showHeaderText();
    }, 750);
}

// window.onload = loadHeaderAndArrow;
window.addEventListener('load', () => {
    loadHeaderAndArrow();
});