$(window).on('scroll', function(){
  if($(window).scrollTop()){
    $('nav').addClass('black');
  } else {
    $('nav').removeClass('black');
  }
})

// var menu = $('.m1');
//
// $(window).scroll(function () {
//     var y = $(this).scrollTop();
//     var z = $('#portfolio').offset().top;
//
//     if (y >= z) {
//         menu.removeClass('active').addClass('not-active');
//     }
//     else{
//         menu.removeClass('light-menu').addClass('menu');
//     }
// });
