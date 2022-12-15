// .storybook/main.js|ts
import { mergeConfig } from 'vite';
export const stories = ['../stories'];
export const addons = ['@storybook/addon-essentials'];
export const core = {};
export async function viteFinal(config, { configType }) {
  if (configType === 'DEVELOPMENT') {
    // Your development configuration goes here
  }
  if (configType === 'PRODUCTION') {
    // Your production configuration goes here.
  }
  return mergeConfig(config, {
    optimizeDeps: {
      include: [
        '@storybook/addon-essentials/docs/mdx-react-shim',
        '@codesandbox/sandpack-react',
        '@codesandbox/sandpack-themes',
        '@minoru/react-dnd-treeview',
        'react-dnd',
      ],
    },
    // Your environment configuration here
  });
}
export const framework = {
  name: '@storybook/react-vite',
  options: {
    fastRefresh: true,
  },
};
