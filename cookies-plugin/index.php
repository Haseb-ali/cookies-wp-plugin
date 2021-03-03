<?php
/*
Plugin name:Cookies Manager
version:1.0.0
Description: This plugin allow your user to custumize cookies.
Author: Haseeb ali
*/
// wp_enqueue_script("app",plugin_dir_url(__FILE__).'./src/js/basics.js');
wp_enqueue_style('bootstrap','https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css');
wp_enqueue_script('js-cookie','https://cdnjs.cloudflare.com/ajax/libs/js-cookie/2.2.1/js.cookie.min.js');
wp_enqueue_script("react",'https://unpkg.com/react@17/umd/react.development.js');
wp_enqueue_script("react-dom",'https://unpkg.com/react-dom@17/umd/react-dom.development.js');
wp_enqueue_script("babel",'https://unpkg.com/@babel/standalone/babel.min.js');
echo file_get_contents('wp-content/plugins/cookies-plugin/templates/CookiesBanner.html');

?>