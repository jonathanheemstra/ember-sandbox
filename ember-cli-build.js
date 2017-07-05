/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  const app = new EmberApp(defaults, {

    'ember-kit': {
      libraries: [],

      adapters: [
        'app',
        'audio',
        'image',
        'list',
        'list-feature',
        'list-row',
        'media-item',
        'media-series',
        'services/kit-accounts-service',
        'services/kit-builder-service',
        'services/kit-files-service',
        'services/kit-media-service',
        'services/kit-notifications-service',
        'search-hit',
        'video',
        'web-app',
        'web-tab',
        'web-tab-banner',
      ],

      components: [
        'kit-app-lockup',
        'kit-button',
        'kit-circle-button',
        'kit-flat-input',
        'kit-grid-item',
        'kit-hero-header',
        'kit-hero-header-text',
        'kit-icon',
        'kit-image',
        'kit-list-item',
        'kit-loading-spinner',
        'kit-menu-item',
        'kit-nav-item',
        'kit-navbar',
        'kit-overlay',
        'kit-panel',
        'kit-search',
        'kit-search-result',
        'yield-for',
      ],

      helpers: [
        'filter-by',
        'find-by',
        'hyphenate',
        'image-url',
        'separated-string',
      ],

      mixins: [
        'kit-body-click-mixin',
        'kit-image-aliases',
        'kit-route-not-found',
      ],

      models: [
        'app',
        'audio',
        'branding',
        'branding-silhouette-logo',
        'image',
        'list',
        'list-feature',
        'list-row',
        'media-item',
        'media-series',
        'search-hit',
        'video',
        'web-app',
        'web-tab',
        'web-tab-banner',
      ],

      serializers: [
        'kit-hal',
        'list-row',
        'search-hit',
      ],

      services: [
        'kit-event-bus',
        'tokens',
      ],
    },

    svg: {
      paths: [
        'node_modules/ember-kit/public/icons',
      ],
    },
  });

  return app.toTree();
};
