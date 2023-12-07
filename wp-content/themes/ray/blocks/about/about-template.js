const { useBlockProps, InnerBlocks } = wp.blockEditor;
const Edit = () => {
   const MY_TEMPLATE = [
      ['core/columns', {className: 'about-container'},[
         ['core/column', {className: 'about-header'},[
            [ 'core/heading', { placeholder: 'Heading' } ],
            ['core/column', {className: 'about-content'},[
               [ 'core/paragraph', { placeholder: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed' } ],
            ]]
         ]],
      ]], 
   ];
   const blockProps = useBlockProps.save( {
      className: 'pd-block pd-inline about-container',
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