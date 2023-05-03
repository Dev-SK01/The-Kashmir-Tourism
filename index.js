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
  
  $(".slider__next, .next").on("click", function () {
    var currentSlide = Number($(".slider__slide--active").data("slide"));
    var totalSlides = $(".slider__slide").length;
    currentSlide++;
    if (currentSlide > totalSlides) {
      currentSlide = 1;
    }
    goToSlide(currentSlide);
  });
// previous slider js
$(".slider__next, .prev").on("click", function () {
  var currentSlide = Number($(".slider__slide--active").data("slide"));
  var totalSlides = $(".slider__slide").length;
  currentSlide--;
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
  
  $(".slider__next01, .next01").on("click", function () {
    var currentSlide = Number($(".slider__slide--active01").data("slide"));
    var totalSlides = $(".slider__slide01").length;
    currentSlide++;
    if (currentSlide > totalSlides) {
      currentSlide = 1;
    }
    goToSlides(currentSlide);
  });
// previos
$(".slider__next01, .prev01").on("click", function () {
  var currentSlide = Number($(".slider__slide--active01").data("slide"));
  var totalSlides = $(".slider__slide01").length;
  currentSlide--;
  if (currentSlide > totalSlides) {
    currentSlide = 1;
  }
  goToSlides(currentSlide);
});

var check=document.getElementsByClassName('.go-to-next01');
console.log(check);
   console.log("The Kashmir Tourism");
   document.addEventListener("contextmenu", (event) => {
            event.preventDefault();
        });
  // date update js code //
  const date=new Date();
  const year=date.getFullYear();
  console.log(year);
  // document.getElementById('year').innerHTML = year+1;
   var update =document.getElementById('year').innerHTML=year;
  // end of the year update //

