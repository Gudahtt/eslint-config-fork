module.exports = {
  root: true,

  parserOptions: {
    ecmaVersion: 2018,
  },

  extends: [
    '@gudahtt/eslint-config',
    '@gudahtt/eslint-config-nodejs',
    '@gudahtt/eslint-config-jest',
  ],

  rules: {
    'import/no-dynamic-require': 'off',
    'import/no-nodejs-modules': 'off',
    'node/global-require': 'off',
    'node/no-process-exit': 'off',
    'node/no-sync': 'off',
    'node/no-unpublished-require': 'off',
  },

  ignorePatterns: ['!.eslintrc.js'],
};
