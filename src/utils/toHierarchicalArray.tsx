import { buildPath } from './buildPath';

export const toHierarchicalArray = (
  obj: { [key: string]: any },
  parentId = '/',
  arr: any[] = []
): any[] => {
  console.log('Called', obj);
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
        },
        droppable: false,
      };
      // console.log(item);
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
