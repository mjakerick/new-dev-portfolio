$( document ).ready(function() {
  // nav scroll style
  $(window).on('scroll', function(){
    if($(window).scrollTop()){
      $('nav').addClass('black');
    } else {
      $('nav').removeClass('black');
    }
  });

  //smooth scroll
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
