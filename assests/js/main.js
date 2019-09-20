$(document).ready(function(){

  // Animations
  $(".js--wp-4").waypoint(function(direction){
    $(".js--wp-4").addClass('animated slideInLeft');
  },{
    offset:'50%;'
  });
  $(".js--wp-5").waypoint(function(direction){
    $(".js--wp-5").addClass('animated slideInRight');
  },{
    offset:'50%;'
  });
  $(".js--wp-6").waypoint(function(direction){
    $(".js--wp-6").addClass('animated pulse');
  },{
    offset:'50%;'
  });
  $(".js--wp-7").waypoint(function(direction){
    $(".js--wp-7").addClass('animated flipInY');
  },{
    offset:'90%;'
  });
  $(".js--wp-8").waypoint(function(direction){
    $(".js--wp-8").addClass('animated fadeInUp');
  },{
    offset:'75%;'
  });

  /* Mobile navigation*/
    $('.js-nav-icon').on("click", function(){
      var nav = $(".main-nav");
      var icon = $(".js-nav-icon i");

      nav.slideToggle(200);
      if (icon.hasClass('ion-navicon-round')){
        icon.addClass('ion-close-round');
        icon.removeClass('ion-navicon-round');
      } else {
        icon.addClass('ion-navicon-round');
        icon.removeClass('ion-close-round');
      }

    });

  /* Button nav scroll */
    $(".js--scroll-to-start").click(function(){
      $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });

    $(".js--scroll-to-home").click(function(){
      $('html, body').animate({scrollTop: $('.top').offset().top}, 1000);
    });

    $(".js--scroll-to-map").click(function(){
      $('html, body').animate({scrollTop: $('.js--section-map').offset().top}, 1000);
    });


var $window = $(window); //You forgot this line in the above example

$('section[data-type="background"]').each(function(){
var $bgobj = $(this); // assigning the object
$(window).scroll(function() {
var yPos = -($window.scrollTop() / $bgobj.data('speed'));
// Put together our final background position
var coords = '50% '+ yPos + 'px';
// Move the background
$bgobj.css({ backgroundPosition: coords });
});
});
});

// MAP
function initMap() {
  var location = {lat: 53.716079, lng: -6.356651};
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16,
    center: location
  });
  var marker = new google.maps.Marker({
    position:{lat: 53.716079, lng: -6.356651},
    map:map,
    icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
  });
}


//Slideshow

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
