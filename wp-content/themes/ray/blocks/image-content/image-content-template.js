const { useBlockProps, InnerBlocks } = wp.blockEditor;

const Edit = () => {
   const MY_TEMPLATE = [
      ['core/columns', {className: 'image-content-container'},[
         [ 'core/image', { className: 'image-content-img' } ],
        
         ['core/column', {className: 'image-content-content'},[
            ['core/column', {className: 'image-content-content-header'}, [
               [ 'core/heading', { level: 2, placeholder: 'Header', className: 'h2' } ],
               [ 'core/paragraph', {placeholder: 'Subtitle', className: 'subtitle' } ],
            ]],
            ['core/column', {className: 'subtitle'}, [
               [ 'core/paragraph', { placeholder: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eget neque nulla. Phasellus eleifend quam at felis sagittis,' } ],
            ]],
            ['raycore/button']
         ]]
      ]], 
  ];
  const blockProps = useBlockProps.save( {
   className: 'editor-container image-content-section pd-block pd-inline',
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