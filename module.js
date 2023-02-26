'use strict';

const ERROR = 'error';

/**
 * @type {import('eslint').Linter.BaseConfig}
 */
module.exports = {
  parserOptions: {
    sourceType: 'module',
  },
  rules: {
    // Unicorn ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    'unicorn/prefer-module': ERROR,
  },
};
