function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#/", "");
  let homeID = "home";

  if (pageID == "") {
    pageID = homeID;
  } else {
    pageID = pageID;
  }

  MODEL.navToPage(pageID);
}

function hamburgerMenuToggle() {
  $(".hamburger-menu-icon").on("click", () => {
    $(".mobile-nav-menu").toggle();
  });
}

//needs to be redone in jquery.  This is for mobile menu.
const hamburger = document.querySelector(".menu-icon");
const navMenu = document.querySelector(".nav-side-bar");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

//for closing the menu
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

function initListeners() {
  // navClick();
  hamburgerMenuToggle();
  route();
  $(window).on("hashchange", route);
}

//reads page, loads everything to be used.
$(document).ready(() => {
  initListeners();
});
