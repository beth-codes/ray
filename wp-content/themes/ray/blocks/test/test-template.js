const { useBlockProps, InnerBlocks } = wp.blockEditor;

const Edit = () => {
   const MY_TEMPLATE = [
      ['core/columns', {className: 'test-content'},[
         ['core/column', {className: 'test-header'},[
            [ 'core/heading', { placeholder: 'Book Title' } ],
         ]],
         ['core/column', {className: 'test-summary'},[
            [ 'core/paragraph', { placeholder: 'Summary' } ],
         ]]
      ]], 
  ];
   const blockProps = useBlockProps.save( {
      className: 'pd-block pd-inline test-container',
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