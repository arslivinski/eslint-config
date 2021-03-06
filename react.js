'use strict';

const OFF = 'off';
const ERROR = 'error';

module.exports = {
  plugins: [
    'react',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/boolean-prop-naming': ERROR,
    'react/button-has-type': ERROR,
    'react/default-props-match-prop-types': ERROR,
    'react/destructuring-assignment': OFF,
    'react/display-name': ERROR,
    'react/forbid-component-props': OFF,
    'react/forbid-dom-props': OFF,
    'react/forbid-elements': OFF,
    'react/forbid-foreign-prop-types': ERROR,
    'react/forbid-prop-types': OFF,
    'react/function-component-definition': [ERROR, { namedComponents: 'function-declaration' }],
    'react/no-access-state-in-setstate': ERROR,
    'react/no-adjacent-inline-elements': OFF,
    'react/no-array-index-key': ERROR,
    'react/no-children-prop': ERROR,
    'react/no-danger': ERROR,
    'react/no-danger-with-children': ERROR,
    'react/no-deprecated': ERROR,
    'react/no-did-mount-set-state': OFF,
    'react/no-did-update-set-state': OFF,
    'react/no-direct-mutation-state': ERROR,
    'react/no-find-dom-node': ERROR,
    'react/no-is-mounted': ERROR,
    'react/no-multi-comp': ERROR,
    'react/no-redundant-should-component-update': ERROR,
    'react/no-render-return-value': ERROR,
    'react/no-set-state': OFF,
    'react/no-string-refs': ERROR,
    'react/no-this-in-sfc': ERROR,
    'react/no-typos': ERROR,
    'react/no-unescaped-entities': OFF,
    'react/no-unknown-property': ERROR,
    'react/no-unsafe': ERROR,
    'react/no-unstable-nested-components': OFF,
    'react/no-unused-prop-types': ERROR,
    'react/no-unused-state': OFF,
    'react/no-will-update-set-state': OFF,
    'react/prefer-es6-class': ERROR,
    'react/prefer-read-only-props': OFF,
    'react/prefer-stateless-function': OFF,
    'react/prop-types': ERROR,
    'react/react-in-jsx-scope': OFF, // Enable if using old react and babel
    'react/require-default-props': OFF,
    'react/require-optimization': ERROR,
    'react/require-render-return': ERROR,
    'react/self-closing-comp': ERROR,
    'react/sort-comp': [ERROR, {
      order: [
        'static-methods',
        'lifecycle',
        '/^handle.+$/',
        'everything-else',
        '/^render.*$/',
      ],
    }],
    'react/sort-prop-types': OFF,
    'react/state-in-constructor': OFF,
    'react/static-property-placement': OFF,
    'react/style-prop-object': ERROR,
    'react/void-dom-elements-no-children': ERROR,

    'react/jsx-boolean-value': ERROR,
    'react/jsx-child-element-spacing': OFF,
    'react/jsx-closing-bracket-location': ERROR,
    'react/jsx-closing-tag-location': ERROR,
    'react/jsx-curly-brace-presence': ERROR,
    'react/jsx-curly-newline': ERROR,
    'react/jsx-curly-spacing': ERROR,
    'react/jsx-equals-spacing': ERROR,
    'react/jsx-filename-extension': OFF,
    'react/jsx-first-prop-new-line': ERROR,
    'react/jsx-fragments': [ERROR, 'syntax'],
    'react/jsx-handler-names': ERROR,
    'react/jsx-indent': [ERROR, 2, {
      checkAttributes: true,
      indentLogicalExpressions: true,
    }],
    'react/jsx-indent-props': [ERROR, 2],
    'react/jsx-key': ERROR,
    'react/jsx-max-depth': OFF,
    'react/jsx-max-props-per-line': OFF,
    'react/jsx-newline': OFF,
    'react/jsx-no-bind': OFF,
    'react/jsx-no-comment-textnodes': ERROR,
    'react/jsx-no-constructed-context-values': OFF,
    'react/jsx-no-duplicate-props': ERROR,
    'react/jsx-no-literals': OFF,
    'react/jsx-no-script-url': ERROR,
    'react/jsx-no-target-blank': ERROR,
    'react/jsx-no-undef': ERROR,
    'react/jsx-no-useless-fragment': ERROR,
    'react/jsx-one-expression-per-line': OFF,
    'react/jsx-pascal-case': ERROR,
    'react/jsx-props-no-multi-spaces': ERROR,
    'react/jsx-props-no-spreading': OFF,
    'react/jsx-sort-default-props': OFF,
    'react/jsx-sort-props': OFF,
    'react/jsx-space-before-closing': OFF, // DEPRECATED
    'react/jsx-tag-spacing': ERROR,
    'react/jsx-uses-react': OFF, // Enable if using old react and babel
    'react/jsx-uses-vars': ERROR,
    'react/jsx-wrap-multilines': [ERROR, {
      arrow: 'parens-new-line',
      assignment: 'parens-new-line',
      condition: 'parens-new-line',
      declaration: 'parens-new-line',
      logical: 'parens-new-line',
      prop: 'parens-new-line',
      return: 'parens-new-line',
    }],
  },
};
