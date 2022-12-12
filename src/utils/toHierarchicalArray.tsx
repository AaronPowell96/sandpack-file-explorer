import { v4 as uuid } from 'uuid';
import { buildPath } from './buildPath';

export const toHierarchicalArray = (
  obj: { [key: string]: any },
  parentId = '0',
  arr: any[] = []
): any[] => {
  // console.log("Called");
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      const text = key;
      let id = uuid();
      let builtPath = buildPath(
        {
          id: id,
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
        id: id,
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
        toHierarchicalArray(obj[key], id, arr);
      } else {
        arr.push(item);
      }
    }
  }
  return arr;
};
