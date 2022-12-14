import type { Item } from '../types';

export const buildPath = (item: Partial<Item>, arr: Item[]) => {
  let path = '';

  // Recursively build the path by looking for the parent of the current item
  let parent = arr.find(({ id }) => id === item.parent);
  if (parent) {
    path = `${buildPath(parent, arr)}/${path}`;
  }

  // Add the current item's text to the path
  path += `${item.text}`;

  return path;
};
