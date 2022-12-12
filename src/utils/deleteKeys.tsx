import type { SandpackBundlerFiles } from '../types';

export const deleteKeys = (
  obj: Record<string, string> | SandpackBundlerFiles,
  keysToDelete: string[]
) => {
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !keysToDelete.includes(key))
  );
};
