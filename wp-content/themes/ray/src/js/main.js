import '../css/main.scss';
import '/blocks/front.js';

//menu
(function($){
$(document).ready(function(){
   $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 100) {
        $(".site-header").css("background" , "#fff");
      }
 
      else{
         $(".site-header").css("background" , "transparent");  	
      }
   })
 })

 $('.js-nav-toggle').click(function(e) {
    e.preventDefault();
    $('.js-nav-toggle').toggleClass('active');
    $('.js-menu-toggle, html, body, header').toggleClass('menu-open');
});

})(jQuery)

