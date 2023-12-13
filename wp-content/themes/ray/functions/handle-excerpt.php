<?php
/**
 * Handle excerpts for blog posts
 */

function ray_the_excerpt($trim_character_count = 0){
   
   $excerpt = wp_strip_all_tags(get_the_excerpt());
   $excerpt = substr($excerpt, 0, $trim_character_count);
   $excerptr = substr($excerpt, 0, strrpos($excerpt, ' '));

   echo $excerptr . ' ';
}

function  ray_excerpt_read_more($more = '') {
   if (! is_single()) {
      $more = sprintf( '<a href="%1$s"><button class="blog-button">%2$s</button></a>', 
      get_permalink(get_the_ID()),
      __('Read more', 'ray')
   );
   }
   return $more;
}

function custom_excerpt_more( $more ) {
   return '';
}
add_filter( 'excerpt_more', 'custom_excerpt_more' );