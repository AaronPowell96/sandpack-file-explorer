import { buildPath } from './buildPath';

export const toHierarchicalArray = (
  obj: { [key: string]: any },
  parentId = '/',
  arr: any[] = []
): any[] => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const text = key;
      let builtPath = buildPath(
        {
          id: '',
          parent: parentId,
          text: text,
          droppable: false,
          data: {
            path: '',
          },
        },
        arr
      );
      const item = {
        id: builtPath,
        parent: parentId,
        text: text,
        data: {
          path: `/${builtPath}`,
          hidden: obj[key],
        },
        droppable: false,
      };

      if (typeof obj[key] === 'object' && obj[key] !== null) {
        item.droppable = true;
        arr.push(item);
        toHierarchicalArray(obj[key], builtPath, arr);
      } else {
        arr.push(item);
      }
    }
  }
  return arr;
};
