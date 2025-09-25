$(document).ready(function () {
  function slide() {
    var $ul = $("#slide ul");
    var slideWidth = $("#slide").width();

    setInterval(function () {
      $ul.animate({ left: -slideWidth }, 1000, function () {
        $ul.children("li:first").appendTo($ul);
        $ul.css("left", 0);
      });
    }, 3000);

    $(window).resize(function () {
      slideWidth = $("#slide").width();
    });
  }
  slide();

  $(".tab-content").hide();
  $("#notice").show();
  
  $(".tab-menu li").removeClass("active");
  $(".tab-menu li:first").addClass("active");

  $(".tab-menu li a").click(function(e) {
    e.preventDefault();
    var index = $(this).parent().index();
    $(".tab-content").hide().eq(index).show();
    $(".tab-menu li").removeClass("active");
    $(this).parent().addClass("active");
  });

  $("#notice-popup").hide();

  $("#notice li.popup-trigger").on("click", function(e) {
    e.preventDefault();
    $("#notice-popup").fadeIn();
  });

  $("#notice-popup .close-btn").on("click", function() {
    $("#notice-popup").fadeOut();
  });

  $("#notice-popup").on("click", function(e) {
    if (e.target === this) {
      $(this).fadeOut();
    }
  });
});
