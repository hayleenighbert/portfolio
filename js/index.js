(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$('.main-gallery').flickity({
  // options
  cellAlign: 'left',
  contain: true
});
