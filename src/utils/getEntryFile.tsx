import type { SandpackBundlerFiles } from '../types';

export const getEntryFile = (files: SandpackBundlerFiles) => {
  let entryFile = '';
  try {
    entryFile = JSON.parse(files['/package.json']?.code)?.main;
  } catch {
    const entryRegex = /\"main\"\s*:\s*\"([^"]+)\"/;
    const match = entryRegex.exec(files['/package.json']?.code);
    const mainValue = match?.[1] ?? '';
    entryFile = mainValue;
  }
  return entryFile;
};
