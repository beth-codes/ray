const { useBlockProps, InnerBlocks } = wp.blockEditor;
const Edit = (props) => {
   const blockProps = useBlockProps.save({
      className: 'pd-block pd-inline courses-section',
    });

   const addRow = () => {
     const newRow = wp.blocks.createBlock( 'raycore/rows', {} );
     wp.data.dispatch( 'core/block-editor' ).insertBlocks( newRow, 3 , props.clientId,);
   };
   
   const MY_TEMPLATE = [
      ['core/column', { className: 'courses-header' }, [
        ['core/heading', { level: 4, placeholder: 'Header', className: 'h4' }],
      ]],
      ['raycore/rows'],
   ];
  
   return (
     <div {...blockProps}>
       <InnerBlocks templateLock={false} allowedBlocks='raycore/rows'  template={MY_TEMPLATE} />
       <div className="custom-add-row">
         <button onClick={addRow}>Add Row</button>
       </div>
     </div>
   );
 }

 export default Edit;


 