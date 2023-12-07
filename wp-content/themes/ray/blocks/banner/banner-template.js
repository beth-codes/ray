const { useBlockProps, InnerBlocks } = wp.blockEditor;

   // banner 568px 70vh image, header, subtitle, text button   [ 'core/paragraph', { placeholder: 'Summary' } ],

const Edit = () => {
   const MY_TEMPLATE = [
      ['core/columns', {className: 'banner-container'},[
         ['core/column', {className: 'bg--upper'},],
         ['core/column', {className: 'bg--lower'},],
         [ 'core/image', { className: 'banner-img' } ],
        
         ['core/column', {className: 'banner-content-header'}, [
            ['core/column', {className: 'banner-h1'},[
               [ 'core/heading', { level: 1, placeholder: 'Header', className: 'h1' } ],
            ]],
           
            [ 'core/heading', { level: 3, placeholder: 'Header', className: 'h1 bold' } ],
            [ 'core/heading', { level: 3, placeholder: 'Header', className: 'h1' } ],
         ]],

      ]], 
  ];
   const blockProps = useBlockProps();
   return (
      <div { ...blockProps }>
         <InnerBlocks
         template={ MY_TEMPLATE }
         templateLock="all" />
      </div>
   )
}

export default Edit;