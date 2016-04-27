// Create global variables to hold coordinates and the map.
var _my_module_user_latitude = null;
var _my_module_user_longitude = null;
var _my_module_map = null;

/**
 * Implements hook_menu().
 */
function my_module_map_menu() {
  try {
    var items = {};
    items['my_module_map'] = {
      title: 'Map',
      page_callback: 'my_module_map',
      pageshow: 'my_module_map_pageshow'
    };
    return items;
  }
  catch (error) { console.log('my_module_menu - ' + error); }
}

function my_module_map_header() {
var content = {};
content['my_header'] = {
  theme: 'header',
  text: 'WAY'
};
return content;
}

/**
 * The map page callback.
 */
function my_module_map() {
  try {
    var content = {};
    var map_attributes = {
      id: 'my_module_map',
      style: 'width: 100%; height: 120px !important;'
    };
    content['map'] = {
      markup: '<div ' + drupalgap_attributes(map_attributes) + '></div>'
    };
    return content;
  }
  catch (error) { console.log('my_module_map - ' + error); }
}

/**
 * The map pageshow callback.
 */
function my_module_map_pageshow() {
  try {
    navigator.geolocation.getCurrentPosition(
      
      // Success.
      function(position) {

        // Set aside the user's position.
        _my_module_user_latitude = position.coords.latitude;
        _my_module_user_longitude = position.coords.longitude;
        
        // Build the lat lng object from the user's position.
        var myLatlng = new google.maps.LatLng(
          _my_module_user_latitude,
          _my_module_user_longitude
        );
        
        // Set the map's options.
        var mapOptions = {
          center: myLatlng,
          zoom: 11,
          mapTypeControl: true,
          mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
          },
          zoomControl: true,
          zoomControlOptions: {
            style: google.maps.ZoomControlStyle.SMALL
          }
        };
        
        // Initialize the map, and set a timeout to resize properly.
        _my_module_map = new google.maps.Map(
          document.getElementById("my_module_map"),
          mapOptions
        );
        setTimeout(function() {
            google.maps.event.trigger(_my_module_map, 'resize');
            _my_module_map.setCenter(myLatlng);
        }, 500);
        
        // Add a marker for the user's current position.
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: _my_module_map,
            icon: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        });
        
      },
      
      // Error
      function(error) {
        
        // Provide debug information to developer and user.
        console.log(error);
        drupalgap_alert(error.message);
        
        // Process error code.
        switch (error.code) {

          // PERMISSION_DENIED
          case 1:
            break;

          // POSITION_UNAVAILABLE
          case 2:
            break;

          // TIMEOUT
          case 3:
            break;

        }

      },
      
      // Options
      { enableHighAccuracy: true }
      
    );
  }
  catch (error) {
    console.log('my_module_map_pageshow - ' + error);
  }
}
