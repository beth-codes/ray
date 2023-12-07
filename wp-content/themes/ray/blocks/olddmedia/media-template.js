const { useBlockProps} = wp.blockEditor;
const Edit = (props) => {
   const { attributes, setAttributes } = props;
   const { clientId } = props;
   const { getBlock } = wp.data.select('core/block-editor');
   const block = getBlock(clientId);

   const { src, poster, text} = attributes;
   let { thumbVideos } = attributes;
   if (typeof thumbVideos === 'undefined') {
      thumbVideos = [];
   }
   const onChangeSrc = (newSrc, index) => {
      const updatedThumbVideos = [...thumbVideos];
      updatedThumbVideos[index].src = newSrc;
      setAttributes({ thumbVideos: updatedThumbVideos });

   };
   const onChangePoster = (newPoster, index) => {
      const updatedThumbVideos = [...thumbVideos];
      updatedThumbVideos[index].poster = newPoster;
      setAttributes({ thumbVideos: updatedThumbVideos });
   };
   const onChangeText = (newText, index) => {
      const updatedThumbVideos = [...thumbVideos];
      updatedThumbVideos[index].text = newText;
      setAttributes({ thumbVideos: updatedThumbVideos });
   };

   const blockProps = useBlockProps.save( {
      className: 'pd-block pd-inline media-container',
  } );
   return (
      <section { ...blockProps }>
         <div className="display-con display">
            <div className="full-img">
            <video className="displayed-video" src={src} poster={poster}></video>
               <p className="text">{text}</p> 
            </div>

            <div className="thumb-bar-video">
               {thumbVideos.map((thumbVideo, index) => (
                  <div className="thumb-video-item" key={index}>
                     <input
                        type="text"
                        value={thumbVideo.src}
                        onChange={(event) => onChangeSrc(event.target.value, index)}
                     />
                     <input
                        type="text"
                        value={thumbVideo.poster}
                        onChange={(event) => onChangePoster(event.target.value, index)}
                     />
                     <input
                        type="text"
                        value={thumbVideo.text}
                        onChange={(event) => onChangeText(event.target.value, index)}
                     />
                     <video src={thumbVideo.src} poster={thumbVideo.poster} text={thumbVideo.text}></video>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}

export default Edit;