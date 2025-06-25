const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const eslintPluginPrettierRecommended = require('eslint-plugin-prettier/recommended');

module.exports = defineConfig([
  expoConfig,
  {
    rules: {
      'prettier/prettier': ['error', { singleQuote: true }],
    },
  },
  eslintPluginPrettierRecommended,
  {
    ignores: ['dist/*'],
  },
]);
