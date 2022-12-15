import { DocsPage, DocsContainer } from '@storybook/addon-docs';

export const parameters = {
  layout: 'fullscreen',
  controls: { expanded: true },
  source: { expanded: true },
  viewMode: 'docs',
  actions: { argTypesRegex: '^on.*' },
  docs: {
    container: DocsContainer,
    page: DocsPage,
    isCodeExpanded: true,
  },
};
