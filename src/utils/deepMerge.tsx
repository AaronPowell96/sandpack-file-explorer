import type { SandpackBundlerFiles } from '../types';

export function deepMerge(
  files: SandpackBundlerFiles,
  obj1: any,
  obj2: any,
  path: string
) {
  // Create a new object by copying the properties of obj1
  const result = Object.assign({}, obj1);

  for (const prop in obj2) {
    // If the property is also an object, recursively merge the objects
    if (!result[prop]) {
      result[prop] = {};
    }
    if (typeof obj2[prop] === 'object' && obj2[prop] !== null) {
      // If the objects being merged are empty, return null instead of calling deepMerge()
      if (
        Object.keys(obj1?.[prop] || {})?.length === 0 &&
        Object.keys(obj2?.[prop] || {})?.length === 0
      ) {
        result[prop] = files[`${prop}`]?.code;
      } else {
        // Check if either of the objects being merged is empty and return the non-empty object instead of calling deepMerge()
        if (Object.keys(obj1?.[prop] || {})?.length === 0) {
          result[prop] = Object.entries(obj2[prop]).reduce(
            (acc, [key, value]) => {
              if (value !== null) {
                acc[key] = deepMerge(files, result[prop], value, path);
              } else {
                acc[key] = files[`${prop}/${key}`]?.code;
              }
              return acc;
            },
            {} as Record<string, unknown>
          );
        } else if (Object.keys(obj2?.[prop] || {})?.length === 0) {
          result[prop] = obj1[prop];
        } else {
          result[prop] = deepMerge(files, result[prop], obj2[prop], path);
        }
      }
    } else {
      result[prop] = files[`${path}`]?.hidden;
    }
  }

  return result;
}
