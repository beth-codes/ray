const { registerBlockType} = wp.blocks;
const { useBlockProps, InnerBlocks} = wp.blockEditor;
import Edit from './content-template';

const BLOCKNAME = "content";
const BLOCKPATH = `raycore/${BLOCKNAME}`;

registerBlockType( BLOCKPATH, {
    apiVersion: 3,
    title: 'Content',
    description: ( 'Content' ),
    icon: 'text',
    category: 'blocks-core',

    edit: Edit,

    save: () =>{
      const blockProps = useBlockProps.save( {
         className: 'pd-block pd-inline content-container',
     } );

      return (
          <section { ...blockProps }>
              <InnerBlocks.Content />
          </section>
      )
    } 
} );
