# @arslivinski/eslint-config

A very opinionated ESLint configuration, mostly focused on web development.

## Usage

This configuration requires ESLint >= 8.34.0

To install, run:

```sh
npm install -D eslint@^8.34.0 @arslivinski/eslint-config
```

Then create a `.eslintrc.js`:

```js
'use strict';

module.exports = {
  extends: ['@arslivinski'],
};
```

Now you can run:

```sh
npm exec eslint -- ./
```

## React

This configuration also provides a set of rules for React projects. To use you
have to install the required plugins

```sh
npm install -D eslint-plugin-react eslint-plugin-react-hooks
```

and extend this config on your `.eslintrc.js`

```js
'use strict';

module.exports = {
  extends: [
    '@arslivinski/eslint-config'
    '@arslivinski/eslint-config/react'
  ],
};
```

## TypeScript

This configuration also provides a set of rules for TypeScript projects. To use
you have to install the required dependencies

```sh
npm install -D typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-import-resolver-typescript
```

and extend this config on your `.eslintrc.js`

```js
'use strict';

module.exports = {
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
      },
      settings: {
        'import/resolver': {
          typescript: {
            project: './tsconfig.json',
          },
        },
      },
      extends: [
        '@arslivinski/eslint-config',
        '@arslivinski/eslint-config/react'
        '@arslivinski/eslint-config/typescript',
      ],
    },
  ],
};
```
