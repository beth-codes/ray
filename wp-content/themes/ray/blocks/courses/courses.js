
import Edit from "./courses-template";
const { InnerBlocks, useBlockProps} = wp.blockEditor;
const { registerBlockType } = wp.blocks;

const BLOCKNAME = "courses";
const BLOCKPATH = `raycore/${BLOCKNAME}`;

registerBlockType(BLOCKPATH, {
  apiVersion: 3,
  title: 'Courses',
  description: 'Courses',
  icon: 'text',
  category: 'blocks-core',

edit: Edit,

save: () => {
    const blockProps = useBlockProps.save({
      className: 'pd-block pd-inline courses-section',
    });

    return (
      <section {...blockProps}>
         <InnerBlocks.Content />
      </section>
    );
  },
});