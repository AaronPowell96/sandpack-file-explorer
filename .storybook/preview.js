import { addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs';

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
    isCodeExpanded: true,
  },
});

export const parameters = {
  layout: 'fullscreen',
  controls: { expanded: true },
  source: { expanded: true },
  viewMode: 'docs',
  actions: { argTypesRegex: '^on.*' },
};
