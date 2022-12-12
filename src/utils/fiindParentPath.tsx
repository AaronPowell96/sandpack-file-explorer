export function findParentPath(
  obj: Record<string, string>,
  parentId: string
): string {
  for (const key in obj) {
    if (key.endsWith(`/${parentId}`)) {
      return key;
    }
  }
  return '';
}
