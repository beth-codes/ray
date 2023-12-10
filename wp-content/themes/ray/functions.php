<?php
/**
 * Enqueue the block's assets for the editor.
 */
//CUSTOM BLOGS REGISTERED IN functions folder
require get_template_directory() . '/functions/asset.php';
require get_template_directory() . '/functions/menu.php';


add_theme_support('post-thumbnails', array(
   'post',
   'page',
   'custom-post-type-name',
   ));

   function ray_the_excerpt($trim_character_count = 0){
      // $post_ID = get_the_ID();
   
      // if ( empty( $post_ID ) ) {
      //    return null;
      // }
      
      // if (!has_excerpt() || 0 === $trim_character_count) {
      //    the_excerpt();
      //    return;
      // }
   
      $excerpt = wp_strip_all_tags(get_the_excerpt());
      $excerpt = substr($excerpt, 0, $trim_character_count);
      //cuts out the last word on after count
      $excerptr = substr($excerpt, 0, strrpos($excerpt, ' '));
   
      echo $excerptr . ' ';
   }

   function  ray_excerpt_read_more($more = '') {
      //if user is not on the single page show this
      if (! is_single()) {
         $more = sprintf( '<a href="%1$s"><button class="blog-button">%2$s</button></a>', 
         get_permalink(get_the_ID()),
         __('Read more', 'ray')
      );
      }
      return $more;
   }

   function custom_excerpt_more( $more ) {
      return '';//you can change this to whatever you want
  }
  add_filter( 'excerpt_more', 'custom_excerpt_more' );