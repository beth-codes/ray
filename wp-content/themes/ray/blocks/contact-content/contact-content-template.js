const { useBlockProps, InnerBlocks } = wp.blockEditor;

const Edit = () => {
   const MY_TEMPLATE = [
      ['core/column', {className: 'contact-content-container'},[
         [ 'core/paragraph', { className: 'form-container', placeholder: 'Form ID'} ],
      ]], 
  ];
  const blockProps = useBlockProps.save( {
   className: ' contact-content-section pd-block pd-inline',
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