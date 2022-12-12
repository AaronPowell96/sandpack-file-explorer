import { useSandpack } from '@codesandbox/sandpack-react';
import type { FC, PropsWithChildren } from 'react';
import React, { createContext, useContext, useState } from 'react';
import type { Item } from './types';
import {
  buildPath,
  deleteKeys,
  directoryFileMap,
  toHierarchicalArray,
} from './utils';

const CustomSandpackContext = createContext<{
  addFile: (
    pathOrFiles: string | Record<string, string>,
    code?: string | undefined
  ) => void;
  buildPath: (item: Item, arr: Item[]) => string;
  deleteFile: (file: string | string[]) => Promise<void>;
  setTreeData: React.Dispatch<React.SetStateAction<any[]>>;
  treeData: any[];
}>(null!);

export const useCustomSandpack = () => {
  const context = useContext(CustomSandpackContext);
  if (!context) {
    throw Error('Must be used inside provider');
  }
  return context;
};

export const CustomSandpackProvider: FC<PropsWithChildren> = ({ children }) => {
  const { sandpack } = useSandpack();

  const [treeData, setTreeData] = useState(() =>
    toHierarchicalArray(directoryFileMap(sandpack.files))
  );

  const deleteFile = async (file: string[] | string) => {
    const entryFile = JSON.parse(sandpack.files['/package.json']?.code)?.main;
    const files = typeof file === 'string' ? [file] : file;
    if (files.includes(entryFile)) {
      return;
    }
    if (
      (!sandpack.visibleFiles.filter((path) => !files.includes(path))?.length ||
        0) > 0
    ) {
      sandpack.openFile(entryFile);
    }
    const deleteFilePromises = files.map(async (key) => {
      const isDir = key.endsWith('/');
      if (isDir) {
        sandpack.deleteFile(`${file}${(file as string).substring(0, -1)}`);
      }
      sandpack.deleteFile(key);
    });
    await Promise.all(deleteFilePromises);
    // console.log("SANDPACK FILES 11111", sandpack.files);
    // sandpack.deleteFile("./tsconfig.json");
    // console.log("SANDPACK FILES 2222222", sandpack.files);
    const newFiles = deleteKeys(sandpack.files, files);
    setTreeData(toHierarchicalArray(directoryFileMap(newFiles)));
  };
  const addFile: typeof sandpack.addFile = (file, code) => {
    sandpack.addFile(file, code);
    // console.log("MAPpPPPPPPP", dirFileMap(sandpack.files));
    setTreeData(
      toHierarchicalArray(
        directoryFileMap(sandpack.files, file as Record<string, string>)
      )
    );
    if (
      typeof file === 'string' &&
      !file.includes('addDir') &&
      !file.includes('addFile') &&
      !file.endsWith('/')
    )
      sandpack.openFile(file);
  };

  const value = { addFile, treeData, setTreeData, buildPath, deleteFile };

  return (
    <CustomSandpackContext.Provider value={value}>
      {children}
    </CustomSandpackContext.Provider>
  );
};
