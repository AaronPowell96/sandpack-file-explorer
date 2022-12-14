import {
  useSandpack,
  FileIcon,
  DirectoryIconOpen,
} from '@codesandbox/sandpack-react';
import React from 'react';
import { useSandpackFiles } from './SandpackFilesProvider';

export const CreateNewNode = ({ dir }: { dir?: boolean }) => {
  const { sandpack } = useSandpack();
  const { addFile } = useSandpackFiles();

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
        addFile({
          [`${activeSpace}/${dir ? 'addDir' : 'addFile'}`]: {
            code: '.emptyDir',
            hidden: true,
          },
        });
      }}
    >
      {dir ? <DirectoryIconOpen /> : <FileIcon />}
    </span>
  );
};
