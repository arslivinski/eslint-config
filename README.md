# @arslivinski/eslint-config

A very opinionated ESLint configuration, mostly focused on web development.

## Usage

This configuration requires ESLint >= 8.35.0

To install, run:

```sh
npm install -D eslint@^8.35.0 @arslivinski/eslint-config
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

### React

This configuration also provides a set of rules for React projects. To use it,
you have to install these extra packages:

```sh
npm install -D eslint-plugin-react eslint-plugin-react-hooks
```

and extend this config on your `.eslintrc.js`

```js
'use strict';

module.exports = {
  extends: ['@arslivinski/eslint-config', '@arslivinski/eslint-config/module', '@arslivinski/eslint-config/browser'],
  overrides: [
    {
      files: ['*.jsx'],
      extends: ['@arslivinski/eslint-config/react'],
    },
  ],
};
```

### TypeScript

This configuration also provides a set of rules for TypeScript projects. To use
you have to install these extra packages:

```sh
npm install -D typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-import-resolver-typescript
```

and extend this config on your `.eslintrc.js`

```js
'use strict';

module.exports = {
  extends: ['@arslivinski/eslint-config'],
  overrides: [
    {
      files: ['*.ts'],
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
      extends: ['@arslivinski/eslint-config/module', '@arslivinski/eslint-config/typescript'],
    },
  ],
};
```

### React and TypeScript

It's possible to mix them both. To use this way you have to install these extra
packages:

```sh
npm install -D eslint-plugin-react eslint-plugin-react-hooks typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-import-resolver-typescript
```

and extend this config on your `.eslintrc.js`

```js
'use strict';

module.exports = {
  extends: ['@arslivinski/eslint-config'],
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
        '@arslivinski/eslint-config/typescript',
        '@arslivinski/eslint-config/module',
        '@arslivinski/eslint-config/browser',
      ],
    },
    {
      files: ['*.tsx'],
      extends: ['@arslivinski/eslint-config/react'],
    },
  ],
};
```

### Node

You can use this configuration for pure Node applications. For this, you need to
install the following extra package:

```sh
npm install -D eslint-plugin-n
```

Then, you need to set the Node version on the `engine` field of your `package.json`.
Example:

```json
{
  "name": "your-module",
  "version": "1.0.0",
  "engines": {
    "node": ">=18.14.0"
  }
}
```

and finally, extend this config on your `.eslintrc.js`. If you are using modules:

```js
'use strict';

module.exports = {
  extends: ['@arslivinski/eslint-config', '@arslivinski/eslint-config/module', '@arslivinski/eslint-config/node'],
};
```

...or if you are using CommonJS:

```js
'use strict';

module.exports = {
  extends: ['@arslivinski/eslint-config', '@arslivinski/eslint-config/commonjs', '@arslivinski/eslint-config/node'],
};
```

## Modules

This package provide the following modules to be used

| Name          | Import                                     | Description                                                                                                                                 |
| :------------ | :----------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------ |
| base          | `@arslivinski/eslint-config`               | The base configuration for all kinds of JavaScript and TypeScript                                                                           |
| module        | `@arslivinski/eslint-config/module`        | To be used when the files make use of ES imports                                                                                            |
| commonjs      | `@arslivinski/eslint-config/commonjs`      | To be used when the files make use of CommonJS                                                                                              |
| script        | `@arslivinski/eslint-config/script`        | To be used when the files are simple browser scripts, usualy imported with the `<script>` tag that don't make use of ES imports or CommonJS |
| browser       | `@arslivinski/eslint-config/browser`       | To lint files that will be used on a web browser                                                                                            |
| node          | `@arslivinski/eslint-config/node`          | To lint files that will be used on a NodeJS environment                                                                                     |
| serviceworker | `@arslivinski/eslint-config/serviceworker` | To be used with ServiceWorkers                                                                                                              |
| worker        | `@arslivinski/eslint-config/worker`        | To be used with Workers                                                                                                                     |
| webextension  | `@arslivinski/eslint-config/webextension`  | To be used with WebExtensions                                                                                                               |
| scripting     | `@arslivinski/eslint-config/scripting`     | For script files, like build or release scripts, allowing to usage of `console.log` and imports from `devDependencies`                      |
| jest          | `@arslivinski/eslint-config/jest`          | For Jest test files. Require `eslint-plugin-jest`                                                                                           |
