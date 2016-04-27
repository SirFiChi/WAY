As of DrupalGap SDK 7.x-1.0-rc4, we now have the option to include Views Exposed Filters in our mobile applications.

Please note, the Views Exposed Filters in DrupalGap is designed to work in conjunction with [Views Render Arrays](Displaying_a_View/Views_Render_Array) (it's of course possible to build your own forms and construct your own URL parameters to filter your Views, this feature is meant to simplify that entire process in a dynamic way).
Currently Supported Field Types and Widgets (*as of 2014-10-31*)

- Published (aka node status)
- Term reference (Select list)
- List text (Select list)

Supporting other fields should be relatively easy, the SDK is set up to accommodate other fields in a dynamic way. Simply set `Drupal.settings.debug` to `true` in the `settings.js` file, and then watch the `console.log()` output when you load your app. Here you'll see informative messages about how to add support for a new field type's exposed filter on the View.

## Getting Started

Let's take a look at a simple example that follows along with the [Recent Article List example Views JSON](Creating_a_Views_JSON/Recent_Article_List).

### Add an Exposed Filter to the Views JSON Page Display

![Views JSON Display Button](http://drupalgap.com/sites/default/files/views-json-display-button.png)

In this example we'll add an exposed filter on the Article content type's Tags field (a taxonomy term reference field):

1. Go to: `admin/structure/views/view/my_articles/edit` (optionally replace `my_articles` with the machine name of your View)
2. Switch to the **JSON** display
3. Under **Filter Criteria**, click the **Add** button
4. In the **Search** box, type: **Tags**
5. Check the box next to **Content: Tags (field_tags)**
6. Click **Apply (all displays)**

Please note during # 6, *be careful not to accidentally overwrite any other displays*. If in doubt, switch the For select list option from **All Displays** to **This page (overide)**, then click the **Apply (this display)** button. Then...

1. Specify the **Selection type** to be a **Dropdown** menu, and click the **Apply and continue** button
2. Check the box next to **Expose this filter to visitors, to allow them to change it**
3. Change the **Label** to **Tags**
4. Click **Apply (all displays)**

![Views Exposed Filter Config Form](http://drupalgap.com/sites/default/files/views-exposed-filter-config-form.png)

### Set up the Exposed Form

Under the **Advanced** settings on our View we can ...

1. Go to the **Exposed Form** section, and click the **Settings** link
2. Here we may optionally configure how aspects of the form (see screen shot below)
3. When we're done, just click the **Apply (all displays) button**

![Views Exposed Form Settings](http://drupalgap.com/sites/default/files/exposed-form-settings.png)

And finally click the **Save** button on the View.

## Checkout the Exposed Filter in Action

Now if we were to navigate to the page in our app that contains the Views Render Array of our article's Views JSON, we'll see the exposed filter ready for use:

![Views Exposed Filters](http://drupalgap.com/sites/default/files/views-exposed-filters.png)
