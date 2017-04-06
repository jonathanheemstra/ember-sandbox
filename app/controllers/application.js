import Ember from 'ember';

export default Ember.Controller.extend({
  // -------------------------------------------------------------------------
  // Dependencies

  /** @see ember-kit/services/kit-event-bus */
  eventBus: Ember.inject.service('kit-event-bus'),

  // -------------------------------------------------------------------------
  // Actions

  actions: {

    /**
     * Sets the `kit-search--focused` and `kit-overlay--showing` flags to true
     * which results in the flags being added to the respective components
     * if a user clicks on the kit-search component.
     *
     * @function
     */
    focusSearch() {
      this.set('isSearchFocused', true);
      this.set('overlayStatus', true);
    },

    /**
     * Sets the `kit-search--focused` and `kit-overlay--showing` flags to false
     * which results in the flags being removed from the respective components
     * if a user clicks anywhere outside of the kit-search component.
     *
     * @function
     */
    unfocusSearch() {
      this.set('isSearchFocused', false);
      this.set('overlayStatus', false);
      this.set('searchResults', null);
      this.set('isResultsShown', false);
    },

    /**
     * Sets the `kit-panel--open` and `kit-overlay--showing` flags to true
     * which results in the flags being added to the respective components
     * a user clicks on the hamburger menu icon.
     *
     * @function
     */
    openNavPanelMenu() {
      this.set('navPanelStatus', true);
      this.set('overlayStatus', true);
    },

    /**
     * Sets the `kit-panel--open` fand `kit-overlay--showing` flags to false
     * which results in the flags being removed from the respective components
     * a user clicks on the hamburger menu icon.
     *
     * @function
     */
    closeNavPanelMenu() {
      this.set('navPanelStatus', false);
      this.set('overlayStatus', false);
    },

    /**
     * Fetch search results from the media item model that have title text that
     * match the text that is typed into the search input field. Results are
     * set to the `searchResults` property.
     *
     * @function
     */
     fetchSearchResults(event) {
       Ember.run.debounce( () => {
         if(event.target.value === '') {
           return this.set('searchResults', null);
         }

         this.store.query('media-item', {
           'filter[title]': `**${event.target.value}**`,
         })
         .then( search => {
           search = search.toArray();
           this.set('searchResults', search);
           this.get('searchResults')
           .pushObject({
             title: event.target.value,
             subtitle: `${search.length} ${search.length === 1 ? 'result':'results'}`,
             icon: 'search'
           });
           this.set('isResultsShown', true);
         });
       }, 200);
     },
  },

  // -------------------------------------------------------------------------
  // Properties

  init() {
    this._super(...arguments);

    Ember.$(document).on('click.bodyClick', () => {
      this.get('eventBus').publish('bodyClick');
    });
  },

  // -------------------------------------------------------------------------
  // Properties

  /**
  * Property for controlling the `kit-panel--open` flag class on
  * the `kit-navbar` component.
  *
  * @default false
  * @type {String}
  */
  isNavbarTransparent: true,

  /**
  * Property for controlling the `kit-search--focused` flag class on
  * the `kit-search` component.
  *
  * @default false
  * @type {String}
  */
  isSearchFocused: false,

  /**
  * Property for controlling the `kit-search--results-display` flag class on
  * the `kit-search` component.
  *
  * @default false
  * @type {String}
  */
  isResultsShown: true,

  /**
  * Property for controlling the `kit-panel--open` flag class on
  * the `kit-panel` component.
  *
  * @default false
  * @type {String}
  */
  navPanelStatus: false,

  /**
  * Property for controlling the `kit-overlay--showing` flag class on
  * the `kit-overlay` component.
  *
  * @default false
  * @type {String}
  */
  overlayStatus: false,

  /**
  * Assigned search results from `fetchSearchResults()` event.
  *
  * @default null
  * @type {String}
  */
  searchResults: null,
});
