$(function(){
      $('figure.responsive').picture();
      $('#mainCarousel').swiperight(function() {$('#mainCarousel').carousel('prev');});
      $('#mainCarousel').swipeleft(function() {$('#mainCarousel').carousel('next');});
      $('a.rmthov').mouseover(function() {
           var elid = $(this).attr('id');
           $('#' + elid + '_el').addClass('hovered');
           }).mouseout(function() {
           var elid = $(this).attr('id');
           $('#' + elid + '_el').removeClass('hovered');
});
         });
   $(window).load(function() {$('#wrapper').animate({opacity:1},800);
$('.animated').removeClass('before').addClass('after');
});
