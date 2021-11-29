# @arslivinski/eslint-config

A very opinionated ESLint configuration, mostly focused on web development.

## Usage

This configuration requires ESLint >= 8.3.0

To install, run:

```sh
npm install -D eslint@^8.3.0 @arslivinski/eslint-config
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
have to install the required plugin

```sh
npm install -D eslint-plugin-react
```

and extend this config on your `.eslintrc.js`

```js
'use strict';

module.exports = {
  extends: [
    '@arslivinski'
    '@arslivinski/eslint-config/react'
  ],
};
```
