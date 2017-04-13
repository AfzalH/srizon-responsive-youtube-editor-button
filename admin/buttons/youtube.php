<?php
add_action( 'admin_head', 'srzfb_add_responsive_youtube_button' );

function srzfb_add_responsive_youtube_button() {
	global $typenow;
	// check user permissions
	if ( ! current_user_can( 'edit_posts' ) && ! current_user_can( 'edit_pages' ) ) {
		return;
	}
	// check if WYSIWYG is enabled
	if ( get_user_option( 'rich_editing' ) == 'true' ) {
		add_filter( "mce_external_plugins", "srzfb_responsive_youtube_add_tinymce_plugin" );
		add_filter( 'mce_buttons', 'srzfb_responsive_youtube_register_button' );
	}
}

function srzfb_responsive_youtube_add_tinymce_plugin($plugin_array) {
	$plugin_array['srizon_responsive_youtube_button'] = WP_PLUGIN_URL . '/srizon-responsive-youtube-editor-button/resources/js/button-youtube.js';

	return $plugin_array;
}

function srzfb_responsive_youtube_register_button( $buttons ) {
	array_push( $buttons, "srizon_responsive_youtube_button" );

	return $buttons;
}

function srizon_responsive_youtube_script() {
	wp_enqueue_style( 'srizonyoutube', WP_PLUGIN_URL . '/srizon-responsive-youtube-editor-button/resources/css/button-youtube.css', null, '1.0' );
}

add_action( 'admin_print_scripts-post-new.php', 'srizon_responsive_youtube_script', 11 );
add_action( 'admin_print_scripts-post.php', 'srizon_responsive_youtube_script', 11 );
