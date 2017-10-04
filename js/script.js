$(document).ready(function(){
  // Primary Navigtion Menu
  $('#main-nav').on('click', function(e){
    e.preventDefault();
    $('.nav-collapse').toggleClass('nav-is-collapsed');
  });


  $(window).scroll(function(){
    var viewport_width = $(window).width();

    if ($(document).scrollTop() > 120 && viewport_width > 991) {
      $('.primary-nav').addClass('primary-nav-fixed');
    } else {
      $('.primary-nav').removeClass('primary-nav-fixed');
    }
  });


  wow = new WOW(
      {
        animateClass: 'animated',
        offset:       70,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
  
});
