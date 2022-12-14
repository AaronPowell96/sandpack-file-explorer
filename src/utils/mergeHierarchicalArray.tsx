import { buildPath } from '.';
import type { Item, SandpackBundlerFiles } from '../types';

export function mergeHierarchicalArray(
  sandpackFiles: SandpackBundlerFiles,
  arr: Item[]
): SandpackBundlerFiles {
  // create an empty object to store the hierarchical data
  let obj: SandpackBundlerFiles = {};
  // console.log("arr", arr);

  // iterate through the array of items
  for (let i = 0; i < arr?.length; i++) {
    let item: Item = arr[i];
    console.log(
      'LOOOOP',
      item?.data.path,
      sandpackFiles,
      sandpackFiles[`${item?.data.path}`]
    );
    // console.log(
    //   "PREVIOUS CODEEEE",
    //   item.text,
    //   item.data.path,
    //   sandpack.files,
    //   sandpack.files[`${item.data.path}`]?.code
    // );
    // add the item to the object

    // find the parent node in the object and add the item as a child
    let builtPath = buildPath(item, arr);
    console.log('BUILT PATHHHHH', builtPath);
    obj[`/${builtPath}`] = sandpackFiles[`${item.data.path}`];
    if (item.droppable && !obj[`/${builtPath}`]) {
      obj[`/${builtPath}`] = { code: '.emptyDir', hidden: true };
      obj[`/${builtPath}/`] = { code: '.emptyDir', hidden: true };
    }
    item.data.path = `/${builtPath}`;
  }
  console.log('OBBBBBJJJ', obj);
  // removeHiddenEntries(obj);
  // flatten the object by merging all nested objects into the root object
  // flattenObject(obj);
  // console.log('FLATTENED', obj);

  return obj;
}
