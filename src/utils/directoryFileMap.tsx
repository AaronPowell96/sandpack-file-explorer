import { SandpackFiles } from '@codesandbox/sandpack-react';
import { arrayToObject, deepMerge } from '.';
import type { SandpackBundlerFiles } from '../types';

export const directoryFileMap = (
  files: SandpackBundlerFiles | Record<string, string> | SandpackFiles,
  overrides: Record<string, string> | string | SandpackFiles = {}
) => {
  // console.log("----", files, sandpack.files);
  const _overrides =
    typeof overrides === 'string' ? { [overrides]: '' } : overrides ?? {};

  const _files = Object.keys({ ...files, ..._overrides }).reduce(
    (acc, current) => {
      const split = current.split('/').splice(1);
      // console.log(current, split);
      const dirTree = arrayToObject(split);
      // console.log("tree", acc, dirTree, current);
      // console.log(acc, dirTree);
      acc = deepMerge(files as SandpackBundlerFiles, acc, dirTree, current);
      return acc;
    },
    {}
  );
  // console.log("////////////////", _files);
  return _files;
};
