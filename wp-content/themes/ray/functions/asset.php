<?php
/**
 * Enqueue scripts for custom blocks
 */
function custom_block_scripts() {
  // Add custom Gutenberg block scripts
  wp_enqueue_script(
    'custom-block-scripts',
    get_template_directory_uri() . '/assets/js/blocks.js',
    array(
      'wp-blocks',
      'wp-components',
      'wp-element',
      'wp-i18n',
      'wp-editor',
      'wp-block-editor'
    ),
    '1.0.0',
    true);

   //  //register style for editor/backend only
   //  wp_enqueue_style(
	// 	'mycustom-block-style-editor', // Unique handle.
   //    get_template_directory_uri() . '/assets/css/main.css',
	// 	array( 'wp-blocks' ), // Dependencies, defined above.
	// 	filemtime( get_template_directory_uri() . '/assets/css/main.css' ) // Version: filemtime - Gets file modification time.
	// );

  // Register custom block types
  register_block_type(
    'raycore/blocks',
    array(
      'editor_script' => 'custom-block-scripts',
    )
  );
}
add_action('enqueue_block_editor_assets', 'custom_block_scripts');

//register style for frontend and editor/backend
function custom_block_style() {
   
	wp_enqueue_style(
		'main-css', // Unique handle.
      get_template_directory_uri() . '/assets/css/main.css',
		[], // Dependencies, defined above.
		filemtime( get_template_directory_uri() . '/assets/css/main.css'), // Version: filemtime - Gets file modification time.
      'all'
	);
   wp_enqueue_style( 'fonts-css', get_template_directory_uri(). '/assets/fonts/fonts.css', [], false, 'all');

   // wp_enqueue_style(
	// 	'block-style', // Unique handle.
   //    get_template_directory_uri() . '/assets/css/blocks.css',
	// 	[], // Dependencies, defined above.
	// 	filemtime( get_template_directory_uri() . '/assets/css/blocks.css'), // Version: filemtime - Gets file modification time.
   //    'all'
	// );

   wp_enqueue_script(
      'main-js',
      get_template_directory_uri() . '/assets/js/main.js',
      array('jquery'),
      '1.0.0',
      true);
    
       
}
add_action( 'enqueue_block_assets', 'custom_block_style');


//CUSTOM BLOCK CATEGORY
function register_layout_category( $categories ) {
	$new_category = array(
		'slug'  => 'blocks-core',
		'title' => 'Rays Core'
	);
	
	if (version_compare(get_bloginfo('version'), '5.8', '>=')) {
		$categories = array_merge(array($new_category), $categories);
	} else {
		array_unshift($categories, $new_category);
	}

	return $categories;
}

if ( version_compare( get_bloginfo( 'version' ), '5.8', '>=' ) ) {
	add_filter( 'block_categories_all', 'register_layout_category' );
} else {
	add_filter( 'block_categories', 'register_layout_category' );
}