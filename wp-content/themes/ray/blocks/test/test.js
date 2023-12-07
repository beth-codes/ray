const { registerBlockType} = wp.blocks;
const { useBlockProps, InnerBlocks} = wp.blockEditor;
import Edit from './test-template';

const BLOCKNAME = "test";
const BLOCKPATH = `raycore/${BLOCKNAME}`;

registerBlockType( BLOCKPATH, {
    apiVersion: 3,
    title: 'Test',
    description: ( 'The description' ),
    icon: 'universal-access-alt',
    category: 'blocks-core',

    edit: Edit,

    save: () =>{
      const blockProps = useBlockProps.save( {
         className: 'pd-block pd-inline test-container',
     } );

      return (
          <section { ...blockProps }>
              <InnerBlocks.Content />
          </section>
      )
    } 
} );
