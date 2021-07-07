# @arslivinski/eslint-config

A very opinionated ESLint configuration, mostly focused on web development.

## Usage

This configuration requires ESLint >= 7.30.0

To install, run:

```sh
npm install -D eslint@^7.30.0 @arslivinski/eslint-config
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
