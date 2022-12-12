import {
  useSandpack,
  FileIcon,
  CloseIcon,
  DirectoryIconClosed,
  DirectoryIconOpen,
} from '@codesandbox/sandpack-react';
import {
  Tree,
  getBackendOptions,
  MultiBackend,
} from '@minoru/react-dnd-treeview';
import { DndProvider } from 'react-dnd';
import { SingleInputForm } from './SingleInputForm';
import { CreateNewNode } from './CreateNewNode';
import { useCustomSandpack } from './CustomSandpackProvider';
import { getEntryFile, getRemovedKeys, mergeHierarchicalArray } from './utils';
import React from 'react';

export const FileTreeExplore = () => {
  const { sandpack } = useSandpack();
  const { treeData, setTreeData, addFile, deleteFile } = useCustomSandpack();

  const immoveablePaths = ['/package.json', '/App.tsx'];
  const handleDrop = async (newTreeData: any, node: any) => {
    console.log('LOGGGGG DROP', newTreeData, node?.dragSource?.data?.path);
    const entryFile = getEntryFile(sandpack.files);
    if (
      [...immoveablePaths, entryFile].includes(node?.dragSource?.data?.path)
    ) {
      return;
    }
    const prev = mergeHierarchicalArray(sandpack.files, treeData);
    const neww = mergeHierarchicalArray(sandpack.files, newTreeData);

    const deleteFilePromises = getRemovedKeys(prev, neww).map((key) =>
      sandpack.deleteFile(key)
    );
    await Promise.all(deleteFilePromises);

    addFile(neww);
    setTreeData(newTreeData);
  };

  const entryFile = getEntryFile(sandpack.files);

  return (
    <>
      <DndProvider backend={MultiBackend} options={getBackendOptions()}>
        <div
          style={{
            minHeight: '100%',
            maxHeight: '100%',
            height: `var(--sp-layout-height)`,
            minWidth: '200px',
            overflowY: 'auto',
            overflowX: 'hidden',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            padding: `var(--sp-space-1) var(--sp-space-3)`,
          }}
        >
          <div
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              minHeight: '40px',
            }}
          >
            <span>Files</span>
            <div style={{ display: 'flex' }}>
              <CreateNewNode />
              <CreateNewNode dir={true} />
            </div>
          </div>
          <Tree<{ path: string }>
            tree={treeData}
            rootId={'0'}
            onDrop={handleDrop}
            // rootProps={{ style: { height: "100px" } }}
            classes={{ root: 'test' }}
            enableAnimateExpand={true}
            insertDroppableFirst={true}
            sort={true}
            initialOpen={treeData.map(({ id }) => id)}
            render={(node, { depth, isOpen, onToggle }) => (
              <div
                style={{
                  marginLeft: depth * 10,
                  display: 'flex',
                  justifyContent: 'space-between',
                  maxWidth: '300px',
                  overflow: 'hidden',
                  padding: `var(--sp-space-1) 0`,
                  transition: `color var(--sp-transitions-default), background var(--sp-transitions-default)`,
                }}
              >
                {node.text.includes('addFile') ||
                node.text.includes('addDir') ? (
                  <SingleInputForm
                    onBlur={() => deleteFile(`${node?.data?.path}`)}
                    isDirectory={node.text.includes('addDir')}
                    onSubmit={async (fileName) => {
                      const isDir = fileName.endsWith('/');
                      const newPath = node?.data?.path
                        .split('/')
                        .slice(0, -1)
                        .join('/');

                      console.log(
                        '00000',
                        newPath,
                        node?.data?.path,
                        `${newPath}/${fileName}`
                      );
                      // console.log(
                      //   "logggggg",
                      //   e.currentTarget.
                      //   // (e.currentTarget as HTMLFormElement).elements.namedItem(
                      //   //   "name"
                      //   // ) as HTMLInputElement
                      // );
                      // const inputValue = (
                      //   (e.currentTarget as HTMLFormElement).elements.namedItem(
                      //     "name"
                      //   ) as HTMLInputElement
                      // ).value;

                      addFile(
                        `${newPath}/${fileName}`,
                        isDir ? '.emptyDir' : `// ${fileName}`
                      );
                    }}
                  />
                ) : null}
                {node.text &&
                !node.text.includes('addFile') &&
                !node.text.includes('addDir') ? (
                  <>
                    {node.droppable ? (
                      <span
                        style={{
                          color: `var(--sp-colors-clickable)`,
                          display: 'flex',
                          cursor: 'pointer',
                        }}
                        onClick={() => {
                          //set drop state for node id save local  storage
                          onToggle();
                        }}
                      >
                        {isOpen ? (
                          <DirectoryIconOpen />
                        ) : (
                          <DirectoryIconClosed />
                        )}
                        {node.text}
                        {isOpen ? '[-] ' : '[+] '}
                      </span>
                    ) : (
                      <span
                        style={{
                          textOverflow: 'ellipsis',
                          maxWidth: '200px',
                          overflow: 'hidden',
                          cursor: 'pointer',
                          color: `${
                            node?.data?.path === sandpack.activeFile
                              ? `var(--sp-colors-accent)`
                              : `var(--sp-colors-clickable)`
                          }`,
                          display: 'flex',
                        }}
                        onClick={() =>
                          sandpack.openFile(node?.data?.path as string)
                        }
                      >
                        <FileIcon /> {node.text}
                      </span>
                    )}
                    {![entryFile, '/package.json'].includes(
                      node?.data?.path ?? ''
                    ) ? (
                      <button
                        onClick={async () => {
                          console.log('deleting', node?.data?.path);
                          await deleteFile(
                            `${node?.data?.path as string}${
                              node.droppable ? '/' : ''
                            }`
                          );
                        }}
                      >
                        <CloseIcon />
                      </button>
                    ) : (
                      <span
                        style={{
                          color: `var(--sp-colors-warning)`,
                        }}
                      >
                        {node?.data?.path === entryFile ? 'entry' : ''}
                      </span>
                    )}
                  </>
                ) : null}
              </div>
            )}
          />
        </div>
      </DndProvider>
    </>
  );
};
