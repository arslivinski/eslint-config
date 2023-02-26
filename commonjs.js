'use strict';

const OFF = 'off';
const ERROR = 'error';

/**
 * @type {import('eslint').Linter.BaseConfig}
 */
module.exports = {
  env: {
    commonjs: true,
  },
  globals: {
    __dirname: 'readonly',
    __filename: 'readonly',
  },
  parserOptions: {
    sourceType: 'script',
  },
  plugins: ['n'],
  rules: {
    // Import ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    'import/no-commonjs': OFF,

    // N ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    'n/no-exports-assign': ERROR,
    'n/no-new-require': ERROR,
    'n/exports-style': [ERROR, 'module.exports'],
    'n/global-require': ERROR,
    'n/no-mixed-requires': ERROR,
  },
};
