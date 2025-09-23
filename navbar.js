/*
 * When user scrolls down, hide navbar
 * When user scrolls up, show the navbar
 */

var prevScrollpos = 0
// console.log("Prev scroll: " + prevScrollpos);
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    // console.log("Current scroll: " + currentScrollPos);

    if (currentScrollPos < prevScrollpos) {
        // scrolling down
        document.querySelector(".nav").classList.add("showing");
    } else {
        // scrolling up
        // document.querySelector(".nav").style.display = "none";
        document.querySelector(".nav").classList.remove("showing");
    }
    prevScrollpos = currentScrollPos;
}