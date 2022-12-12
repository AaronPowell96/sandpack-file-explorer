import React from 'react';
import { CustomSandpackProvider } from './CustomSandpackProvider';
import { FileTreeExplore } from './FileTreeExplorer';

export const SandpackFileExplorer = () => (
  <CustomSandpackProvider>
    <div
      style={{
        minWidth: 150,
        maxWidth: '300px',
        overflow: 'hidden',
      }}
    >
      <FileTreeExplore />
    </div>
  </CustomSandpackProvider>
);

// import React, { FC, HTMLAttributes, ReactChild } from 'react';

// export interface Props extends HTMLAttributes<HTMLDivElement> {
//   /** custom content, defaults to 'the snozzberries taste like snozzberries' */
//   children?: ReactChild;
// }

// // Please do not use types off of a default export module or else Storybook Docs will suffer.
// // see: https://github.com/storybookjs/storybook/issues/9556
// /**
//  * A custom Thing component. Neat!
//  */
// export const Thing: FC<Props> = ({ children }) => {
//   return <div>{children || `the snozzberries taste like snozzberries`}</div>;
// };
