import { SandpackFiles } from '@codesandbox/sandpack-react';
import { arrayToObject, deepMerge } from '.';
import type { SandpackBundlerFiles } from '../types';

export const directoryFileMap = (
  files: SandpackBundlerFiles | Record<string, string> | SandpackFiles,
  overrides: Record<string, string> | string | SandpackFiles = {}
) => {
  const _overrides =
    typeof overrides === 'string' ? { [overrides]: '' } : overrides ?? {};

  const _files = Object.keys({ ...files, ..._overrides }).reduce(
    (acc, current) => {
      const split = current.split('/').splice(1);

      const dirTree = arrayToObject(split);

      acc = deepMerge(files as SandpackBundlerFiles, acc, dirTree, current);
      return acc;
    },
    {}
  );

  return _files;
};
