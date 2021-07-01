'use strict';

const confusingBrowserGlobals = require('confusing-browser-globals');

const OFF = 'off';
const WARN = 'warn';
const ERROR = 'error';

module.exports = {
  root: true,
  ignorePatterns: ['!.*.js', 'build/', 'coverage/', 'dist/', 'node_modules/'],
  env: {
    es6: true,
    es2017: true,
    es2020: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  reportUnusedDisableDirectives: true,
  plugins: ['import'],
  rules: {
    'accessor-pairs': OFF,
    'array-bracket-newline': [ERROR, { multiline: true }],
    'array-bracket-spacing': [ERROR, 'never'],
    'array-callback-return': [
      ERROR,
      {
        allowImplicit: true,
        checkForEach: true,
      },
    ],
    'array-element-newline': [
      ERROR,
      {
        ArrayExpression: { multiline: true },
        ArrayPattern: 'never',
      },
    ],
    'arrow-body-style': [ERROR, 'as-needed', { requireReturnForObjectLiteral: true }],
    'arrow-parens': [ERROR, 'always'],
    'arrow-spacing': ERROR,
    'block-scoped-var': ERROR,
    'block-spacing': [ERROR, 'always'],
    'brace-style': [ERROR, '1tbs', { allowSingleLine: false }],
    'camelcase': [
      ERROR,
      {
        ignoreDestructuring: false,
        ignoreImports: false,
        properties: 'always',
      },
    ],
    'capitalized-comments': OFF,
    'class-methods-use-this': [ERROR, { exceptMethods: ['handleEvent'] }],
    'comma-dangle': [ERROR, 'always-multiline'],
    'comma-spacing': [
      ERROR,
      {
        before: false,
        after: true,
      },
    ],
    'comma-style': [ERROR, 'last'],
    'complexity': OFF,
    'computed-property-spacing': [ERROR, 'never', { enforceForClassMembers: true }],
    'consistent-return': ERROR,
    'consistent-this': OFF,
    'constructor-super': ERROR,
    'curly': [ERROR, 'all'],
    'default-case': [ERROR, { commentPattern: '^no default$' }],
    'default-case-last': ERROR,
    'default-param-last': ERROR,
    'dot-location': [ERROR, 'property'],
    'dot-notation': [ERROR, { allowKeywords: true }],
    'eol-last': [ERROR, 'always'],
    'eqeqeq': [ERROR, 'always', { null: 'ignore' }],
    'for-direction': ERROR,
    'func-call-spacing': [ERROR, 'never'],
    'func-name-matching': [
      ERROR,
      'always',
      {
        considerPropertyDescriptor: true,
        includeCommonJSModuleExports: false,
      },
    ],
    'func-names': [ERROR, 'as-needed'],
    'func-style': [ERROR, 'declaration'],
    'function-call-argument-newline': [ERROR, 'consistent'],
    'function-paren-newline': [ERROR, 'multiline'],
    'generator-star-spacing': [
      ERROR,
      {
        before: false,
        after: true,
      },
    ],
    'getter-return': [ERROR, { allowImplicit: false }],
    'grouped-accessor-pairs': [ERROR, 'getBeforeSet'],
    'guard-for-in': ERROR,
    'id-denylist': OFF,
    'id-length': OFF,
    'id-match': OFF,
    'implicit-arrow-linebreak': [ERROR, 'beside'],
    'indent': [
      ERROR,
      2,
      {
        ArrayExpression: 1,
        CallExpression: { arguments: 1 },
        FunctionDeclaration: {
          body: 1,
          parameters: 1,
        },
        FunctionExpression: {
          body: 1,
          parameters: 1,
        },
        ImportDeclaration: 1,
        MemberExpression: 1,
        ObjectExpression: 1,
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        flatTernaryExpressions: false,
        offsetTernaryExpressions: true,
        ignoreComments: false,
        ignoredNodes: [],
      },
    ],
    'init-declarations': OFF,
    'jsx-quotes': [ERROR, 'prefer-double'],
    'key-spacing': [
      ERROR,
      {
        beforeColon: false,
        afterColon: true,
        mode: 'strict',
      },
    ],
    'keyword-spacing': [
      ERROR,
      {
        before: true,
        after: true,
      },
    ],
    'line-comment-position': OFF,
    'linebreak-style': [ERROR, 'unix'],
    'lines-around-comment': OFF,
    'lines-between-class-members': [ERROR, 'always', { exceptAfterSingleLine: true }],
    'max-classes-per-file': [ERROR, 1],
    'max-depth': OFF,
    'max-len': [
      ERROR,
      {
        code: 100,
        comments: 100,
        tabWidth: 2,
        ignoreComments: false,
        ignoreTrailingComments: false,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'max-lines': OFF,
    'max-lines-per-function': OFF,
    'max-nested-callbacks': OFF,
    'max-params': OFF,
    'max-statements': OFF,
    'max-statements-per-line': OFF,
    'multiline-comment-style': OFF,
    'multiline-ternary': [ERROR, 'always-multiline'],
    'new-cap': OFF,
    'new-parens': [ERROR, 'always'],
    'newline-per-chained-call': [ERROR, { ignoreChainWithDepth: 4 }],
    'no-alert': ERROR,
    'no-array-constructor': ERROR,
    'no-async-promise-executor': ERROR,
    'no-await-in-loop': OFF,
    'no-bitwise': OFF,
    'no-caller': ERROR,
    'no-case-declarations': ERROR,
    'no-class-assign': ERROR,
    'no-compare-neg-zero': ERROR,
    'no-cond-assign': [ERROR, 'always'],
    'no-confusing-arrow': ERROR,
    'no-console': ERROR,
    'no-const-assign': ERROR,
    'no-constant-condition': ERROR,
    'no-constructor-return': ERROR,
    'no-continue': ERROR,
    'no-control-regex': ERROR,
    'no-debugger': ERROR,
    'no-delete-var': ERROR,
    'no-div-regex': OFF,
    'no-dupe-args': ERROR,
    'no-dupe-class-members': ERROR,
    'no-dupe-else-if': ERROR,
    'no-dupe-keys': ERROR,
    'no-duplicate-case': ERROR,
    'no-duplicate-imports': OFF, // Will be handled by the import-plugin
    'no-else-return': [ERROR, { allowElseIf: false }],
    'no-empty': ERROR,
    'no-empty-character-class': ERROR,
    'no-empty-function': ERROR,
    'no-empty-pattern': ERROR,
    'no-eq-null': OFF,
    'no-eval': ERROR,
    'no-ex-assign': ERROR,
    'no-extend-native': ERROR,
    'no-extra-bind': ERROR,
    'no-extra-boolean-cast': [ERROR, { enforceForLogicalOperands: true }],
    'no-extra-label': ERROR,
    'no-extra-parens': [
      ERROR,
      'all',
      {
        conditionalAssign: true,
        returnAssign: true,
        nestedBinaryExpressions: false,
        ignoreJSX: 'all',
        enforceForArrowConditionals: false,
        enforceForSequenceExpressions: false,
        enforceForNewInMemberExpressions: false,
        enforceForFunctionPrototypeMethods: false,
      },
    ],
    'no-extra-semi': ERROR,
    'no-fallthrough': ERROR,
    'no-floating-decimal': ERROR,
    'no-func-assign': ERROR,
    'no-global-assign': ERROR,
    'no-implicit-coercion': ERROR,
    'no-implicit-globals': ERROR,
    'no-implied-eval': ERROR,
    'no-import-assign': ERROR,
    'no-inline-comments': OFF,
    'no-inner-declarations': ERROR,
    'no-invalid-regexp': ERROR,
    'no-invalid-this': ERROR,
    'no-irregular-whitespace': ERROR,
    'no-iterator': ERROR,
    'no-label-var': ERROR,
    'no-labels': [ERROR, { allowLoop: true }],
    'no-lone-blocks': ERROR,
    'no-lonely-if': ERROR,
    'no-loop-func': ERROR,
    'no-loss-of-precision': ERROR,
    'no-magic-numbers': OFF,
    'no-misleading-character-class': ERROR,
    'no-mixed-operators': ERROR,
    'no-mixed-spaces-and-tabs': ERROR,
    'no-multi-assign': ERROR,
    'no-multi-spaces': ERROR,
    'no-multi-str': ERROR,
    'no-multiple-empty-lines': ERROR,
    'no-negated-condition': ERROR,
    'no-nested-ternary': ERROR,
    'no-new': ERROR,
    'no-new-func': ERROR,
    'no-new-object': ERROR,
    'no-new-symbol': ERROR,
    'no-new-wrappers': ERROR,
    'no-nonoctal-decimal-escape': ERROR,
    'no-obj-calls': ERROR,
    'no-octal': ERROR,
    'no-octal-escape': ERROR,
    'no-param-reassign': ERROR,
    'no-plusplus': ERROR,
    'no-promise-executor-return': ERROR,
    'no-proto': ERROR,
    'no-prototype-builtins': ERROR,
    'no-redeclare': ERROR,
    'no-regex-spaces': ERROR,
    'no-restricted-exports': [ERROR, { restrictedNamedExports: ['default', 'then'] }],
    'no-restricted-globals': [ERROR, 'isFinite', 'isNaN'].concat(confusingBrowserGlobals),
    'no-restricted-imports': OFF,
    'no-restricted-properties': OFF,
    'no-restricted-syntax': OFF,
    'no-return-assign': [ERROR, 'always'],
    'no-return-await': ERROR,
    'no-script-url': ERROR,
    'no-self-assign': [ERROR, { props: true }],
    'no-self-compare': ERROR,
    'no-sequences': ERROR,
    'no-setter-return': ERROR,
    'no-shadow': [
      ERROR,
      {
        builtinGlobals: true,
        allow: confusingBrowserGlobals,
      },
    ],
    'no-shadow-restricted-names': ERROR,
    'no-sparse-arrays': ERROR,
    'no-tabs': OFF,
    'no-template-curly-in-string': ERROR,
    'no-ternary': OFF,
    'no-this-before-super': ERROR,
    'no-throw-literal': ERROR,
    'no-trailing-spaces': ERROR,
    'no-undef': ERROR,
    'no-undef-init': ERROR,
    'no-undefined': ERROR,
    'no-underscore-dangle': OFF,
    'no-unexpected-multiline': ERROR,
    'no-unmodified-loop-condition': ERROR,
    'no-unneeded-ternary': OFF,
    'no-unreachable': ERROR,
    'no-unreachable-loop': ERROR,
    'no-unsafe-finally': ERROR,
    'no-unsafe-negation': [ERROR, { enforceForOrderingRelations: true }],
    'no-unsafe-optional-chaining': [ERROR, { disallowArithmeticOperators: true }],
    'no-unused-expressions': OFF,
    'no-unused-labels': ERROR,
    'no-unused-vars': [
      ERROR,
      {
        vars: 'all',
        args: 'after-used',
        ignoreRestSiblings: true,
      },
    ],
    'no-use-before-define': [
      ERROR,
      {
        functions: true,
        classes: true,
        variables: true,
      },
    ],
    'no-useless-backreference': ERROR,
    'no-useless-call': ERROR,
    'no-useless-catch': ERROR,
    'no-useless-computed-key': [ERROR, { enforceForClassMembers: true }],
    'no-useless-concat': ERROR,
    'no-useless-constructor': ERROR,
    'no-useless-escape': ERROR,
    'no-useless-rename': ERROR,
    'no-useless-return': ERROR,
    'no-var': ERROR,
    'no-void': ERROR,
    'no-warning-comments': OFF,
    'no-whitespace-before-property': ERROR,
    'no-with': ERROR,
    'nonblock-statement-body-position': OFF,
    'object-curly-newline': [
      ERROR,
      {
        multiline: true,
        consistent: true,
      },
    ],
    'object-curly-spacing': [ERROR, 'always'],
    'object-property-newline': [ERROR, { allowAllPropertiesOnSameLine: false }],
    'object-shorthand': [
      ERROR,
      'always',
      {
        avoidQuotes: true,
        ignoreConstructors: false,
      },
    ],
    'one-var': [ERROR, 'never'],
    'one-var-declaration-per-line': OFF,
    'operator-assignment': [ERROR, 'always'],
    'operator-linebreak': [ERROR, 'before', { overrides: { '=': 'none' } }],
    'padded-blocks': [ERROR, 'never'],
    'padding-line-between-statements': OFF,
    'prefer-arrow-callback': [
      ERROR,
      {
        allowNamedFunctions: true,
        allowUnboundThis: false,
      },
    ],
    'prefer-const': [
      ERROR,
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: true,
      },
    ],
    'prefer-destructuring': OFF,
    'prefer-exponentiation-operator': ERROR,
    'prefer-named-capture-group': OFF,
    'prefer-numeric-literals': ERROR,
    'prefer-object-spread': ERROR,
    'prefer-promise-reject-errors': ERROR,
    'prefer-regex-literals': ERROR,
    'prefer-rest-params': ERROR,
    'prefer-spread': ERROR,
    'prefer-template': ERROR,
    'quote-props': [ERROR, 'consistent-as-needed'],
    'quotes': [ERROR, 'single', { avoidEscape: true }],
    'radix': [ERROR, 'always'],
    'require-atomic-updates': ERROR,
    'require-await': OFF,
    'require-unicode-regexp': OFF,
    'require-yield': ERROR,
    'rest-spread-spacing': [ERROR, 'never'],
    'semi': [ERROR, 'always'],
    'semi-spacing': [
      ERROR,
      {
        before: false,
        after: true,
      },
    ],
    'semi-style': [ERROR, 'last'],
    'sort-imports': OFF, // Will be handled by the import-plugin
    'sort-keys': OFF,
    'sort-vars': OFF,
    'space-before-blocks': [ERROR, 'always'],
    'space-before-function-paren': [ERROR, 'never'],
    'space-in-parens': [ERROR, 'never'],
    'space-infix-ops': ERROR,
    'space-unary-ops': ERROR,
    'spaced-comment': [ERROR, 'always'],
    'strict': OFF,
    'switch-colon-spacing': [
      ERROR,
      {
        before: false,
        after: true,
      },
    ],
    'symbol-description': ERROR,
    'template-curly-spacing': [ERROR, 'never'],
    'template-tag-spacing': [ERROR, 'never'],
    'unicode-bom': [ERROR, 'never'],
    'use-isnan': [
      ERROR,
      {
        enforceForSwitchCase: true,
        enforceForIndexOf: true,
      },
    ],
    'valid-typeof': [ERROR, { requireStringLiterals: true }],
    'vars-on-top': ERROR,
    'wrap-iife': [ERROR, 'outside', { functionPrototypeMethods: false }],
    'wrap-regex': OFF,
    'yield-star-spacing': [ERROR, 'after'],
    'yoda': ERROR,

    'import/default': ERROR,
    'import/dynamic-import-chunkname': OFF,
    'import/export': ERROR,
    'import/exports-last': ERROR,
    'import/extensions': [ERROR, 'ignorePackages'],
    'import/first': ERROR,
    'import/group-exports': ERROR,
    'import/max-dependencies': OFF,
    'import/named': ERROR,
    'import/namespace': ERROR,
    'import/newline-after-import': ERROR,
    'import/no-absolute-path': ERROR,
    'import/no-amd': ERROR,
    'import/no-anonymous-default-export': [
      ERROR,
      {
        allowArray: false,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: false,
        allowLiteral: false,
        allowObject: false,
      },
    ],
    'import/no-commonjs': ERROR,
    'import/no-cycle': [ERROR, { ignoreExternal: true }],
    'import/no-default-export': ERROR,
    'import/no-deprecated': WARN,
    'import/no-duplicates': [ERROR, { considerQueryString: true }],
    'import/no-dynamic-require': ERROR,
    'import/no-extraneous-dependencies': [
      ERROR,
      {
        devDependencies: false,
        optionalDependencies: true,
        peerDependencies: true,
      },
    ],
    'import/no-import-module-exports': ERROR,
    'import/no-internal-modules': OFF,
    'import/no-mutable-exports': ERROR,
    'import/no-named-as-default': ERROR,
    'import/no-named-as-default-member': OFF,
    'import/no-named-default': ERROR,
    'import/no-named-export': OFF,
    'import/no-namespace': ERROR,
    'import/no-nodejs-modules': ERROR,
    'import/no-relative-packages': OFF,
    'import/no-relative-parent-imports': OFF,
    'import/no-restricted-paths': OFF,
    'import/no-self-import': ERROR,
    'import/no-unassigned-import': ERROR,
    'import/no-unresolved': ERROR,
    'import/no-unused-modules': [
      ERROR,
      {
        missingExports: true,
        unusedExports: true,
      },
    ],
    'import/no-useless-path-segments': ERROR,
    'import/no-webpack-loader-syntax': ERROR,
    'import/order': [
      ERROR,
      {
        'groups': ['builtin', 'external', 'internal', 'parent', 'sibling'],
        'newlines-between': 'never',
        'alphabetize': {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/prefer-default-export': OFF,
    'import/unambiguous': ERROR,
  },
  overrides: [
    {
      files: ['./.*.js', './.*.cjs', './*.js', './*.cjs', './scripts/**/*.js', './scripts/**/*.cjs'],
      env: {
        node: true,
      },
      parserOptions: {
        sourceType: 'script',
      },
      rules: {
        'no-console': OFF,
        'strict': [ERROR, 'global'],
        'import/no-commonjs': OFF,
        'import/no-extraneous-dependencies': [
          ERROR,
          {
            devDependencies: true,
            optionalDependencies: false,
            peerDependencies: false,
          },
        ],
        'import/no-nodejs-modules': OFF,
        'import/no-unused-modules': OFF,
      },
    },
  ],
};
