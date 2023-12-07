const { useBlockProps, InnerBlocks } = wp.blockEditor;

const Edit = () => {
   const MY_TEMPLATE = [
      ['core/columns', {className: 'test-content display-con display'},[
         ['core/column', {className: 'full-img'},[
            ['core/video', { className: 'displayed-video' } ],
            ['core/paragraph', {className: 'text', placeholder: 'Loreum Ipsum'}],
            ['core/column', {className: 'overlay'}],
         ]],
         ['core/column', {className: 'thumb-bar-video'},[
            ['core/column', {className: 'thumb-container'}, [
               [ 'core/video', { className:'thumb-video-item' } ],
               [ 'core/paragraph', { className:'texts', placeholder: 'Enter Video Title' } ],
            ]],
            ['core/column', {className: 'thumb-container'}, [
               [ 'core/video', { className:'thumb-video-item' } ],
               [ 'core/paragraph', { className:'texts', placeholder: 'Enter Video Title' } ],
            ]],
            ['core/column', {className: 'thumb-container'}, [
               [ 'core/video', { className:'thumb-video-item' } ],
               [ 'core/paragraph', { className:'texts', placeholder: 'Enter Video Title' } ],
            ]],
            ['core/column', {className: 'thumb-container'}, [
               [ 'core/video', { className:'thumb-video-item' } ],
               [ 'core/paragraph', { className:'texts', placeholder: 'Enter Video Title' } ],
            ]],
         ]]
      ]], 
  ];
   const blockProps = useBlockProps.save( {
      className: 'pd-block pd-inline media-container',
   } );  
   return (
      <div { ...blockProps }>
         <InnerBlocks
         template={ MY_TEMPLATE }
         templateLock="all" />
      </div>
   )
}

export default Edit;