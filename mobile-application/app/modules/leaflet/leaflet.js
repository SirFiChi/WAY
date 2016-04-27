/**
 * Implements hook_field_widget_form().
 */
function leaflet_widget_field_widget_form(form, form_state, field, instance, langcode, items, delta, element) {
  try {
    // For now just map the widget to the geofield widget, unless the
    // geofield_gmap module is present, then we'll use its widget.
    if (module_exists('geofield_gmap')) {
      geofield_gmap_field_widget_form(form, form_state, field, instance, langcode, items, delta, element);
    }
    else {
      geofield_field_widget_form(form, form_state, field, instance, langcode, items, delta, element);
    }
  }
  catch (error) { console.log('leaflet_widget_field_widget_form - ' + error); }
}

/**
 * Implements hook_assemble_form_state_into_field().
 */
function leaflet_assemble_form_state_into_field(entity_type, bundle,
  form_state_value, field, instance, langcode, delta, field_key) {
  try {
    // For now just map the assembly to the geofield module.
    geofield_assemble_form_state_into_field(entity_type, bundle, form_state_value, field, instance, langcode, delta, field_key);
  }
  catch (error) {
    console.log('leaflet_assemble_form_state_into_field - ' + error);
  }
}

