'use strict';

const confusingBrowserGlobals = require('confusing-browser-globals');

const ERROR = 'error';

module.exports = {
  env: {
    browser: true,
  },
  rules: {
    // Suggestions ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    'no-alert': ERROR,
    'no-restricted-globals': [ERROR, ...confusingBrowserGlobals],
    'no-script-url': ERROR,
    'no-shadow': [
      ERROR,
      {
        allow: confusingBrowserGlobals,
        builtinGlobals: true,
        hoist: 'functions',
        ignoreOnInitialization: true,
      },
    ],

    // Import ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    'import/no-unassigned-import': [
      ERROR,
      {
        allow: ['**/*.css'],
      },
    ],

    // Unicorn ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    'unicorn/no-document-cookie': ERROR,
    'unicorn/prefer-add-event-listener': ERROR,
    'unicorn/prefer-dom-node-append': ERROR,
    'unicorn/prefer-dom-node-dataset': ERROR,
    'unicorn/prefer-dom-node-remove': ERROR,
    'unicorn/prefer-dom-node-text-content': ERROR,
    'unicorn/prefer-keyboard-event-key': ERROR,
    'unicorn/prefer-modern-dom-apis': ERROR,
    'unicorn/prefer-query-selector': ERROR,
    'unicorn/require-post-message-target-origin': ERROR,
  },
};
