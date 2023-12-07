const { useBlockProps} = wp.blockEditor;
const { registerBlockType } = wp.blocks;
import Edit from "./media-template";

const BLOCKNAME = "media";
const BLOCKPATH = `raycore/${BLOCKNAME}`;

registerBlockType(BLOCKPATH, {
   apiVersion: 3,
   title: 'Video Block',
   icon: 'video-alt3',
   category: 'blocks-core',
   attributes: {
      src: {
         type: 'string',
         default: 'https://www.shutterstock.com/shutterstock/videos/1107153157/preview/stock-footage-square-purple-neon-loop-fps-full-hd-mp-video.webm',
      },
      poster: {
         type: 'string',
      },
      text: {
         type: 'string',
         source: 'html',
         selector: 'p',
         default: 'Lorem ipsum',
      },
      thumbVideos: {
         type: 'array',
         source: 'html',
         selector: 'video',
         default: [
            { src: 'https://www.shutterstock.com/shutterstock/videos/1107153157/preview/stock-footage-square-purple-neon-loop-fps-full-hd-mp-video.webm', poster: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217', text: 'Image 1' },
            { src: 'https://www.shutterstock.com/shutterstock/videos/31881958/preview/stock-footage-reality-of-the-modern-economic-system-the-more-you-earn-the-more-you-spend-and-pay-taxes-but-the.webm', poster: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Elephants_Dream_s5_both.jpg', text: 'Image 2' },
            { src: 'https://www.shutterstock.com/shutterstock/videos/1107591313/preview/stock-footage-countdown-k-animation-movie-sec-old-film-motif.webm', poster: 'https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217', text: 'Image 3' },
            { src: 'https://www.shutterstock.com/shutterstock/videos/1104715223/preview/stock-footage-blooming-love-elevate-wedding-gates-with-animated-flower-icons-transform-your-designs-into-floral.webm', poster: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Elephants_Dream_s5_both.jpg', text: 'Image 2' },
            
         ],
      },

   },

   edit: Edit,

   save: ({ attributes }) => {
      const { src, poster, text, thumbVideos} = attributes;
      const blockProps = useBlockProps.save( {
         className: 'pd-block pd-inline media-container',
     } );
      return (
         <section { ...blockProps }>
            <div className="display-con display">
               <div className="full-img" >
                  <video className="displayed-video" controls src={src} poster={poster}></video>
                  <p className="text">{text}</p> 
                  <div className="overlay"></div> 
               </div>
               <div className="thumb-bar-video">
                  {thumbVideos.map((thumbVideo, index) => (
                     <div className="thumb-video-item" key={index}>
                        <video src={thumbVideo.src} poster={thumbVideo.poster} text={thumbVideo.text}></video>
                     </div>
                  ))}
               </div>
            </div>
         </section>
      );
   },

});