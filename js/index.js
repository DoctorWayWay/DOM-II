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
    } else {
      event.target.style.color = "#212529";
    }
  });
});

//
