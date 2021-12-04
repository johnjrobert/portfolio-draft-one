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
