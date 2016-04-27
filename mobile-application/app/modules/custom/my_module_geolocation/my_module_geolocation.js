/**
 * Implements hook_menu()
 */
function my_module_geolocation_menu() {
  try {
    var items = {};
    items['my_module_geolocation'] = {
      title: 'Get Current Position',
      page_callback: 'my_module_geolocation',
      pageshow: 'my_module_geolocation_pageshow'
    };
    return items;
  }
  catch (error) { console.log('my_module_menu - ' + error); }
}

/**
 * My geolocation page.
 */
function my_module_geolocation() {
  try {
    var content = {};
    content.intro = {
      markup: "<p>Retrieving current position...</p>"
    };
    return content;
  }
  catch (error) { console.log('my_module_geolocation - ' + error); }
}

/**
 * My geolocation pageshow.
 */
function my_module_geolocation_pageshow() {
  try {
    navigator.geolocation.getCurrentPosition(
      // Success
      function (position) {
        drupalgap_alert(
          'Latitude: '          + position.coords.latitude          + '\n' +
          'Longitude: '         + position.coords.longitude         + '\n' +
          'Altitude: '          + position.coords.altitude          + '\n' +
          'Accuracy: '          + position.coords.accuracy          + '\n' +
          'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
          'Heading: '           + position.coords.heading           + '\n' +
          'Speed: '             + position.coords.speed             + '\n' +
          'Timestamp: '         + position.timestamp                + '\n'
        );
      },
      // Error
      function (error) {
        drupalgap_alert(
          'Code: '    + error.code    + '\n' +
          'Message: ' + error.message + '\n'
        );
      }
    );
  }
  catch (error) { console.log('my_module_geolocation_pageshow - ' + error); }
}