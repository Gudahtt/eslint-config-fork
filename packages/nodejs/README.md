# `@gudahtt/eslint-config-nodejs`

MetaMask's [Node.js](https://nodejs.org) ESLint configuration.

## Usage

```bash
yarn add --dev \
    @gudahtt/eslint-config@^11.0.0 \
    @gudahtt/eslint-config-nodejs@^11.0.0 \
    eslint@^8.27.0 \
    eslint-config-prettier@^8.5.0 \
    eslint-plugin-import@^2.26.0 \
    eslint-plugin-jsdoc@^39.6.2 \
    eslint-plugin-node@^11.1.0 \
    eslint-plugin-prettier@^4.2.1 \
    prettier@^2.7.1
```

The order in which you e tend ESLint rules matters.
The `@metamask/*` eslint configs should be added to the `extends` array _last_,
with `@gudahtt/eslint-config` first, and `@metamask/eslint-config-*` in any
order thereafter.

```js
module.exports = {
  extends: [
    // These should be added last unless you know what you're doing.
    '@gudahtt/eslint-config',
    '@gudahtt/eslint-config-nodejs',
  ],
};
```

To lint the `.eslintrc.js` file itself, you will **need** to add this config in addition to the base config.
