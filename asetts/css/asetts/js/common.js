$(document).ready(function () {
  //--------------------
  //fvスライダー
  //--------------------
  $(".slider").slick({
    arrows: false,
    // dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 2000,
    fade: true,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
  });

  //--------------------
  //ハンバーガーメニュー
  //--------------------
  $(".bars,.gnav a").on("click", function () {
    $(".bar").toggleClass("active");
    $(".gnav").toggleClass("active");
    $("html").toggleClass("noscroll");
  });

  $('a[href^="#"]').click(function () {
    var speed = 500;
    var url = $(this).attr("href");
    var target = $(url == "#" || url == "" ? "html" : url);
    var position = target.offset().top;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });

  //--------------------
  //ヘッダーナビ追従
  //--------------------
  var win = $(window);
  var fv = $(".top-fv");
  var fvHeight = fv.outerHeight();

  win.on("load scroll", function () {
    var value = win.scrollTop();
    if (win.width() > 768) {
      if (value > fvHeight) {
        $(".header").addClass("fixed");
      } else {
        $(".header").removeClass("fixed");
      }
    }
  });
});
