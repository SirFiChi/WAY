var geotracker_watch_id = null;
var geotracker_data = [];
var geotracker_map = null;
var geotracker_map_initialized = false;
var geotracker_map_markers = [];
var geotracker_started = false;
var geotracker_accuracy_threshold = 50;
var geotracker_background_service = null;

/**
 * Implements hook_menu().
 */
function geotracker_menu() {
  try {
    var items = {
      geotracker:{
        title:'Geo Tracker',
        page_callback:'geotracker_page'
      }
    };
    return items;
  }
  catch (error) { drupalgap_error(error); }
}

function geotracker_page() {
  try {
    var content = {
      start:{
        theme:'button',
        text:'Start',
        attributes:{
          id:'geotracker_start',
          onclick:'geotracker_start()'
        }
      },
      stop:{
        theme:'button',
        text:'Stop',
        attributes:{
          id:'geotracker_stop',
          onclick:'geotracker_stop()'
        }
      },
      resume:{
        theme:'button',
        text:'Resume',
        attributes:{
          id:'geotracker_resume',
          onclick:'geotracker_resume()'
        }
      },
      reset:{
        theme:'button',
        text:'Reset',
        attributes:{
          id:'geotracker_reset',
          onclick:'geotracker_reset()'
        }
      },
      message:{
        markup:'<div id="geotracker_message"></div>'
      }
    };
    return content;
  }
  catch (error) { drupalgap_error(error); }
}

function geotracker_start() {
  try {
    $('#geotracker_start').hide();
    $('#geotracker_resume').hide();
    $('#geotracker_reset').hide();
    $('#geotracker_stop').show();
    // Start watching geo location position.
    geotracker_watch_id = navigator.geolocation.watchPosition(
      geotracker_success,
      geotracker_error,
      {enableHighAccuracy:true}
    );
    // Tracking trip...
    $('#geotracker_message').prepend('<p>Geo tracking started...</p>');
    geotracker_started = true;
    return false;
  }
  catch (error) { drupalgap_error(error); }
}

function geotracker_stop() {
  try {
    // Stop the geo location watcher.
    navigator.geolocation.clearWatch(geotracker_watch_id);
    // Set button visibilities.
    $('#geotracker_stop').hide();
    $('#geotracker_reset').show();
    $('#geotracker_inputs').show();
    $('#geotracker_message').html('');
    geotracker_started = false;
    /*var sailingPathCoordinates = [];
    $.each(geotracker_data, function(index, data){
        var date = new Date(data.date);
        sailingPathCoordinates.push(new google.maps.LatLng(data.latitude, data.longitude));
        //$('#geotracker_message').append('<p>' +
        //   date.toString() + '<br >' +
        //  'Breddegrad: '  + data.latitude + '<br />' +
        //  'Længdegrad: ' + data.longitude + '<hr />' +
        //'</p>');
    });
    // Initialize the map if it hasn't been initialized.
    if (!geotracker_map_initialized) {
      geotracker_map_initialize();
    }
    // Add the start and end points to the map, and set the map center to the
    // start point.
    if (geotracker_data.length > 0) {
      geotracker_map.setCenter(sailingPathCoordinates[0]);
      geotracker_add_position_to_map(
        geotracker_data[0].latitude,
        geotracker_data[0].longitude
      );
      if (geotracker_data.length > 1) {
        geotracker_add_position_to_map(
          geotracker_data[geotracker_data.length-1].latitude,
          geotracker_data[geotracker_data.length-1].longitude
        );
      }
    }
    // Draw the trip line(s).
    var sailingPath = new google.maps.Polyline({
      path: sailingPathCoordinates,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2
    });
    // Add the lines to the map.
    sailingPath.setMap(geotracker_map);
    */
    return false;
  }
  catch (error) { drupalgap_error(error); }
}

function geotracker_reset() {
  try {
    $('#geotracker_start').show();
    $('#geotracker_resume').hide();
    $('#geotracker_reset').hide();
    $('#geotracker_message').html('');
    $('#geotracker_inputs').hide();
    $('#geotracker_title').val('');
    $('#geotracker_body').val('');
    geotracker_started = false;
    geotracker_data = [];
    geotracker_map_markers = [];
    geotracker_map_initialize();
  }
  catch (error) { drupalgap_error(error); }
}

function geotracker_success(position) {
  try {
    // Add the date and position info to the trip data if the coordinates are
    // within the accuracy threshold.
    var now = new Date();
    var lat = position.coords.latitude;
    var lng = position.coords.longitude;
    var accuracy = position.coords.accuracy;
    if (accuracy > geotracker_accuracy_threshold) { return; }
    var speed = position.coords.speed; if (speed == null) { speed = 0; }
    var heading = position.coords.heading; if (heading == null) { heading = 'N/A'; }
    var created = now.getTime();
    geotracker_data.push({
        'date':created,
        'latitude':lat,
        'longitude':lng,
        'accuracy':accuracy,
    });
    $('#geotracker_message').html(
      'Latitude: ' + lat +
      '<br />Longitude: ' + lng + 
      '<br />Speed: ' + speed +
      '<br />Heading: ' + heading +
      '<br />Accuraccy: ' + accuracy +
      '<br />Last Updated: ' + js_yyyy_mm_dd_hh_mm_ss()
    );
    /*
    // Initialize the map if it hasn't been initialized.
    if (!geotracker_map_initialized) {
      geotracker_map_initialize();
    }
    // Update the map.
    geotracker_add_position_to_map(position.coords.latitude, position.coords.longitude);
    */
  }
  catch (error) { drupalgap_error(error); }
}

function geotracker_error(error) {
  try {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
  }
  catch (error) { drupalgap_error(error); }
}

function geotracker_map_initialize() {
  try {
    var myOptions = {
      zoom: 13,
      center: new google.maps.LatLng(sejlnet_location_latitude, sejlnet_location_longitude),
      mapTypeId: google.maps.MapTypeId.SATELLITE
    };
    geotracker_map = new google.maps.Map(document.getElementById("geotracker_map"), myOptions);
    geotracker_map_initialized = true;
  }
  catch (error) { drupalgap_error(error); }
}

function geotracker_add_position_to_map(lat, lng) {
  try {
    // If there is already a marker on the map, remove it.
    if (geotracker_map_markers.length > 0) {
      geotracker_map_markers[0].setMap(null);
      delete(geotracker_map_markers[0]);
    }
    // Create new marker from lat/lng, add it to the map and save the marker.
    var myLatLng = new google.maps.LatLng(lat, lng);
    var myMarkerOptions = {
      position: myLatLng,
      map: geotracker_map
    };
    var marker = new google.maps.Marker(myMarkerOptions);
    geotracker_map_markers.push(marker);
  }
  catch (error) { drupalgap_error(error); }
}

