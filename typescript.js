'use strict';

const confusingBrowserGlobals = require('confusing-browser-globals');

const OFF = 'off';
const ERROR = 'error';

module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  settings: {
    'import/extensions': ['.ts', '.tsx', '.js', '.jsx'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: true,
      node: {
        extensions: ['.js', '.jsx'],
      },
    },
  },
  rules: {
    '@typescript-eslint/adjacent-overload-signatures': ERROR,
    '@typescript-eslint/array-type': [
      ERROR,
      {
        default: 'generic',
        readonly: 'generic',
      },
    ],
    '@typescript-eslint/await-thenable': ERROR,
    '@typescript-eslint/ban-ts-comment': [
      ERROR,
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': false,
        'ts-nocheck': false,
        'ts-check': false,
      },
    ],
    '@typescript-eslint/ban-tslint-comment': ERROR,
    '@typescript-eslint/ban-types': ERROR,
    '@typescript-eslint/class-literal-property-style': ERROR,
    '@typescript-eslint/consistent-generic-constructors': [ERROR, 'constructor'],
    '@typescript-eslint/consistent-indexed-object-style': [ERROR, 'record'],
    '@typescript-eslint/consistent-type-assertions': [
      ERROR,
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'never',
      },
    ],
    '@typescript-eslint/consistent-type-definitions': [ERROR, 'type'],
    '@typescript-eslint/consistent-type-exports': [ERROR, { fixMixedExportsWithInlineTypeSpecifier: true }],
    '@typescript-eslint/consistent-type-imports': [
      ERROR,
      {
        prefer: 'type-imports',
        disallowTypeAnnotations: true,
        fixStyle: 'inline-type-imports',
      },
    ],
    '@typescript-eslint/explicit-function-return-type': OFF,
    '@typescript-eslint/explicit-member-accessibility': [ERROR, { accessibility: 'no-public' }],
    '@typescript-eslint/explicit-module-boundary-types': [
      ERROR,
      {
        allowArgumentsExplicitlyTypedAsAny: false,
        allowDirectConstAssertionInArrowFunctions: false,
        allowHigherOrderFunctions: true,
        allowTypedFunctionExpressions: false,
      },
    ],
    '@typescript-eslint/member-ordering': [
      ERROR,
      {
        default: {
          order: 'natural-case-insensitive',
          memberTypes: [
            // Index signature
            'signature',
            'call-signature',

            // Abstract
            'public-abstract-field',
            'protected-abstract-field',

            ['public-abstract-get', 'public-abstract-set'],
            ['protected-abstract-get', 'protected-abstract-set'],

            'public-abstract-method',
            'protected-abstract-method',

            // Static
            'static-initialization',

            'public-static-field',
            'protected-static-field',
            'private-static-field',
            '#private-static-field',

            ['public-static-get', 'public-static-set'],
            ['protected-static-get', 'protected-static-set'],
            ['private-static-get', 'private-static-set'],
            ['#private-static-get', '#private-static-set'],

            'public-static-method',
            'protected-static-method',
            'private-static-method',
            '#private-static-method',

            // Fields
            'public-instance-field',
            'protected-instance-field',
            'private-instance-field',
            '#private-instance-field',

            // Constructors
            'public-constructor',
            'protected-constructor',
            'private-constructor',

            // Get,Set
            ['public-instance-get', 'public-instance-set'],
            ['protected-instance-get', 'protected-instance-set'],
            ['private-instance-get', 'private-instance-set'],
            ['#private-instance-get', '#private-instance-set'],

            // Methods
            'public-instance-method',
            'protected-instance-method',
            'private-instance-method',
            '#private-instance-method',
          ],
        },
      },
    ],
    '@typescript-eslint/method-signature-style': [ERROR, 'method'],
    'camelcase': 'off',
    '@typescript-eslint/naming-convention': [
      ERROR,
      {
        selector: 'default',
        format: ['strictCamelCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'function',
        format: ['strictCamelCase', 'StrictPascalCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'variable',
        format: ['strictCamelCase', 'UPPER_CASE'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
      {
        selector: 'variable',
        modifiers: ['destructured'],
        format: null, // eslint-disable-line unicorn/no-null
      },
      {
        selector: 'typeLike',
        format: ['StrictPascalCase'],
        leadingUnderscore: 'forbid',
        trailingUnderscore: 'forbid',
      },
    ],
    '@typescript-eslint/no-base-to-string': ERROR,
    '@typescript-eslint/no-confusing-non-null-assertion': ERROR,
    '@typescript-eslint/no-confusing-void-expression': [ERROR, { ignoreArrowShorthand: true }],
    '@typescript-eslint/no-duplicate-enum-values': ERROR,
    '@typescript-eslint/no-dynamic-delete': ERROR,
    '@typescript-eslint/no-empty-interface': ERROR,
    '@typescript-eslint/no-explicit-any': ERROR,
    '@typescript-eslint/no-extra-non-null-assertion': ERROR,
    '@typescript-eslint/no-extraneous-class': ERROR,
    '@typescript-eslint/no-floating-promises': ERROR,
    '@typescript-eslint/no-for-in-array': ERROR,
    '@typescript-eslint/no-inferrable-types': [ERROR, { ignoreParameters: true, ignoreProperties: true }],
    '@typescript-eslint/no-invalid-void-type': ERROR,
    '@typescript-eslint/no-meaningless-void-operator': ERROR,
    '@typescript-eslint/no-misused-new': ERROR,
    '@typescript-eslint/no-misused-promises': ERROR,
    '@typescript-eslint/no-namespace': ERROR,
    '@typescript-eslint/no-non-null-asserted-nullish-coalescing': ERROR,
    '@typescript-eslint/no-non-null-asserted-optional-chain': ERROR,
    '@typescript-eslint/no-non-null-assertion': ERROR,
    '@typescript-eslint/no-redundant-type-constituents': ERROR,
    '@typescript-eslint/no-require-imports': ERROR,
    '@typescript-eslint/no-this-alias': OFF,
    '@typescript-eslint/no-type-alias': OFF,
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': ERROR,
    '@typescript-eslint/no-unnecessary-condition': ERROR,
    '@typescript-eslint/no-unnecessary-qualifier': ERROR,
    '@typescript-eslint/no-unnecessary-type-arguments': ERROR,
    '@typescript-eslint/no-unnecessary-type-assertion': ERROR,
    '@typescript-eslint/no-unnecessary-type-constraint': ERROR,
    '@typescript-eslint/no-unsafe-argument': ERROR,
    '@typescript-eslint/no-unsafe-assignment': ERROR,
    '@typescript-eslint/no-unsafe-call': ERROR,
    '@typescript-eslint/no-unsafe-declaration-merging': ERROR,
    '@typescript-eslint/no-unsafe-member-access': ERROR,
    '@typescript-eslint/no-unsafe-return': ERROR,
    '@typescript-eslint/no-useless-empty-export': ERROR,
    '@typescript-eslint/no-var-requires': ERROR,
    '@typescript-eslint/non-nullable-type-assertion-style': ERROR,
    '@typescript-eslint/parameter-properties': OFF,
    '@typescript-eslint/prefer-as-const': ERROR,
    '@typescript-eslint/prefer-enum-initializers': ERROR,
    '@typescript-eslint/prefer-for-of': OFF,
    '@typescript-eslint/prefer-function-type': ERROR,
    '@typescript-eslint/prefer-includes': OFF,
    '@typescript-eslint/prefer-literal-enum-member': ERROR,
    '@typescript-eslint/prefer-namespace-keyword': ERROR,
    '@typescript-eslint/prefer-nullish-coalescing': ERROR,
    '@typescript-eslint/prefer-optional-chain': ERROR,
    '@typescript-eslint/prefer-readonly': ERROR,
    '@typescript-eslint/prefer-readonly-parameter-types': OFF,
    '@typescript-eslint/prefer-reduce-type-parameter': ERROR,
    '@typescript-eslint/prefer-regexp-exec': OFF,
    '@typescript-eslint/prefer-return-this-type': ERROR,
    '@typescript-eslint/prefer-string-starts-ends-with': OFF,
    '@typescript-eslint/prefer-ts-expect-error': ERROR,
    '@typescript-eslint/promise-function-async': OFF,
    '@typescript-eslint/require-array-sort-compare': ERROR,
    '@typescript-eslint/restrict-plus-operands': ERROR,
    '@typescript-eslint/restrict-template-expressions': OFF,
    '@typescript-eslint/sort-type-constituents': OFF,
    '@typescript-eslint/strict-boolean-expressions': ERROR,
    '@typescript-eslint/switch-exhaustiveness-check': ERROR,
    '@typescript-eslint/triple-slash-reference': ERROR,
    '@typescript-eslint/typedef': ERROR,
    '@typescript-eslint/unbound-method': ERROR,
    '@typescript-eslint/unified-signatures': ERROR,

    // Extension ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    'default-param-last': OFF,
    '@typescript-eslint/default-param-last': ERROR,

    'dot-notation': OFF,
    '@typescript-eslint/dot-notation': [ERROR, { allowKeywords: true }],

    // "init-declarations": OFF,
    '@typescript-eslint/init-declarations': OFF,

    'no-array-constructor': OFF,
    '@typescript-eslint/no-array-constructor': ERROR,

    'no-dupe-class-members': OFF,
    '@typescript-eslint/no-dupe-class-members': ERROR,

    'no-empty-function': OFF,
    '@typescript-eslint/no-empty-function': ERROR,

    'no-extra-semi': OFF,
    '@typescript-eslint/no-extra-semi': ERROR,

    'no-implied-eval': OFF,
    '@typescript-eslint/no-implied-eval': ERROR,

    'no-invalid-this': OFF,
    '@typescript-eslint/no-invalid-this': ERROR,

    'no-loop-func': OFF,
    '@typescript-eslint/no-loop-func': ERROR,

    'no-loss-of-precision': OFF,
    '@typescript-eslint/no-loss-of-precision': ERROR,

    // 'no-magic-numbers': OFF,
    '@typescript-eslint/no-magic-numbers': OFF,

    'no-redeclare': OFF,
    '@typescript-eslint/no-redeclare': ERROR,

    // 'no-restricted-imports': OFF,
    '@typescript-eslint/no-restricted-imports': OFF,

    'no-shadow': OFF,
    '@typescript-eslint/no-shadow': [
      ERROR,
      {
        allow: confusingBrowserGlobals,
        builtinGlobals: true,
        ignoreOnInitialization: true,
      },
    ],

    'no-throw-literal': OFF,
    '@typescript-eslint/no-throw-literal': ERROR,

    'no-unused-expressions': OFF,
    '@typescript-eslint/no-unused-expressions': [
      ERROR,
      {
        allowShortCircuit: false,
        allowTernary: false,
        enforceForJSX: true,
      },
    ],

    'no-unused-vars': OFF,
    '@typescript-eslint/no-unused-vars': [
      ERROR,
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],

    'no-use-before-define': OFF,
    '@typescript-eslint/no-use-before-define': [
      ERROR,
      {
        classes: true,
        functions: true,
        variables: true,
        allowNamedExports: false,
        enums: true,
        typedefs: true,
        ignoreTypeReferences: false,
      },
    ],

    'no-useless-constructor': OFF,
    '@typescript-eslint/no-useless-constructor': ERROR,

    'require-await': OFF,
    '@typescript-eslint/require-await': ERROR,

    'no-return-await': OFF,
    '@typescript-eslint/return-await': ERROR,

    // Style ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    '@typescript-eslint/brace-style': OFF,
    '@typescript-eslint/comma-dangle': OFF,
    '@typescript-eslint/comma-spacing': OFF,
    '@typescript-eslint/func-call-spacing': OFF,
    '@typescript-eslint/indent': OFF,
    '@typescript-eslint/keyword-spacing': OFF,
    '@typescript-eslint/lines-between-class-members': OFF,
    '@typescript-eslint/member-delimiter-style': OFF,
    '@typescript-eslint/no-extra-parens': OFF,
    '@typescript-eslint/object-curly-spacing': OFF,
    '@typescript-eslint/padding-line-between-statements': OFF,
    '@typescript-eslint/quotes': OFF,
    '@typescript-eslint/semi': OFF,
    '@typescript-eslint/space-before-blocks': OFF,
    '@typescript-eslint/space-before-function-paren': OFF,
    '@typescript-eslint/space-infix-ops': OFF,
    '@typescript-eslint/type-annotation-spacing': OFF,

    // Import Overrides ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    'import/extensions': [
      ERROR,
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],

    // React Overrides ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    'react/prop-types': OFF, // Use Types instead
  },
};
