// // const { registerBlockType} = wp.blocks;
// // const { useBlockProps, InnerBlocks} = wp.blockEditor;
// // import Edit from './post-carousel-template';

// const BLOCKNAME = "post-carousel";
// const BLOCKPATH = `raycore/${BLOCKNAME}`;

// // registerBlockType( BLOCKPATH, {
// //    apiVersion: 3,
// //    title: 'Post Carousel',
// //    description: ( 'Post Carousel' ),
// //    icon: 'laptop',
// //    category: 'blocks-core',
 
// //     edit: Edit,

// //     save: () =>{
// //       const blockProps = useBlockProps.save( {
// //          className: 'post-carousel-section',
// //      } );

// //       return (
// //           <section { ...blockProps }>
// //               <InnerBlocks.Content />
// //           </section>
// //       )
// //     } 
// // } );





// const { Fragment } = wp.element;
// const { registerBlockType } = wp.blocks;
// const { withSelect } = wp.data;
// const { Placeholder } = wp.components;

// const GalleryCarousel = ({ posts }) => (
//    <Fragment>
//      {posts ? (
//        posts.length > 0 ? (
//          <div className="center" style={{ margin: '40px' }}>
//            {posts.map((post) => (
//              <div key={post.id} className="card">
//                {post.featuredImageUrl ? (
//                  <img
//                    src={post.featuredImageUrl}
//                    alt={post.title.rendered}
//                    className="w-100"
//                    style={{ maxWidth: '350px' }}
//                  />
//                ) : (
//                  <h1>hello</h1>
//                )}
//              </div>
//            ))}
//          </div>
//        ) : (
//          <Placeholder label="No posts found" />
//        )
//      ) : (
//        <Placeholder label="Loading" />
//      )}
//    </Fragment>
//  );




// registerBlockType(BLOCKPATH, {
// 	title: 'Gallery Carousel',
// 	category: 'blocks-core',
// 	edit: withSelect((select) => {
// 		const { getEntityRecords } = select('core');
// 		const query = {
// 			per_page: 5,
// 			type: 'post',
// 			_post_meta_cache: false,
// 			_post_term_cache: false,
// 		};
// 		return {
// 			posts: getEntityRecords('postType', 'post', query),
// 		};
// 	})(GalleryCarousel),
//    save: () => {
//       return (
//         <GalleryCarousel />
//       );
//     },
// });