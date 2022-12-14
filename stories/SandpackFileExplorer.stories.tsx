import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  SandpackFileExplorer,
  SandpackFilesProvider,
  SandpackFileTree,
} from '../src';
import {
  SandpackProvider,
  SandpackThemeProvider,
  SandpackStack,
  SandpackCodeEditor,
  SandpackPreview,
} from '@codesandbox/sandpack-react';

import { nightOwl } from '@codesandbox/sandpack-themes';

export default {
  title: 'SandpackFileExplorer',
  component: SandpackFileExplorer,
  argTypes: {},
  decorators: [
    (Story) => (
      <SandpackProvider template="react-ts">
        <SandpackThemeProvider theme={nightOwl}>
          <Story />
        </SandpackThemeProvider>
      </SandpackProvider>
    ),
  ],
  isCodeExpanded: true,
} as ComponentMeta<typeof SandpackFileExplorer>;

const CompleteTemplate: ComponentStory<typeof SandpackFileExplorer> = () => (
  <SandpackStack>
    <div
      style={{
        display: 'flex',
        width: '100%',
        minHeight: '300px',
        maxHeight: '300px',
        backgroundColor: `var(--sp-colors-surface1)`,
      }}
    >
      <div
        style={{
          minWidth: '150px',
          maxWidth: '300px',
          overflow: 'hidden',
        }}
      >
        <SandpackFileExplorer />
      </div>
      <div style={{ flex: 'min-content' }}>
        <SandpackCodeEditor
          wrapContent
          style={{
            minHeight: '100%',
            maxHeight: '100%',
            overflow: 'auto',
          }}
          showTabs
          closableTabs
          showInlineErrors
          showLineNumbers
        />
      </div>
    </div>
    <SandpackPreview />
  </SandpackStack>
);

const FileTreeTemplate: ComponentStory<typeof SandpackFileExplorer> = () => (
  <SandpackFilesProvider>
    <div
      style={{
        minWidth: '150px',
        maxWidth: '300px',
        overflow: 'hidden',
        background: '#112331',
      }}
    >
      <SandpackFileTree />
    </div>
  </SandpackFilesProvider>
);

const FileExplorerTemplate: ComponentStory<
  typeof SandpackFileExplorer
> = () => (
  <div
    style={{
      minWidth: '150px',
      maxWidth: '300px',
      overflow: 'hidden',
      background: '#112331',
    }}
  >
    <SandpackFileExplorer />
  </div>
);

export const Complete = CompleteTemplate.bind({});
Complete.storyName = `Complete with Sandpack Editor`;
Complete.parameters = {
  docs: {
    description: {
      story: `Combining plug and play drop in replacement for Sandpack's "FileExplorer" with Sandpack's provider`,
    },
    source: {
      code: `        
      import { SandpackFileExplorer } from 'sandpack-file-explorer';
import {
    SandpackProvider,
    SandpackThemeProvider,
    SandpackCodeEditor
  } from '@codesandbox/sandpack-react';
import { nightOwl } from '@codesandbox/sandpack-themes';

      const CustomSandpackEditor = () => {
        return(
          <SandpackProvider template="react-ts">
            <SandpackThemeProvider theme={nightOwl}>
              <SandpackStack>
                <div
                  style={{
                    display: 'flex',
                    width: '100%',
                    minHeight: '300px',
                    maxHeight: '300px',
                    backgroundColor: 'var(--sp-colors-surface1)',
                  }}
                >
                  <div
                    style={{
                      minWidth: '150px',
                      maxWidth: '300px',
                      overflow: 'hidden',
                    }}
                  >
                    <SandpackFileExplorer />
                  </div>
                  <div style={{ flex: 'min-content' }}>
                    <SandpackCodeEditor
                      wrapContent
                      style={{
                        minHeight: '100%',
                        maxHeight: '100%',
                        overflow: 'auto',
                      }}
                      showTabs
                      closableTabs
                      showInlineErrors
                      showLineNumbers
                    />
                  </div>
                </div>
                <SandpackPreview />
              </SandpackStack>
            </SandpackThemeProvider>
          </SandpackProvider>
        )
      }
      `,
      language: 'javascript',
      type: 'auto',
    },
  },
};
export const FileExplorer = FileExplorerTemplate.bind({});
FileExplorer.storyName = `SandpackFileExplorer`;
FileExplorer.parameters = {
  docs: {
    description: {
      story: `Drop in replacement for Sandpack's FileExplorer`,
    },
    source: {
      code: `        
      import { SandpackFileExplorer } from 'sandpack-file-explorer';
import {
    SandpackProvider,
    SandpackThemeProvider,
    SandpackCodeEditor
  } from '@codesandbox/sandpack-react';
import { nightOwl } from '@codesandbox/sandpack-themes';

      const CustomSandpackEditor = () => {
        return(
          <SandpackProvider template="react-ts">
            <SandpackThemeProvider theme={nightOwl}>
              <SandpackFileExplorer>
              <SandpackCodeEditor/>
            </SandpackThemeProvider>
          </SandpackProvider>
        )
      }
      `,
      language: 'javascript',
      type: 'auto',
    },
  },
};
export const FileTree = FileTreeTemplate.bind({});
FileTree.storyName = `SandpackFileTree`;
FileTree.parameters = {
  docs: {
    description: {
      story: `Granular control over files, wrap in SandpackFilesProvider and access context`,
    },
    source: {
      code: `        
      import { 
        SandpackFilesProvider, 
        SandpackFileTree
  } from 'sandpack-file-explorer';
import {
    SandpackProvider,
    SandpackThemeProvider,
    SandpackCodeEditor
  } from '@codesandbox/sandpack-react';
import { nightOwl } from '@codesandbox/sandpack-themes';

      const MyCustomFileExplorer  = () => (
        <SandpackFilesProvider>
          <div
            style={{
              minWidth: '150px',
              maxWidth: '300px',
              overflow: 'hidden',
              background: '#112331'
            }}
          >
            <SandpackFileTree />
          </div>
        </SandpackFilesProvider>
      );

      const CustomSandpackEditor = () => {
        return(
          <SandpackProvider template="react-ts">
            <SandpackThemeProvider theme={nightOwl}>
              <MyCustomFileExplorer/>
              <SandpackCodeEditor/>
            </SandpackThemeProvider>
          </SandpackProvider>
        )
      }
      `,
      language: 'javascript',
      type: 'auto',
    },
  },
};
