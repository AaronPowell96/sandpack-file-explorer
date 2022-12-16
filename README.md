# Sandpack File Explorer

An enhanced drop in replacement for Sandpack's [FileExplorer](https://github.com/codesandbox/sandpack/tree/main/sandpack-react/src/components/FileExplorer). Providing immense flexibility to sandpack's capabilities.

- Add and remove files or directories,
- Drag and drop to move files or directories,
- Allow users to customise the entire folder structure right within your website!
- Works out of the box with all of Sandpack's templates.
- Comes with default protection of the entry file (derived from package.json)



https://user-images.githubusercontent.com/17838632/208105414-5c7457bd-3bdc-4f24-b710-c152eb60d991.mov



## Installation

```console
npm install sandpack-file-explorer
```

```console
yarn add sandpack-file-explorer
```

## How do I use it?

As a drop in replacement for Sandpack's [FileExplorer](https://github.com/codesandbox/sandpack/tree/main/sandpack-react/src/components/FileExplorer), you can use it in the same way.
This means you must be running a custom Sandpack setup using the granular `<SandpackProvider>` and `<SandpackCodeEditor>`.

```js
import {
  SandpackProvider,
  SandpackThemeProvider,
  SandpackPreview,
  SandpackCodeEditor,
  SandpackStack,
  SandpackLayout,
} from '@codesandbox/sandpack-react';
import { nightOwl } from '@codesandbox/sandpack-themes';
import { SandpackFileExplorer } from 'sandpack-file-explorer';

const MySandpackComponent = () => {
  return (
    <SandpackProvider template="react-ts">
      <SandpackThemeProvider theme={nightOwl}>
        <SandpackStack>
          <SandpackLayout>
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
                  minWidth: 150,
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
          </SandpackLayout>
        </SandpackStack>
      </SandpackThemeProvider>
    </SandpackProvider>
  );
};
```
