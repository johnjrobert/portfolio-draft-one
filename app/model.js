var MODEL = (function () {
  var _navToPage = function (pageName) {
    $.get(`pages/${pageName}/${pageName}.html`, (data) => {
      console.log(data);
      $(".mobile-nav-menu").css("display", "none");
      $("#app").html(data);
    });
  };

  return {
    navToPage: _navToPage,
  };
})();
