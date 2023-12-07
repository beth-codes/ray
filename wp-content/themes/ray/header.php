<?php
/**
 * Header Template
 * @package RAY
*/
?>
<!DOCTYPE html>
<!-- dynamic language attributes -->
<html lang="<?php language_attributes()?>">
<head>
   <meta charset="<?php bloginfo( 'charset' )?>">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
   <link href="https://fonts.googleapis.com/css2?family=Karla:wght@200;700&display=swap" rel="stylesheet">
   <link rel="preconnect" href="https://fonts.googleapis.com">
   <link href="https://fonts.googleapis.com/css2?family=Karla:wght@200;700&family=Oxygen:wght@400;700&display=swap" rel="stylesheet">
   <title>RAY</title>
   <?php wp_head();?>
</head>
<body <?php body_class(); ?>>
<?php 
if ( function_exists( 'wp_body_open' ) ) {
   wp_body_open(); } 
?>
<div id="page">
   <header id="page-head" class="site-header header" role="banner">
    <div class="logo">
    <?php 
               if ( function_exists( 'the_custom_logo' ) ) {
                  the_custom_logo();
               };
            ?>
       <a href="<?php echo home_url(); ?>">Dr. Ray Lutzky</a> 
    </div>  
      <?php 
         wp_nav_menu( 
            array( 
                  'theme_location' => 'header-menu', 'container' => 'nav', 'container_class' => 'list-nav'
            ) 
         ); 
      ?>

<div class="menu-icon js-nav-toggle">
            <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24"/>
            <path d="M6 15.5H18" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 12H18" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6 8.5H18" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>   
         </div>
   </header>
   <section class="menu-wrapper js-menu-toggle flex items-center justify-center">
	      <a href="#" title="Toggle menu" class="nav-toggle js-nav-toggle flex items-center justify-center size-s"><span class="hide-mobile">
         <svg xmlns="http://www.w3.org/2000/svg" width="35px" height="35px" viewBox="0 0 32 32"><defs><style>.cls-1{fill:none;stroke:#fff;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style></defs><title/><g id="cross"><line class="cls-1" x1="7" x2="25" y1="7" y2="25"/><line class="cls-1" x1="7" x2="25" y1="25" y2="7"/></g>
         </svg></a>
      
	      <?php wp_nav_menu(  array( 
                  'theme_location' => 'header-menu', 'container' => 'nav', 'container_class' => 'list-nav'
            ) ); ?>
      </section>
   <main class="main-container">
 

  