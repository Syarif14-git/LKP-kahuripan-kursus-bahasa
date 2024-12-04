const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.getElementById("hamburger-menu");
const searchButton = document.getElementById("search-button");
const searchForm = document.querySelector(".search-form");
const searchBox = document.getElementById("search-box");

// ketika icon hamburger di click
document.getElementById("hamburger-menu").onclick = (e) => {
  e.preventDefault();
  navbarNav.classList.toggle("active");
};

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!searchForm.contains(e.target) && !searchButton.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});

searchButton.onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};
