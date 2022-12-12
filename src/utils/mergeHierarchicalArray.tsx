import {
  buildPath,
  findParentPath,
  flattenObject,
  removeHiddenEntries,
} from '.';
import type { Item, SandpackBundlerFiles } from '../types';

export function mergeHierarchicalArray(
  sandpackFiles: SandpackBundlerFiles,
  arr: Item[]
): Record<string, string> {
  // create an empty object to store the hierarchical data
  let obj: Record<string, string> = {};
  // console.log("arr", arr);

  // iterate through the array of items
  for (let i = 0; i < arr?.length; i++) {
    let item: Item = arr[i];
    // console.log(
    //   "PREVIOUS CODEEEE",
    //   item.text,
    //   item.data.path,
    //   sandpack.files,
    //   sandpack.files[`${item.data.path}`]?.code
    // );
    // add the item to the object
    if (item.parent === '0') {
      // the item is a root node
      // console.log(item.path, sandpack.files);
      if (sandpackFiles[`${item?.data?.path}`]?.code !== undefined) {
        obj[`/${item.text}`] = sandpackFiles[`${item?.data?.path}`]?.code;
      } else {
        obj[`/${item.text}/`] = '.hiddenDir';
      }
      item.data.path = `/${item.text}`;
    } else {
      // find the parent node in the object and add the item as a child
      let parentPath: string = findParentPath(
        obj,
        arr.find(({ id }) => id === item.parent)?.text || ''
      );
      let builtPath = buildPath(item, arr);
      // arr.find(({ id }) => id === item.parent)?.text || "";
      // console.log(
      //   "PARENT PATH",
      //   arr.find(({ id }) => id === item.parent),
      //   arr.find(({ id }) => id === item.parent)?.text,
      //   item.text,
      //   item.parent,
      //   parentPath
      // );
      if (parentPath) {
        // console.log("PARENT PATH EXISTS", parentPath);
        obj[`/${builtPath}`] = sandpackFiles[`${item.data.path}`]?.code;
        item.data.path = `/${builtPath}`;
      } else {
        // console.log(
        //   "PARENT PATH DOESNT EXIST",
        //   arr,
        //   item.text,
        //   item.parent,
        //   parentPath
        // );
        obj[`/${builtPath}`] = sandpackFiles[`${item.data.path}`]?.code;
        item.data.path = `/${builtPath}`;
      }
    }
  }
  removeHiddenEntries(obj);
  // flatten the object by merging all nested objects into the root object
  flattenObject(obj);

  return obj;
}
