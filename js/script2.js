const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.getElementById("hamburger-menu");
const searchButton = document.getElementById("search-button");
const searchForm = document.querySelector(".search-form");
const searchBox = document.getElementById("search-box");
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

console.log(sections);
console.log(navLinks);

document.addEventListener("DOMContentLoaded", () => {
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

  // nav-link acktiv

  window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 50; // Adjust for navbar height if needed
      if (scrollY >= sectionTop) {
        currentSection = section.getAttribute("id");
      }
    });

    console.log(currentSection);

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href").substring(1) === currentSection) {
        link.classList.add("active");
      }
    });
  });
});
