$(document).ready(function () {
    for (var i = 1; i <= $(".slider__slide").length; i++) {
      $(".slider__indicators").append(
        '<div class="slider__indicator" data-slide="' + i + '"></div>'
      );
    }
    setTimeout(function () {
      $(".slider__wrap").addClass("slider__wrap--hacked");
    }, 1000);
  });

  
  
  function goToSlide(number) {
    $(".slider__slide").removeClass("slider__slide--active");
    $(".slider__slide[data-slide=" + number + "]").addClass(
      "slider__slide--active"
    );
  }
  
  $(".slider__next, .go-to-next").on("click", function () {
    var currentSlide = Number($(".slider__slide--active").data("slide"));
    var totalSlides = $(".slider__slide").length;
    currentSlide++;
    if (currentSlide > totalSlides) {
      currentSlide = 1;
    }
    goToSlide(currentSlide);
  });

//   cars slide
$(document).ready(function () {
    for (var i = 1; i <= $(".slider__slide01").length; i++) {
      $(".slider__indicators01").append(
        '<div class="slider__indicators01" data-slide=' + i + '"></div>'
      );
    }
    setTimeout(function () {
      $(".slider__wrap01").addClass("slider__wrap--hacked01");
    }, 1000);
  });
  
  function goToSlides(number) {
    $(".slider__slide01").removeClass("slider__slide--active01");
    $(".slider__slide01[data-slide=" + number + "]").addClass(
      "slider__slide--active01"
    );
  }
  
  $(".slider__next01, .go-to-next01").on("click", function () {
    var currentSlide = Number($(".slider__slide--active01").data("slide"));
    var totalSlides = $(".slider__slide01").length;
    currentSlide++;
    if (currentSlide > totalSlides) {
      currentSlide = 1;
    }
    goToSlides(currentSlide);
  });

var check=document.getElementsByClassName('.go-to-next01');
console.log(check);
