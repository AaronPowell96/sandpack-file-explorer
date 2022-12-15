// .storybook/main.js|ts
const { mergeConfig } = require('vite');
module.exports = {
  stories: ['../stories'],
  addons: ['@storybook/addon-essentials'],
  core: {},
  async viteFinal(config, { configType }) {
    if (configType === 'DEVELOPMENT') {
      // Your development configuration goes here
    }
    if (configType === 'PRODUCTION') {
      // Your production configuration goes here.
    }
    return mergeConfig(config, {
      // optimizeDeps: {
      //   include: ['@storybook/addon-essentials/preview.js'],
      // },
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
