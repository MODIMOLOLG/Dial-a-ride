function changeCss() {
    var navElement = document.querySelector("nav");
    if (this.scrollY > 0) {
        navElement.style.boxShadow = "0 0 1rem rgba(0, 0, 0, 0.3)";
    } else {
        navElement.style.boxShadow = "none";
    }
}

window.addEventListener("scroll", changeCss, false);