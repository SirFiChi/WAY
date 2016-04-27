/**
 * Implements hook_menu().
 */
function settings_menu() {
  var items = {};
  items['settings'] = {
    title: 'Einstellungen',
    page_callback: 'settings_page'
  };
  return items;
}

/**
 * The callback for the "Hello World" page.
 */
function settings_page() {
  var content = {};
  content['setcurrentlocation'] = {
    theme: 'button',
    text: 'aktuellen Standort setzen',
    attributes: {
      onclick: "drupalgap_alert('Der aktuelle Standort wurde gesetzt.')"
    }
  };
  content['deletelocation'] = {
    theme: 'button',
    text: 'Standort loeschen',
    attributes: {
      onclick: "drupalgap_alert('Der aktuelle Standort wurde gel√scht.')"
    }
  };
  return content;
}