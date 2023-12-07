// import '../css/main.scss';
import '../css/main.scss';
import '/blocks/front.js';
// import '/blocks/blocks.js';

// const {registerBlockStyle, unregisterBlockStyle } = wp.blocks; 
// wp.domReady( () => {
// _.forEach(wp.blocks.getBlockTypes(), function(blockType){
//    let blockStyles = wp.data.select('core/blocks').getBlockStyles(blockType.name);
//    if(!_.isEmpty(blockStyles)){
//        _.forEach(_.pluck(blockStyles, 'name'), function(blockStyle){
//                wp.blocks.unregisterBlockStyle(blockType.name, blockStyle);
//        });        
//    }
//  });
// })
(function($){
$(document).ready(function(){
   $(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll > 200) {
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

