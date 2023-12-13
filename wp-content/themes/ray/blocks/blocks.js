import './banner/banner';
import './image-content/image-content';
import './gallery/gallery';
import './img_content_banner/img_content_banner';
import './about/about';
import './courses/courses';
import './content/content';
import './grid-list/grid-list';
import './media/media';
import './podcast/podcast';
import './custom-button';
import './custom-row';
import './custom-about';
import './media/media';
import './contact-content/contact-content';


_.forEach(wp.blocks.getBlockTypes(), function(blockType){
   let blockStyles = wp.data.select('core/blocks').getBlockStyles(blockType.name);
   if(!_.isEmpty(blockStyles)){
       _.forEach(_.pluck(blockStyles, 'name'), function(blockStyle){
               wp.blocks.unregisterBlockStyle(blockType.name, blockStyle);
       });        
   }
 });