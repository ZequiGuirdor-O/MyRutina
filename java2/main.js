
$(document).ready(function() {
   $("#bubles").swiperight(function() {
      $(this).carousel('prev');
    });
   $("#bubles").swipeleft(function() {
      $(this).carousel('next');
   });
});
$(".carousel").swipe({

 

});
$('#bubles').on('slide.bs.carousel', function () {
   swipe: function(event, direction, distance, duration, fingerCount, fingerData) {

    if (direction == 'left') $(this).carousel('next');
    if (direction == 'right') $(this).carousel('prev');

  },
  allowPageScroll:"vertical"
})

/*

dependencies:

//cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.6.4/jquery.touchSwipe.min.js
//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js
//cdnjs.cloudflare.com/ajax/libs/jquery.touchswipe/1.6.4/jquery.touchSwipe.min.js

*/