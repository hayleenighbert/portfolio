(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


// (function(){

//   var parallax = document.querySelectorAll(".parallax"),
//       speed = 0.5;

//   window.onscroll = function(){
//     [].slice.call(parallax).forEach(function(el,i){

//       var windowYOffset = window.pageYOffset,
//           elBackgrounPos = "50% " + (windowYOffset * speed) + "px";

//       el.style.backgroundPosition = elBackgrounPos;

//     });
//   };

// })();