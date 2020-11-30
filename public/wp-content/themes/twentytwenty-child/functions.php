<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles');
function theme_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}

// added jquery
function theme_scripts() {
    wp_enqueue_script('jquery.js');
  }
  add_action('wp_enqueue_scripts', 'theme_scripts');  
wp_enqueue_script('jquery');


/* Custom script with no dependencies, enqueued in the header */

function adding_custom_js() {
    wp_enqueue_script('custom', get_stylesheet_directory_uri().'/custom.js');
}
add_action('wp_enqueue_scripts', 'adding_custom_js');

wp_register_script( 'jquery3.2.1', 'https://code.jquery.com/jquery-3.2.1.min.js' );





