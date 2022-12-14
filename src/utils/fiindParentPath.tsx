export function findParentPath(
  obj: Record<string, any>,
  parentId: string
): string {
  for (const key in obj) {
    if (key.endsWith(`/${parentId}`)) {
      return key;
    }
  }
  return '';
}
