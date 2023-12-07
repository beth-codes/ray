const { useBlockProps, InnerBlocks } = wp.blockEditor;

const Edit = () => {
   const MY_TEMPLATE = [
      ['core/columns', {className: 'img-content-banner-content'},[
         ['core/column', {className: 'img-content-banner-header'},[
            [ 'core/heading', {level: 1, placeholder: 'Dr. Ray Lutzky' } ],
         ]],
         [ 'core/image', { className: 'img-content-banner-image' } ],
      ]], 
  ];
   const blockProps = useBlockProps.save( {
      className: 'pd-block pd-inline img-content-banner-container',
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