import {
  useSandpack,
  FileIcon,
  DirectoryIconOpen,
} from '@codesandbox/sandpack-react';
import React from 'react';
import { useCustomSandpack } from './CustomSandpackProvider';

export const CreateNewNode = ({ dir }: { dir?: boolean }) => {
  const { sandpack } = useSandpack();
  const { addFile } = useCustomSandpack();

  return (
    <span
      style={{
        cursor: 'pointer',
      }}
      onClick={() => {
        const activeSpace = sandpack.activeFile
          .split('/')
          .slice(0, -1)
          .join('/');
        addFile(`${activeSpace}/${dir ? 'addDir' : 'addFile'}`);
      }}
    >
      {dir ? <DirectoryIconOpen /> : <FileIcon />}
    </span>
  );
};
