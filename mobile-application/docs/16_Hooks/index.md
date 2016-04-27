Hooks are used to **hook** into the DrupalGap mobile app dev kit. For example, to **hook** into the moment when your custom DrupalGap module is installed, use `hook_install()` like so:

```
/**
 * Implements hook_install().
 */
function my_module_install() {
  console.log('My module is being installed!');
  // Do stuff...
}
```

A listing of hooks is available below. Click on a hook to learn more about when, and how to use it:

- [hook_404](http://api.drupalgap.org/global.html#hook_404)
- [hook_assemble_form_state_into_field](http://api.drupalgap.org/global.html#hook_assemble_form_state_into_field)
- [hook_block_info](http://api.drupalgap.org/global.html#hook_block_info)
- [hook_block_view](http://api.drupalgap.org/global.html#hook_block_view)
- [hook_deviceready](http://api.drupalgap.org/global.html#hook_deviceready)
- [hook_drupalgap_goto_post_process](http://api.drupalgap.org/global.html#hook_drupalgap_goto_post_process)
- [hook_drupalgap_goto_preprocess](http://api.drupalgap.org/global.html#hook_drupalgap_goto_preprocess)
- [hook_entity_post_render_content](http://api.drupalgap.org/global.html#hook_entity_post_render_content)
- [hook_entity_post_render_field](http://api.drupalgap.org/global.html#hook_entity_post_render_field)
- [hook_field_formatter_view](http://api.drupalgap.org/global.html#hook_field_formatter_view)
- [hook_field_widget_form](http://api.drupalgap.org/global.html#hook_field_widget_form)
- [hook_form_alter](http://api.drupalgap.org/global.html#hook_form_alter)
- [hook_image_path_alter](http://api.drupalgap.org/global.html#hook_image_path_alter)
- [hook_install](http://api.drupalgap.org/global.html#hook_install)
- [hook_menu](http://api.drupalgap.org/global.html#hook_menu)
- [hook_services_postprocess](http://api.drupalgap.org/global.html#hook_services_postprocess)
- [hook_services_preprocess](http://api.drupalgap.org/global.html#hook_services_preprocess)
- [hook_services_request_postprocess_alter](http://api.drupalgap.org/global.html#hook_services_request_postprocess_alter)
- [hook_services_request_pre_postprocess_alter](http://api.drupalgap.org/global.html#hook_services_request_pre_postprocess_alter)
- [hook_services_success](http://api.drupalgap.org/global.html#hook_services_success)

For a complete listing of hooks, be sure to visit the [DrupalGap API](http://api.drupalgap.org).