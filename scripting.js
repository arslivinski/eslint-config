'use strict';

const OFF = 'off';
const ERROR = 'error';

/**
 * @type {import('eslint').Linter.BaseConfig}
 */
module.exports = {
  rules: {
    'no-console': OFF,
    'import/no-extraneous-dependencies': [
      ERROR,
      {
        devDependencies: true,
        optionalDependencies: true,
        peerDependencies: true,
      },
    ],
  },
};
