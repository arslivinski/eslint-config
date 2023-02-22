'use strict';

const OFF = 'off';
const ERROR = 'error';

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
