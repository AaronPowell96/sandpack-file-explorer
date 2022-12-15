// .storybook/main.js|ts
const path = require('path');
const { mergeConfig } = require('vite');
module.exports = {
  stories: ['../stories'],
  addons: [
    '@storybook/addon-essentials',
    {
      name: '@storybook/addon-docs',
      options: {
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false },
          injectStoryParameters: false,
        },
      },
    },
  ],
  core: {},
  async viteFinal(config, { configType }) {
    if (configType === 'DEVELOPMENT') {
      // Your development configuration goes here
    }
    if (configType === 'PRODUCTION') {
      // Your production configuration goes here.
    }
    return mergeConfig(config, {
      // Your environment configuration here
    });
  },
  framework: {
    name: '@storybook/react-vite',
    options: {
      fastRefresh: true,
    },
  },
};
