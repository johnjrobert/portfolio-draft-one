function route() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#/", "");
  let homeID = "home";

  if (pageID == "") {
    pageID = homeID;
  } else {
    pageID = pageID;
  }

  navChangeColor(pageID);
  MODEL.navToPage(pageID);
}

function navChangeColor(pageID) {
  if (pageID == "home") {
    $(".bar").css("background-color", "#df8601");
    $(".nav-rb-logo").css("fill", "#df8601");
    $(".home-icon").css("background-color", "#df8601");
    $(".nav-mobile-menu").css("background-color", "#381d2a");
  } else if (pageID == "about") {
    $(".bar").css("background-color", "#9bc4bc");
    $(".nav-rb-logo").css("fill", "#9bc4bc");
    $(".home-icon").css("background-color", "#9bc4bc");
    $(".nav-mobile-menu").css("background-color", "#006e90");
  } else if (pageID == "contact") {
    $(".bar").css("background-color", "#381d2a");
    $(".nav-rb-logo").css("fill", "#381d2a");
    $(".home-icon").css("background-color", "#381d2a");
    $(".nav-mobile-menu").css("background-color", "#6baa75");
  } else if (pageID == "work") {
    $(".bar").css("background-color", "#006e90");
    $(".nav-rb-logo").css("fill", "#006e90");
    $(".home-icon").css("background-color", "#006e90");
    $(".nav-mobile-menu").css("background-color", "#df8601");
  }
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
