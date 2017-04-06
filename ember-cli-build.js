/* eslint-env node */
const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    svg: {
      paths: [
        'node_modules/ember-kit/public/icons',
      ],
    },

    'ember-kit': {
      libraries: [],

      adapters: [
        'image',
        'list-feature',
        'list-row',
        'list',
        'media-item',
        'media-series',
        'services/kit-accounts-service',
        'services/kit-builder-service',
        'services/kit-files-service',
        'services/kit-media-service',
        'services/kit-notifications-service',
        'web-app'
      ],

      components: [
        'kit-app-lockup',
        'kit-icon',
        'kit-image',
        'kit-menu-item',
        'kit-nav-item',
        'kit-navbar',
        'kit-search',
        'kit-search-result',
        'kit-panel',
        'kit-overlay',
        'yield-for',
      ],

      helpers: [],

      mixins: [
        'kit-body-click-mixin',
      ],

      models: [
        'image',
        'list-feature',
        'list-row',
        'list',
        'media-item',
        'media-series',
        'web-app'
      ],

      serializers: [
        'kit-hal',
      ],

      services: [
        'kit-event-bus',
      ],
    }

  });

  return app.toTree();
};
