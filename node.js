'use strict';

const OFF = 'off';
const ERROR = 'error';

module.exports = {
  env: {
    node: true,
  },
  rules: {
    // Import ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    'import/no-nodejs-modules': OFF,

    // Unicorn ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    'unicorn/no-process-exit': ERROR,
    'unicorn/prefer-event-target': ERROR,
    'unicorn/prefer-json-parse-buffer': OFF,
    'unicorn/prefer-node-protocol': ERROR,
  },
};
