export function getRemovedKeys(
  original: { [key: string]: any },
  updated: { [key: string]: any }
): string[] {
  const removedKeys: string[] = [];
  for (let key in original) {
    if (original.hasOwnProperty(key) && !updated.hasOwnProperty(key)) {
      removedKeys.push(key);
    }
  }
  return removedKeys;
}
