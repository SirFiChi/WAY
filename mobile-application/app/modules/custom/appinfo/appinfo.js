/**
 * Implements hook_menu().
 */
function appinfo_menu() {
  var items = {};
  items['appinfo'] = {
    title: 'Information',
    page_callback: 'appinfo_page'
  };
  return items;
}

/**
 * The callback for the "Hello World" page.
 */
function appinfo_page() {
  var content = {};
  content['my_button'] = {
    theme: 'button',
    text: 'Mehr über diese App...',
    attributes: {
      onclick: "drupalgap_alert('Hi!')"
    }
  };
  return content;
}