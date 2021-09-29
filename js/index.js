/*
EVENT CHECKLIST:
[x] 1 click
[x] 2 mouseover
[x] 3 mouseleave
[x] 4 load
[x] 5 scroll
[x] 6 keydown
[x] 7 keyup
[x] 8 dbclick
[x] 9 cut
[x] 10 copy
[x] 11 pointerenter
[ ] 12 pointerleave
*/

// QUERY SELECTORS
const headerOneSelector = document.querySelector("h1.logo-heading");
const navSelector = document.querySelector("nav.nav");
const bodySelector = document.querySelector("body");
const navAnchorsSelector = document.querySelectorAll("nav.nav a.nav-link");
const funBusImageSelector = document.querySelector("header.intro img");
const headerTwoSelector = document.querySelector("header.intro h2");
const paragraphsSelector = document.querySelectorAll("p");

// Disabling default operation on Navigation Anchors AND adding "mouseover" & "mouseleave" event
navAnchorsSelector.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
  });
  link.style.transition = "1s";
  link.addEventListener("mouseover", function (event) {
    if (event.target.style.color !== "red") {
      event.target.style.color = "red";
      event.preventDefault();
    }
  });
  link.addEventListener("mouseleave", function (event) {
    if (event.target.style.color === "red") {
      event.target.style.color = "black";
      event.preventDefault();
    }
  });
});

// When window is loaded, alert the user with a welcome!
window.addEventListener("load", function (event) {
  window.alert("Welcome to Fun Bus!");
  event.stopPropagation();
});

// Header Section h2 background color turns "red"
document.addEventListener("scroll", function (event) {
  headerTwoSelector.style.backgroundColor = "red";
  event.stopPropagation();
});

// Styling Bus Image w/ "keydown" and "keyup"
funBusImageSelector.style.transition = "3s";
document.addEventListener("keydown", function (event) {
  funBusImageSelector.style.border = "20px solid cyan";
  event.stopPropagation();
});

document.addEventListener("keyup", function (event) {
  funBusImageSelector.style.border = "";
  event.stopPropagation();
});

// Double clicking the body turns the nav bar purple
function turnNavPurple() {
  navSelector.style.backgroundColor = "purple";
}
bodySelector.addEventListener("dblclick", turnNavPurple);

// Copying h1 alerts user that "Stop trying to copy me!"
headerOneSelector.addEventListener("copy", (event) => {
  window.alert("Stop trying to copy me!");
  event.preventDefault();
});

// Cutting h1 alerts user that "You can't cut me!"
headerOneSelector.addEventListener("cut", (event) => {
  window.alert("You can't cut me!");
  event.preventDefault();
});

// When the user's pointer enters a paragraph, change the paragraphs color to red.
// When pointer leaves, turn paragraphs color to black.
// Transitions will take 1s
paragraphsSelector.forEach((paragraph) => {
  paragraph.style.transition = "1s";
  paragraph.addEventListener("pointerenter", (event) => {
    event.target.style.color = "red";
    event.preventDefault();
  });
  paragraph.addEventListener("pointerleave", (event) => {
    event.target.style.color = "black";
    event.preventDefault();
  });
});
