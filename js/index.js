/*
EVENT CHECKLIST:
[x] click
[x] mouseover
[x] mouseleave
[x] load
[] scroll
[] 
[]
[]
[]
[]
*/

// Selecting the Navigation Anchors
const navAnchorsSelector = document.querySelectorAll("nav.nav a.nav-link");

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
window.addEventListener("load", function () {
  window.alert("Welcome to Fun Bus!");
});

// Fun Bus Image (First Image/Top Image) Selector
const funBusImgSelector = document.querySelector("header.intro img");
