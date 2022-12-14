import { SandpackBundlerFile } from '../types';

export function flattenObject(obj: Record<string, SandpackBundlerFile>) {
  for (const key in obj) {
    let value: string = obj[key]?.code;
    if (typeof value === 'object') {
      flattenObject(value);
      Object.assign(obj, value);
    }
  }
}
