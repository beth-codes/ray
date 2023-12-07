const { useBlockProps, InnerBlocks } = wp.blockEditor;

const Edit = () => {
   const MY_TEMPLATE = [
      ['core/columns', {className: 'gallery-container'},[
         [ 'core/image', { className: 'gallery-img' } ],
         [ 'core/image', { className: 'gallery-img' } ],
         [ 'core/image', { className: 'gallery-img' } ],
      ]], 
  ];
  const blockProps = useBlockProps.save( {
   className: 'gallery-section pd-block',
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