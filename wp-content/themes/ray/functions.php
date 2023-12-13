<?php
/**
 * Enqueue the block's assets for the editor.
 */
//CUSTOM BLOGS REGISTERED IN functions folder
require get_template_directory() . '/functions/asset.php';
require get_template_directory() . '/functions/menu.php';
require get_template_directory() . '/functions/handle-excerpt.php';

add_theme_support('post-thumbnails', array('post', 'page', 'custom-post-type-name',));


