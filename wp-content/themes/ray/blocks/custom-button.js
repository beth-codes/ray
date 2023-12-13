

const { registerBlockType} = wp.blocks;
const { useBlockProps, InnerBlocks} = wp.blockEditor;

const BLOCKNAME = "button";
const BLOCKPATH = `raycore/${BLOCKNAME}`;

registerBlockType( BLOCKPATH, {
    apiVersion: 3,
    title: 'Custom Button',
    description: ( 'Custom Button' ),
    icon: 'button',
    category: 'blocks-core',

    edit: () =>{
      const MY_TEMPLATE = [
         ['core/column', {className: 'buttons button-container'},  Array.from({ length: 2 }, () =>
            [ 'core/button', {className: 'button', placeholder: 'Button Text...'} ],
         )],
     ];
     const blockProps = useBlockProps.save( {
      className: 'pd-block pd-inline test-container',
   } );  
   return (
      <InnerBlocks
      template={ MY_TEMPLATE }
      templateLock="insert" />
   )
   },

    save: () =>{
      const blockProps = useBlockProps.save( {
         className: 'pd-block pd-inline button-container',
     } );

      return (
         <InnerBlocks.Content />
      )
    } 
} );




            