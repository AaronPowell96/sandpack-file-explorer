export function flattenObject(obj: Record<string, string>) {
  for (const key in obj) {
    let value: string = obj[key];
    if (typeof value === "object") {
      flattenObject(value);
      Object.assign(obj, value);
    }
  }
}
