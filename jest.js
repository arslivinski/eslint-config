'use strict';

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

/**
 * @type {import('eslint').Linter.BaseConfig}
 */
module.exports = {
  env: {
    jest: true,
  },
  plugins: ['jest'],
  rules: {
    'jest/consistent-test-it': ERROR,
    'jest/expect-expect': ERROR,
    'jest/max-expects': OFF,
    'jest/max-nested-describe': OFF,
    'jest/no-alias-methods': ERROR,
    'jest/no-commented-out-tests': ERROR,
    'jest/no-conditional-expect': ERROR,
    'jest/no-conditional-in-test': ERROR,
    'jest/no-deprecated-functions': ERROR,
    'jest/no-disabled-tests': WARN,
    'jest/no-done-callback': ERROR,
    'jest/no-duplicate-hooks': ERROR,
    'jest/no-export': ERROR,
    'jest/no-focused-tests': ERROR,
    'jest/no-hooks': OFF,
    'jest/no-identical-title': ERROR,
    'jest/no-if': ERROR,
    'jest/no-interpolation-in-snapshots': ERROR,
    'jest/no-jasmine-globals': ERROR,
    'jest/no-large-snapshots': OFF,
    'jest/no-mocks-import': ERROR,
    'jest/no-restricted-jest-methods': OFF,
    'jest/no-restricted-matchers': OFF,
    'jest/no-standalone-expect': ERROR,
    'jest/no-test-prefixes': ERROR,
    'jest/no-test-return-statement': ERROR,
    'jest/no-untyped-mock-factory': OFF,
    'jest/prefer-called-with': ERROR,
    'jest/prefer-comparison-matcher': ERROR,
    'jest/prefer-each': ERROR,
    'jest/prefer-equality-matcher': ERROR,
    'jest/prefer-expect-assertions': ERROR,
    'jest/prefer-expect-resolves': OFF,
    'jest/prefer-hooks-in-order': ERROR,
    'jest/prefer-hooks-on-top': ERROR,
    'jest/prefer-lowercase-title': [ERROR, { ignore: ['describe'] }],
    'jest/prefer-mock-promise-shorthand': ERROR,
    'jest/prefer-snapshot-hint': ERROR,
    'jest/prefer-spy-on': ERROR,
    'jest/prefer-strict-equal': ERROR,
    'jest/prefer-to-be': ERROR,
    'jest/prefer-to-contain': ERROR,
    'jest/prefer-to-have-length': ERROR,
    'jest/prefer-todo': ERROR,
    'jest/require-hook': ERROR,
    'jest/require-to-throw-message': ERROR,
    'jest/require-top-level-describe': ERROR,
    'jest/valid-describe-callback': ERROR,
    'jest/valid-expect': ERROR,
    'jest/valid-expect-in-promise': ERROR,
    'jest/valid-title': ERROR,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'jest/no-untyped-mock-factory': ERROR,
      },
    },
  ],
};
