export function removeHiddenEntries(obj: { [key: string]: any }): void {
  for (let key in obj) {
    if (
      (obj.hasOwnProperty(key) && obj[key]?.code === '.emptyDir') ||
      key.includes('addFile') ||
      key.includes('addDir')
    ) {
      delete obj[key];
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      removeHiddenEntries(obj[key]);
    }
  }
}
