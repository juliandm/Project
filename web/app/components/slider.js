define(["exports", "plugins/owl.carousel"], function (exports, owl) {

  function showIcons (text) {
    $("#slider").html(text);
  };

  function animateToggleSlider (show, hide) {
    ANIMATING = true;
    var height = $("#sliderContainer").height();

    if (height > 23 && !show){
      height = 22;
      $("#sliderContainer div:first-child button").removeClass("upside fixedToggleButton");
    } else if (height < 100 && !hide) {
      height = 100;
      $("#sliderContainer div:first-child button").addClass("upside fixedToggleButton");
    }
    $("#sliderContainer").animate({
      height: height,
    },500,"easeInOutCubic", function () {
      ANIMATING = false;
    })
  };


  $("#toggleSlider").on("click", function () {
    animateToggleSlider(false, false);
  });

  $("#viewerContainer").on("dblclick", function () {
    animateToggleSlider(false, true);
  });

  var owl = $('.owl-carousel');
  owl.on('mousewheel', '.owl-stage', function (e) {
      if (e.deltaY>0) {
          owl.trigger('next.owl');
      } else {
          owl.trigger('prev.owl');
      }
      e.preventDefault();
  });

  owl.owlCarousel({
     loop:true,
      margin:10,
      nav:false,
      responsive:{
          0:{
              items:3
          },
          600:{
              items:5
          },
          1000:{
              items:10
          }
      }
      });
exports.showIcons = showIcons;
exports.toggleSlider = animateToggleSlider;

});
