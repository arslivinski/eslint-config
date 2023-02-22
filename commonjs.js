'use strict';

const OFF = 'off';

module.exports = {
  env: {
    commonjs: true,
  },
  parserOptions: {
    sourceType: 'script',
  },
  rules: {
    // Import ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    'import/no-commonjs': OFF,
  },
};
