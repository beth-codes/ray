import './test/test';
import './banner/banner';
import './image-content/image-content';
import './gallery/gallery';
import './img_content_banner/img_content_banner';
import './about/about';
import './courses/courses';
import './content/content';
// import './content/content.scss';
// import './courses/courses.scss';
import './grid-list/grid-list';
// import './grid-list/grid-list.scss';
// import './about/about.scss';
// import './img_content_banner/img_content_banner.scss';
// import './post-carousel/post-carousel';
import './media/media';
import './podcast/podcast';
import './custom-button';
import './media/media';
// import './podcast/podcast.scss';
// import './media/media.scss';
// import './gallery/gallery.scss';
// import './image-content/image-content.scss';
// import './test/test.scss';
// import './banner/banner.scss';


// /Users/admin/Downloads/RAY/wp-content/themes/ray/src/css/utilities/_utilities.scss

// @import '../../src/css/utilities/utilities';




_.forEach(wp.blocks.getBlockTypes(), function(blockType){
   let blockStyles = wp.data.select('core/blocks').getBlockStyles(blockType.name);
   if(!_.isEmpty(blockStyles)){
       _.forEach(_.pluck(blockStyles, 'name'), function(blockStyle){
               wp.blocks.unregisterBlockStyle(blockType.name, blockStyle);
       });        
   }
 });