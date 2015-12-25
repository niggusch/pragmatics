<?php
function pragmatics_enqueue_scripts() {

  // register special font
  wp_enqueue_style( 'pragmatics-font-se', "https://fonts.googleapis.com/css?family=Special+Elite" , array(), null );
  //register Bootstrap
  wp_enqueue_style( 'pragmatics-bootstrap', "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/css/bootstrap.min.css" , array(), null );
  wp_enqueue_style( 'pragmatics-bootstrap-theme', "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/css/bootstrap-theme.min.css" , array(), null );
  //register Font awesome
  wp_enqueue_style( 'pragmatics-font-awesome', "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.5.0/css/font-awesome.min.css" , array(), null );
  //register animate
  wp_enqueue_style( 'pragmatics-animate',   get_stylesheet_directory_uri() . '/node_modules/animate.css/animate.min.css', array(), null );




  //JQuery
  wp_register_script(
    'pragmatics-jquery',
    get_stylesheet_directory_uri() . '/node_modules/jquery/dist/jquery.min.js'
  );
  wp_register_script(
    'pragmatics-bootstrap',
    get_stylesheet_directory_uri() . '/node_modules/bootstrap/dist/js/bootstrap.min.js'
  );
  wp_register_script(
    'angularjs',
    get_stylesheet_directory_uri() . '/node_modules/angular/angular.js'
  );
  wp_register_script(
    'angularjs-route',
    get_stylesheet_directory_uri() . '/node_modules/angular-route/angular-route.js'
  );
  wp_register_script(
    'angularjs-sanitize',
    get_stylesheet_directory_uri() . '/node_modules/angular-sanitize/angular-sanitize.min.js'
  );



  wp_enqueue_script(
    'pragmatics-angular-app',
    get_stylesheet_directory_uri() . '/app/pragmatics-app.js',
    array( 'pragmatics-jquery', 'pragmatics-bootstrap' ,'angularjs', 'angularjs-route' ,'angularjs-sanitize')
  );

  wp_localize_script(
    'angularjs',
    'PragMatics',
    array(
      'partialsDir' => trailingslashit( get_template_directory_uri() ) . 'partials/',
      'templatesDir' => trailingslashit( get_template_directory_uri() ) . 'templates/'
    )
  );

  // we need to create a JavaScript variable to store our API endpoint...
  wp_localize_script( 'angularjs', 'AppAPI', array( 'url' => get_bloginfo('wpurl').'/wp-json/wp/v2/') ); // this is the API address of the JSON API plugin

  // ... and useful information such as the theme directory and website url
  wp_localize_script( 'angularjs', 'BlogInfo', array( 'url' => get_bloginfo('template_directory').'/', 'site' => get_bloginfo('wpurl')) );

}

add_action('wp_enqueue_scripts', 'pragmatics_enqueue_scripts');
?>
