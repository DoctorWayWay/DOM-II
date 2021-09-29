/*
EVENT CHECKLIST:
[x] click
[x] mouseover
[x] mouseleave
[x] load
[x] scroll
[x] keydown
[x] keyup
[x] dbclick
[] select
[] copy
*/

// QUERY SELECTORS
const headerOneSelector = document.querySelector("h1.logo-heading");
const navSelector = document.querySelector("nav.nav");
const bodySelector = document.querySelector("body");
const navAnchorsSelector = document.querySelectorAll("nav.nav a.nav-link");
const funBusImageSelector = document.querySelector("header.intro img");
const headerTwoSelector = document.querySelector("header.intro h2");
const paragraphsSelector = document.querySelectorAll("div.text-content");
// Disabling default operation on Navigation Anchors AND adding "mouseover" event
navAnchorsSelector.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
  });
  link.style.transition = "1s";
  link.addEventListener("mouseover", function (event) {
    if (event.target.style.color !== "red") {
      event.target.style.color = "red";
    }
  });
  link.addEventListener("mouseleave", function (event) {
    if (event.target.style.color === "red") {
      event.target.style.color = "black";
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

//
