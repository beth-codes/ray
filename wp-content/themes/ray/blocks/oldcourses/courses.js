
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

registerBlockType(`raycore/row`, {
  apiVersion: 3,
  title: 'Row',
  icon: 'grid-view',
  attributes: {
   year: {
       type: 'string',
       source: 'html',
       selector: 'small',
   },
   code: {
      type: 'string',
      source: 'html',
      selector: 'h4',
  },
   content:{
       type: 'string',
       source: 'html',
       selector: 'p',
   },
},

  edit: (props) => {
   const blockProps = useBlockProps.save({
      className: 'row-container',
    });
   const { clientId } = props;
   const { getBlock } = wp.data.select('core/block-editor');
   const removeRow = () => {
      wp.data.dispatch("core/block-editor").removeBlocks(clientId);
    };
   const block = getBlock(clientId);
 
   return (
     <div {...blockProps}>
         <div className="row-list-item">
           <wp.blockEditor.RichText
             tagName="h4"
             placeholder="Code"
             value={block.attributes.code}
             onChange={(value) => props.setAttributes({ code: value })}
           />
           <div className="row-content">
             <wp.blockEditor.RichText
               tagName="p"
               placeholder="Lorem"
               value={block.attributes.content}
               onChange={(value) => props.setAttributes({ content: value })}
             />
           </div>
           <div className="row-year">
             <wp.blockEditor.RichText
               tagName="samll"
               placeholder="Year"
               value={block.attributes.year}
               onChange={(value) => props.setAttributes({ year: value })}
             />
           </div>
         </div>
       <div className="custom-remove-row">
        <div className="btn" onClick={removeRow}></div>
      </div>
     </div>
   );
 },
 
 save: (props) => {
   const { clientId } = props;
   const blockProps = useBlockProps.save({
     className: 'row-container',
   });
 
   return (
   
   <div {...blockProps}>
      <div className="row-list-item">
         <h4>{props.attributes.code}</h4>
         <div className="row-content">
            <p>{props.attributes.content}</p>
         </div>
         <small className="row-year">{props.attributes.year}</small>
      </div>
   </div>
      
   );
 },
});