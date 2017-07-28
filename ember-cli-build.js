/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  const app = new EmberApp(defaults, {

    'ember-kit': {
      libraries: [
        { name: 'popper-utils.js', type: 'node', path: '/popper.js/dist/umd/popper-utils.js' },
        { name: 'popper.js', type: 'node', path: '/popper.js/dist/umd/popper.js' },
      ],

      adapters: [
        'app',
        'audio',
        'audio-output',
        'document',
        'event',
        'image',
        'list-feature',
        'list-row',
        'list',
        'media-item',
        'media-series',
        'search-hit',
        'services/kit-accounts-service',
        'services/kit-builder-service',
        'services/kit-events-service',
        'services/kit-files-service',
        'services/kit-media-service',
        'services/kit-notifications-service',
        'video',
        'video-output',
        'video-thumbnail',
        'web-app',
        'web-tab-banner',
        'web-tab',
      ],

      components: [
        'kit-app-lockup',
        'kit-button',
        'kit-button-with-text',
        'kit-circle-button',
        'kit-copy-text',
        'kit-date-time',
        'kit-expanding-text-block',
        'kit-flat-input',
        'kit-frame',
        'kit-grid-item',
        'kit-hero-header-text',
        'kit-hero-header',
        'kit-icon',
        'kit-image',
        'kit-list-item',
        'kit-loading-spinner',
        'kit-menu-item',
        'kit-nav-item',
        'kit-navbar',
        'kit-overlay',
        'kit-pagination',
        'kit-panel',
        'kit-player',
        'kit-popover',
        'kit-search-result',
        'kit-search',
        'kit-share-card',
        'kit-switch',
        'kit-tooltip',
        'kit-transition-progress-bar',
        'yield-for',
      ],

      helpers: [
        'and',
        'date-range',
        'eq',
        'filter-by',
        'find-by',
        'hyphenate',
        'image-url',
        'is-numeric',
        'moment-utc',
        'optional-action',
        'or',
        'separated-string',
      ],

      'instance-initializers': [
        'i18n',
      ],

      locales: [
        'en/translations',
      ],

      mixins: [
        'kit-body-click-mixin',
        'kit-image-aliases',
        'kit-pagination',
        'kit-route-not-found',
        'kit-transition-progress',
      ],

      models: [
        'address',
        'app',
        'app-feature',
        'audio',
        'audio-output',
        'branding-silhouette-logo',
        'branding',
        'document',
        'event',
        'image',
        'list-feature',
        'list-row',
        'list',
        'media-item',
        'media-series',
        'search-hit',
        'video',
        'video-output',
        'video-thumbnail',
        'web-app',
        'web-tab-banner',
        'web-tab',
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

      utils: [
        'kit-color-checker',
        'kit-fastboot-check',
        'kit-local-store',
        'kit-play-tracker',
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
