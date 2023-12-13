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
      <section { ...blockProps }>
         <InnerBlocks
         template={ MY_TEMPLATE }
         templateLock="insert" />
      </section>
   )
}

export default Edit;