# @arslivinski/eslint-config

A very opinionated ESLint configuration.

## Usage

This configuration requires ESLint >= 7.18.

To install, run:

```sh
npm install -D eslint@^7.18.0 @arslivinski/eslint-config
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
