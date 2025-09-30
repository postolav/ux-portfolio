/*
 * When user scrolls down, hide navbar
 * When user scrolls up, show the navbar
 */

var prevScrollpos = 0
// console.log("Prev scroll: " + prevScrollpos);
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    var element = document.querySelector(".nav");
    // console.log("Current scroll: " + currentScrollPos);

    if (currentScrollPos < prevScrollpos) {
        // scrolling down
        element.style.top = "0";
    } else {
        // scrolling up
        element.style.top = "-110px";
    }
    prevScrollpos = currentScrollPos;
}