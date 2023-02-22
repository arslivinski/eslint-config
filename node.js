'use strict';

const OFF = 'off';
const ERROR = 'error';

module.exports = {
  env: {
    node: true,
  },
  plugins: ['n'],
  rules: {
    // Import ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    'import/no-nodejs-modules': OFF,

    // Unicorn ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    'unicorn/no-process-exit': ERROR,
    'unicorn/prefer-event-target': ERROR,
    'unicorn/prefer-json-parse-buffer': OFF,
    'unicorn/prefer-node-protocol': ERROR,

    // N ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    'n/no-deprecated-api': ERROR,
    'n/handle-callback-err': [ERROR, 'error'],
    'n/no-callback-literal': ERROR,
    'n/no-exports-assign': OFF, // Handled on 'commonjs'
    'n/no-extraneous-import': OFF, // Handled by import plugin
    'n/no-extraneous-require': OFF, // Handled by import plugin
    'n/no-hide-core-modules': ERROR,
    'n/no-missing-import': OFF, // Handled by import plugin
    'n/no-missing-require': OFF, // Handled by import plugin
    'n/no-new-require': OFF, // Handled on 'commonjs`
    'n/no-path-concat': ERROR,
    'n/no-process-exit': OFF, // Handled by unicorn/no-process-exit
    'n/no-unpublished-bin': ERROR,
    'n/no-unpublished-import': OFF,
    'n/no-unpublished-require': OFF,
    'n/no-unsupported-features': OFF,
    'n/no-unsupported-features/es-builtins': OFF,
    'n/no-unsupported-features/es-syntax': OFF,
    'n/no-unsupported-features/node-builtins': OFF,
    'n/process-exit-as-throw': ERROR,
    'n/shebang': ERROR,
    'n/callback-return': ERROR,
    'n/exports-style': OFF, // Handled on 'commonjs'
    'n/file-extension-in-import': OFF, // Handled by import plugin
    'n/global-require': OFF, // Handled on 'commonjs'
    'n/no-mixed-requires': OFF, // Handled on 'commonjs'
    'n/no-process-env': OFF,
    'n/no-restricted-import': OFF,
    'n/no-restricted-require': OFF,
    'n/no-sync': ERROR,
    'n/prefer-global/buffer': ERROR,
    'n/prefer-global/console': ERROR,
    'n/prefer-global/process': ERROR,
    'n/prefer-global/text-decoder': ERROR,
    'n/prefer-global/text-encoder': ERROR,
    'n/prefer-global/url': ERROR,
    'n/prefer-global/url-search-params': ERROR,
    'n/prefer-promises/dns': ERROR,
    'n/prefer-promises/fs': ERROR,
  },
};
