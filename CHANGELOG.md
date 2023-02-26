# Changelog

## [Unreleased]

### Changed

- Updated `eslint` to 8.35.0

## [1.0.0-alpha.18] - 2023-02-22

### Added

- Added the following modules:
  - `browser`
  - `commonjs`
  - `module`
  - `node`
  - `script`
  - `scripting`
  - `serviceworker`
  - `webextension`
  - `worker`

#### TypeScript

- Added an override for `*.d.ts` files

### Changed

#### Base

- Removed the sourceType configuration
- Enabled the rule `accessor-pairs`
- On the rule `no-shadow`, removed the `allow` option and added the `hoist` option
- On the rule `import/order`, added the option `warnOnUnassignedImports` and a path group to the root of the package using `~/`
- Turned off the rule `unicorn/no-null`
- Turned off the rule `unicorn/prefer-top-level-await`
- Turned off the following rules as they are configured in other modules now:
  - `no-alert`
  - `no-restricted-globals`
  - `no-script-url`
  - `unicorn/no-document-cookie`
  - `unicorn/no-process-exit`
  - `unicorn/prefer-add-event-listener`
  - `unicorn/prefer-dom-node-append`
  - `unicorn/prefer-dom-node-dataset`
  - `unicorn/prefer-dom-node-remove`
  - `unicorn/prefer-dom-node-text-content`
  - `unicorn/prefer-event-target`
  - `unicorn/prefer-json-parse-buffer`
  - `unicorn/prefer-keyboard-event-key`
  - `unicorn/prefer-modern-dom-apis`
  - `unicorn/prefer-module`
  - `unicorn/prefer-node-protocol`
  - `unicorn/prefer-query-selector`
  - `unicorn/require-post-message-target-origin`

## [1.0.0-alpha.17] - 2023-02-22

### Added

#### Base

- Added the config `reportUnusedDisableDirectives` back
- Added the rule `import/consistent-type-specifier-style`
- Added the rule `import/no-empty-named-blocks`

#### React

- Added the rule `react/no-object-type-as-default-prop`
- Added the rule `react/sort-default-props`

#### TypeScript

- Added the rule `@typescript-eslint/block-spacing`
- Added the rule `@typescript-eslint/key-spacing`
- Added the rule `@typescript-eslint/no-import-type-side-effects`
- Added the rule `@typescript-eslint/no-mixed-enums`

### Changed

- Updated `eslint` to 8.34.0

#### Base

- Updated `eslint-plugin-import` to 2.27.5

#### React

- Updated `eslint-plugin-react` to 7.32.2

#### TypeScript

- Updated `@typescript-eslint/eslint-plugin` to 5.53.0
- Updated `@typescript-eslint/parser` to 5.53.0
- Updated `eslint-import-resolver-typescript` to 3.5.3
- Changed the `typescript` peerDependency to accept any version
- Changed file extensions resolution

## [1.0.0-alpha.16] - 2022-12-31

### Changed

#### Base

- Turned off the rule `no-undefined`, the ideia is to not use `null` anymore

## [1.0.0-alpha.15] - 2022-12-31

### Changed

- Updated ESLint to 8.31.0

#### Base

- Removed the config `reportUnusedDisableDirectives`

#### TypeScript

- Turned off the rule `no-undef` due a bug

## [1.0.0-alpha.14] - 2022-12-30

### Added

#### Base

- Plugin `unicorn` and all it's rules

#### TypeScript

- TypeScript configuration with all it's rules

### Changed

#### Base

- Re-added the `parserOptions` option `sourceType`
- Removed settings to resolve `.mjs` and `.cjs` extensions

#### React

- Removed settings to resolve `.mjs` and `.cjs` extensions

## [1.0.0-alpha.13] - 2022-12-30

### Added

#### React

- Added the rule `react-hooks/exhaustive-deps`
- Added the rule `react-hooks/rules-of-hooks`

### Changed

#### Base

- Removed the `ignorePatterns` option
- Removed unnecessary envs (https://github.com/eslint/eslint/discussions/16725)
- Removed the `browser` env
- Changed the `parserOptions` option `ecmaVersion` to `latest`
- Removed the `parserOptions` option `sourceType`
- Added settings to resolve `.mjs` and `.cjs` extensions
- The option `allowImplicit` of the rule `array-callback-return` to `false`
- The option `ignoreDestructuring` of the rule `camelcase` to `true`
- Added the option `ignoreGlobals` to the rule `camelcase`
- The option `ignoreImports` of the rule `camelcase` to `true`
- Removed the option `exceptMethods` of the rule `class-methods-use-this`
- Removed the option `commentPattern` of the rule `default-case`
- Removed the option `allowKeywords` of the rule `dot-notation`
- Turned on the rule `new-cap`
- Turned on the rule `no-div-regex`
- Added the option `allowSwitch` to the rule `no-labels`
- Turned off the rule `no-new-symbol` as it is handled by the rule `no-new-native-nonconstructor`
- Added the option `allowForLoopAfterthoughts` to the rule `no-plusplus`
- Removed the options `isFinite` and `isNaN` from the rule `no-restricted-globals`
- Turned on the rule `no-underscore-dangle`
- Turned on the rule `no-unneeded-ternary`
- Turned on the rule `no-unused-expressions`
- Added the option `allowNamedExports` to the rule `no-use-before-define`
- Added the option `avoidExplicitReturnArrows` to the rule `object-shorthand`
- Turned on the rule `one-var-declaration-per-line`
- Turned on the rule `require-await`
- Turned on the rule `require-unicode-regexp`
- Turned on the rule `strict`
- Turned off the rule `import/exports-last`
- Turned off the rule `import/group-exports`
- The option `groups` of the rule `import/order`, grouping `parent` and `sibling` imports
- The option `newlines-between` of the rule `import/order` to `always`
- Turned off the following stylistic rules in preference of a formatter:
  - `array-bracket-newline`
  - `array-bracket-spacing`
  - `array-element-newline`
  - `arrow-parens`
  - `arrow-spacing`
  - `block-spacing`
  - `brace-style`
  - `comma-dangle`
  - `comma-spacing`
  - `comma-style`
  - `computed-property-spacing`
  - `dot-location`
  - `eol-last`
  - `func-call-spacing`
  - `function-call-argument-newline`
  - `function-paren-newline`
  - `generator-star-spacing`
  - `implicit-arrow-linebreak`
  - `indent`
  - `jsx-quotes`
  - `key-spacing`
  - `keyword-spacing`
  - `line-comment-position`
  - `linebreak-style`
  - `lines-around-comment`
  - `lines-between-class-members`
  - `max-len`
  - `max-statements-per-line`
  - `multiline-ternary`
  - `new-parens`
  - `newline-per-chained-call`
  - `no-extra-parens`
  - `no-mixed-spaces-and-tabs`
  - `no-multi-spaces`
  - `no-multiple-empty-lines`
  - `no-tabs`
  - `no-trailing-spaces`
  - `no-whitespace-before-property`
  - `nonblock-statement-body-position`
  - `object-curly-newline`
  - `object-curly-spacing`
  - `object-property-newline`
  - `operator-linebreak`
  - `padded-blocks`
  - `padding-line-between-statements`
  - `quotes`
  - `rest-spread-spacing`
  - `semi`
  - `semi-spacing`
  - `semi-style`
  - `space-before-blocks`
  - `space-before-function-paren`
  - `space-in-parens`
  - `space-infix-ops`
  - `space-unary-ops`
  - `switch-colon-spacing`
  - `template-curly-spacing`
  - `template-tag-spacing`
  - `unicode-bom`
  - `wrap-iife`
  - `wrap-regex`
  - `yield-star-spacing`

#### React

- Added settings to resolve `.jsx` extensions
- Turned on the rule `react/jsx-sort-props`
- Turned off the following stylistic rules in preference of a formatter:
  - `react/jsx-child-element-spacing`
  - `react/jsx-closing-bracket-location`
  - `react/jsx-closing-tag-location`
  - `react/jsx-curly-newline`
  - `react/jsx-curly-spacing`
  - `react/jsx-equals-spacing`
  - `react/jsx-first-prop-new-line`
  - `react/jsx-indent-props`
  - `react/jsx-indent`
  - `react/jsx-max-props-per-line`
  - `react/jsx-newline`
  - `react/jsx-one-expression-per-line`
  - `react/jsx-props-no-multi-spaces`
  - `react/jsx-space-before-closing`
  - `react/jsx-tag-spacing`
  - `react/jsx-wrap-multilines`

## [1.0.0-alpha.12] - 2022-12-28

### Added

- Added the rule 'no-constant-binary-expression'
- Added the option 'allowEmptyCase' to the rule 'no-fallthrough'
- Added the rule 'no-new-native-nonconstructor'
- Added the rule 'no-empty-static-block'
- Added the rule 'react/jsx-no-leaked-render'

### Changed

- Update ESLint to 8.30.0
- Update eslint-plugin-import to 2.26.0
- Update eslint-plugin-react to 7.31.11

## [1.0.0-alpha.11] - 2022-03-06

### Added

- Added env globals for ES2016, ES2018, ES2019 and ES2022
- Added option 'ignoreOnInitialization' to the rule 'no-shadow'

### Changed

- Update ESLint to 8.10.0
- Update eslint-plugin-import to 2.25.4
- Update eslint-plugin-react to 7.29.3

## [1.0.0-alpha.10] - 2021-12-21

### Added

- prefer-object-has-own

### Changed

- Update ESLint to 8.5.0
- Update confusing-browser-globals to 1.0.11

## [1.0.0-alpha.9] - 2021-12-12

### Changed

- Update ESLint to 8.4.0

## [1.0.0-alpha.8] - 2021-11-29

### Changed

- Update ESLint to 8.3.0

## [1.0.0-alpha.7] - 2021-11-29

### Changed

- max-len changed to 120

## [1.0.0-alpha.6] - 2021-11-20

### Added

- no-unused-private-class-members
- react/no-arrow-function-lifecycle
- react/no-invalid-html-attribute
- react/no-namespace
- react/no-unused-class-component-methods
- react/prefer-exact-props

### Changed

- Update ESLint to 8.2.0
- Update eslint-plugin-import to 2.25.3
- Update eslint-plugin-react to 7.27.1
- Update parser eo ES2022
- react/jsx-max-props-per-line to accept only 1 prop per line when multiline

## [1.0.0-alpha.5] - 2021-08-28

### Changed

- import/no-unused-modules turned off, as this rule prevents incremental commits
- Update ESLint to 7.32.0

## [1.0.0-alpha.4] - 2021-07-06

### Added

- React configuration

### Changed

- Removed some settings that are not aplied when extending
- Add the 'browser' environment

## [1.0.0-alpha.3] - 2021-07-06

### Changed

- Update ESLint to 7.30.0
- Changed array-bracket-newline and array-element-newline to 'consistent'
- Turned off arrow-body-style

## [1.0.0-alpha.2] - 2021-07-01

### Changed

- Updated dependencies and configured new rules
- Changed the array-element-newline options to allow multiline

## [1.0.0-alpha.1] - 2021-01-27

### Added

- Basic ruleset using the ESLint rules
- Rules for module import/export

[unreleased]: https://github.com/arslivinski/eslint-config/compare/1.0.0-alpha.18...HEAD
[1.0.0-alpha.18]: https://github.com/arslivinski/eslint-config/compare/1.0.0-alpha.17...1.0.0-alpha.18
[1.0.0-alpha.17]: https://github.com/arslivinski/eslint-config/compare/1.0.0-alpha.16...1.0.0-alpha.17
[1.0.0-alpha.16]: https://github.com/arslivinski/eslint-config/compare/1.0.0-alpha.15...1.0.0-alpha.16
[1.0.0-alpha.15]: https://github.com/arslivinski/eslint-config/compare/1.0.0-alpha.14...1.0.0-alpha.15
[1.0.0-alpha.14]: https://github.com/arslivinski/eslint-config/compare/1.0.0-alpha.13...1.0.0-alpha.14
[1.0.0-alpha.13]: https://github.com/arslivinski/eslint-config/compare/1.0.0-alpha.12...1.0.0-alpha.13
[1.0.0-alpha.12]: https://github.com/arslivinski/eslint-config/compare/1.0.0-alpha.11...1.0.0-alpha.12
[1.0.0-alpha.11]: https://github.com/arslivinski/eslint-config/compare/1.0.0-alpha.10...1.0.0-alpha.11
[1.0.0-alpha.10]: https://github.com/arslivinski/eslint-config/compare/1.0.0-alpha.9...1.0.0-alpha.10
[1.0.0-alpha.9]: https://github.com/arslivinski/eslint-config/compare/1.0.0-alpha.8...1.0.0-alpha.9
[1.0.0-alpha.8]: https://github.com/arslivinski/eslint-config/compare/1.0.0-alpha.7...1.0.0-alpha.8
[1.0.0-alpha.7]: https://github.com/arslivinski/eslint-config/compare/1.0.0-alpha.6...1.0.0-alpha.7
[1.0.0-alpha.6]: https://github.com/arslivinski/eslint-config/compare/1.0.0-alpha.5...1.0.0-alpha.6
[1.0.0-alpha.5]: https://github.com/arslivinski/eslint-config/compare/1.0.0-alpha.4...1.0.0-alpha.5
[1.0.0-alpha.4]: https://github.com/arslivinski/eslint-config/compare/1.0.0-alpha.3...1.0.0-alpha.4
[1.0.0-alpha.3]: https://github.com/arslivinski/eslint-config/compare/1.0.0-alpha.2...1.0.0-alpha.3
[1.0.0-alpha.2]: https://github.com/arslivinski/eslint-config/compare/1.0.0-alpha.1...1.0.0-alpha.2
[1.0.0-alpha.1]: https://github.com/arslivinski/eslint-config/releases/tag/1.0.0-alpha.1
