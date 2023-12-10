const { useBlockProps, InnerBlocks } = wp.blockEditor;

const Edit = () => {
   const MY_TEMPLATE = [
   
      ['core/columns', {className: 'content-container'},[
         ['core/column', {className: 'content-header'},[
            [ 'core/heading', { level: 2, placeholder: 'Heading', className: 'h2' } ],
            ['core/column', {className: 'content-text'},[
               [ 'core/paragraph', { placeholder: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed' } ],
            ]],
            ['raycore/button'],
         ]],
      ]], 
   ];
   const blockProps = useBlockProps.save( {
      className: 'pd-block pd-inline content-container',
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