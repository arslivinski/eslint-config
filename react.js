'use strict';

const OFF = 'off';
const ERROR = 'error';

module.exports = {
  plugins: ['react', 'react-hooks'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'react': {
      version: 'detect',
    },
    'import/extensions': ['.js', '.jsx'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
      },
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
    'react/function-component-definition': [
      ERROR,
      {
        namedComponents: 'function-declaration',
      },
    ],
    'react/hook-use-state': ERROR,
    'react/iframe-missing-sandbox': ERROR,
    'react/no-access-state-in-setstate': ERROR,
    'react/no-adjacent-inline-elements': OFF,
    'react/no-array-index-key': ERROR,
    'react/no-arrow-function-lifecycle': ERROR,
    'react/no-children-prop': ERROR,
    'react/no-danger-with-children': ERROR,
    'react/no-danger': ERROR,
    'react/no-deprecated': ERROR,
    'react/no-did-mount-set-state': OFF,
    'react/no-did-update-set-state': OFF,
    'react/no-direct-mutation-state': ERROR,
    'react/no-find-dom-node': ERROR,
    'react/no-invalid-html-attribute': ERROR,
    'react/no-is-mounted': ERROR,
    'react/no-multi-comp': ERROR,
    'react/no-namespace': ERROR,
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
    'react/no-unused-class-component-methods': ERROR,
    'react/no-unused-prop-types': ERROR,
    'react/no-unused-state': OFF,
    'react/no-will-update-set-state': OFF,
    'react/prefer-es6-class': ERROR,
    'react/prefer-exact-props': OFF,
    'react/prefer-read-only-props': OFF,
    'react/prefer-stateless-function': OFF,
    'react/prop-types': ERROR,
    'react/react-in-jsx-scope': OFF, // Enable if using old react and babel
    'react/require-default-props': OFF,
    'react/require-optimization': ERROR,
    'react/require-render-return': ERROR,
    'react/self-closing-comp': ERROR,
    'react/sort-comp': [
      ERROR,
      {
        order: ['static-methods', 'lifecycle', '/^handle.+$/', 'everything-else', '/^render.*$/'],
      },
    ],
    'react/sort-prop-types': OFF,
    'react/state-in-constructor': OFF,
    'react/static-property-placement': OFF,
    'react/style-prop-object': ERROR,
    'react/void-dom-elements-no-children': ERROR,

    // JSX ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    'react/jsx-boolean-value': ERROR,
    'react/jsx-curly-brace-presence': [
      ERROR,
      {
        props: 'never',
        children: 'never',
        propElementValues: 'always',
      },
    ],
    'react/jsx-filename-extension': OFF,
    'react/jsx-fragments': [ERROR, 'syntax'],
    'react/jsx-handler-names': ERROR,
    'react/jsx-key': ERROR,
    'react/jsx-max-depth': OFF,
    'react/jsx-no-bind': OFF,
    'react/jsx-no-comment-textnodes': ERROR,
    'react/jsx-no-constructed-context-values': OFF,
    'react/jsx-no-duplicate-props': ERROR,
    'react/jsx-no-leaked-render': ERROR,
    'react/jsx-no-literals': OFF,
    'react/jsx-no-script-url': ERROR,
    'react/jsx-no-target-blank': ERROR,
    'react/jsx-no-undef': ERROR,
    'react/jsx-no-useless-fragment': ERROR,
    'react/jsx-pascal-case': ERROR,
    'react/jsx-props-no-spreading': OFF,
    'react/jsx-sort-default-props': OFF,
    'react/jsx-sort-props': [
      ERROR,
      {
        callbacksLast: false,
        shorthandFirst: false,
        shorthandLast: true,
        multiline: 'ignore',
        ignoreCase: true,
        noSortAlphabetically: true,
        reservedFirst: true,
        locale: 'auto',
      },
    ],
    'react/jsx-uses-react': OFF, // Enable if using old react and babel
    'react/jsx-uses-vars': ERROR,

    // Style rules ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    'react/jsx-child-element-spacing': OFF,
    'react/jsx-closing-bracket-location': OFF,
    'react/jsx-closing-tag-location': OFF,
    'react/jsx-curly-newline': OFF,
    'react/jsx-curly-spacing': OFF,
    'react/jsx-equals-spacing': OFF,
    'react/jsx-first-prop-new-line': OFF,
    'react/jsx-indent-props': OFF,
    'react/jsx-indent': OFF,
    'react/jsx-max-props-per-line': OFF,
    'react/jsx-newline': OFF,
    'react/jsx-one-expression-per-line': OFF,
    'react/jsx-props-no-multi-spaces': OFF,
    'react/jsx-space-before-closing': OFF, // DEPRECATED
    'react/jsx-tag-spacing': OFF,
    'react/jsx-wrap-multilines': OFF,

    // React Hooks ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    'react-hooks/rules-of-hooks': ERROR,
    'react-hooks/exhaustive-deps': ERROR,
  },
};
