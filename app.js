$( document ).ready(function() {

  $(window).on('scroll', function(){
    if($(window).scrollTop()){
      $('nav').addClass('black');
    } else {
      $('nav').removeClass('black');
    }
  });

  //smoothscroll
  $('a[href^="#"]').on('click',function (e) {
    e.preventDefault();
    var target = this.hash,
    $target = $(target);
    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
    }, 500, 'swing', function () {
      window.location.hash = target;
    });
  });


});
