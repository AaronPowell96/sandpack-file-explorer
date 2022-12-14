import { SandpackFiles, useSandpack } from '@codesandbox/sandpack-react';
import { DropOptions } from '@minoru/react-dnd-treeview';
import type { FC, PropsWithChildren } from 'react';
import React, { createContext, useContext, useState } from 'react';
import type { Item } from './types';
import {
  buildPath,
  deleteKeys,
  directoryFileMap,
  getRemovedKeys,
  mergeHierarchicalArray,
  toHierarchicalArray,
} from './utils';
// function swapKeysAndValues(obj: any) {
//   // Get an array of the object's key-value pairs
//   const entries = Object.entries(obj);

//   // Create a new array of swapped key-value pairs
//   const swappedEntries = entries.map(([key, value]) => [value, key]);

//   // Convert the array of swapped key-value pairs back into an object
//   return Object.fromEntries(swappedEntries);
// }
const CustomSandpackContext = createContext<{
  addFile: (
    pathOrFiles: Record<string, string> | SandpackFiles,
    code?: string | undefined
  ) => Promise<void>;

  buildPath: (item: Item, arr: Item[]) => string;
  deleteFile: (file: string | string[]) => Promise<void>;
  moveFiles: (fileMap: Record<string, string>) => void;
  onFileMoved: ({
    node,
    newTree,
  }: {
    newTree: Item[];
    node: DropOptions<{
      path: string;
    }>;
  }) => Promise<void>;
  openDirs: string[];
  setOpenDirs: React.Dispatch<React.SetStateAction<string[]>>;
  setTreeData: React.Dispatch<React.SetStateAction<any[]>>;
  treeData: any[];
}>(null!);

export const useSandpackFiles = () => {
  const context = useContext(CustomSandpackContext);
  if (!context) {
    throw Error(
      '<SandpackFileTree/> must be used inside a <SandpackFilesProvider>, you may be looking for <SandpackFileExplorer/>?'
    );
  }
  return context;
};

export const SandpackFilesProvider: FC<
  PropsWithChildren & { onMoveFile?: (fileMap: Record<string, string>) => void }
> = ({ children, onMoveFile }) => {
  const { sandpack } = useSandpack();
  const [treeData, setTreeData] = useState<Item[]>(() =>
    toHierarchicalArray(directoryFileMap({ ...sandpack.files }))
  );
  const [openDirs, setOpenDirs] = useState<string[]>([]);

  const deleteFile = async (file: string[] | string) => {
    const entryFile = JSON.parse(sandpack.files['/package.json']?.code)?.main;
    const files = typeof file === 'string' ? [file] : file;
    if (files.includes(entryFile)) {
      return;
    }
    const sandpackFilesCopy = { ...sandpack.files };
    // The below code is being added to sandpack and can be removed when complete
    // https://github.com/codesandbox/sandpack/pull/661
    // if (
    //   (!sandpack.visibleFiles.filter((path) => !files.includes(path))?.length ||
    //     0) > 0
    // ) {
    //   sandpack.openFile(entryFile);
    // }

    const getAllChildrenOfDir = (dir: string, arr: Item[]) => {
      // const dirId = dir.substring(1);

      const children: string[] = [];
      const childrenOfDir = arr?.filter(({ parent }) => parent === dir);

      // ?.map(({ id }) =>
      //   treeData.find(({ parent }) => parent === id) ? `${id}/` : `/${id}`
      // );

      childrenOfDir.forEach((child) => {
        children.push(buildPath(child, arr));
        if (child.id !== '/' && child.id !== dir) {
          // Only call the function recursively if the child has a parent
          children.push(...getAllChildrenOfDir(child.id, arr));
        }
      });
      return children;
    };

    const deleteFilePromises = files.map(async (key) => {
      const isDir = key.endsWith('/');
      if (isDir) {
        const dirId = key.substring(0, key.length - 1);
        const parentId = dirId.substring(1);
        sandpack.deleteFile(`${dirId}`);
        delete sandpackFilesCopy[dirId];
        // delete all children of dir

        const childrenOfDir = getAllChildrenOfDir(parentId, treeData);

        childrenOfDir.forEach((child) => {
          sandpack.deleteFile(`/${child}`);
          delete sandpackFilesCopy[`/${child}`];
        });
      }
      sandpack.deleteFile(key);
      delete sandpackFilesCopy[key];
    });
    await Promise.all(deleteFilePromises);
    const newFiles = deleteKeys(sandpackFilesCopy, files);

    setTreeData(toHierarchicalArray(directoryFileMap(newFiles)));
  };

  const addFile = async (files: SandpackFiles) => {
    for (let id in files) {
      if (
        sandpack.files[id] ||
        sandpack.files[
          id.endsWith('/') ? id.substring(0, id.length - 1) : `${id}/`
        ]
      ) {
        // a file or dir with "id" already exists, do not add it
        delete files[id];
      }
    }
    sandpack.addFile(files);
    const tempAddNodes = Object.keys(sandpack.files).filter(
      (key) => key.includes('addDir') || key.includes('addFile')
    );
    const fileKeys = Object.keys(files);
    const isAnInputNode = fileKeys.filter(
      (id) => id.includes('addDir') || id.includes('addFile')
    ).length;
    if (!isAnInputNode) {
      await deleteFile(tempAddNodes);
      const newFiles = deleteKeys({ ...sandpack.files }, tempAddNodes);
      setTreeData(toHierarchicalArray(directoryFileMap(newFiles, files)));
      fileKeys.forEach((id) => {
        if (!id.endsWith('/')) sandpack.openFile(id);
      });
    } else {
      const newTree = toHierarchicalArray(
        directoryFileMap({ ...sandpack.files }, files as Record<string, string>)
      );
      // Just add temp nodes to display input fields in tree
      setTreeData(newTree);

      const key = Object.keys(files)[0].substring(1);
      const directoryIds = getAllParentDirs({ childId: key, tree: newTree });

      setOpenDirs((prev) => Array.from(new Set([...prev, ...directoryIds])));
    }
  };

  const getAllParentDirs = ({
    childId,
    tree,
  }: {
    childId: string;
    tree: Item[];
  }) => {
    const ids: string[] = [];
    const itemParent = tree.find(({ id }) => id === childId)?.parent;

    if (!itemParent || itemParent === '/') {
      return ids;
    }
    ids.push(`${itemParent}`);
    ids.push(...getAllParentDirs({ childId: itemParent, tree }));
    return ids;
  };
  const onFileMoved = async ({
    node,
    newTree,
  }: {
    newTree: Item[];
    node: DropOptions<{ path: string }>;
  }) => {
    const filesCopy = { ...sandpack.files };
    const prev = mergeHierarchicalArray(filesCopy, treeData);
    const neww = mergeHierarchicalArray(filesCopy, newTree);
    const removedKeys = getRemovedKeys(prev, neww);

    const deleteFilePromises = removedKeys.map((key) => {
      deleteFile(key);
    });
    await Promise.all(deleteFilePromises);

    sandpack.addFile(neww);
    const movedFileMap = removedKeys.reduce((acc, id) => {
      const newPath = `/${buildPath(
        {
          parent: (node.dropTarget?.id as string) ?? '/',
          text: node?.dragSource?.text,
        },
        newTree
      )}`;

      acc[id] = `${newPath}${id.substring(
        id.indexOf(node?.dragSource?.id as string) +
          (node?.dragSource?.id as string)?.length
      )}`;
      return acc;
    }, {} as Record<string, string>);

    onMoveFile?.(movedFileMap);

    const currentActiveFile = sandpack.activeFile;
    let newActiveFile = sandpack.activeFile;
    sandpack.visibleFiles.forEach((file) => {
      if (movedFileMap[file]) {
        sandpack.openFile(movedFileMap[file]);
        if (currentActiveFile === file) {
          newActiveFile = movedFileMap[file];
        }
      }
    });

    sandpack.setActiveFile(newActiveFile);
  };

  const moveFiles = async (fileMap: Record<string, string>) => {
    const filesCopy = { ...sandpack.files };
    for (let file in fileMap) {
      if (filesCopy[file]) {
        filesCopy[fileMap[file]] = filesCopy[file];
      }
    }

    const deleteFilePromises = Object.keys(fileMap).map((key) => {
      if (filesCopy[key]) {
        delete filesCopy[key];
        deleteFile(key);
      }
    });
    await Promise.all(deleteFilePromises);

    sandpack.addFile(filesCopy);

    const currentActiveFile = sandpack.activeFile;
    let newActiveFile = sandpack.activeFile;
    sandpack.visibleFiles.forEach((file) => {
      if (fileMap[file]) {
        sandpack.openFile(fileMap[file]);
        if (currentActiveFile === file) {
          newActiveFile = file;
        }
      }
    });
    sandpack.setActiveFile(newActiveFile);
    const array = toHierarchicalArray(directoryFileMap({ ...filesCopy }));
    setTreeData(array);
  };

  const value = {
    addFile,
    treeData,
    setTreeData,
    buildPath,
    deleteFile,
    onFileMoved,
    moveFiles,
    openDirs,
    setOpenDirs,
  };

  return (
    <CustomSandpackContext.Provider value={value}>
      {children}
    </CustomSandpackContext.Provider>
  );
};
