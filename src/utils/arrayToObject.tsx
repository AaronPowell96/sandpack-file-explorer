export function arrayToObject(arr: any[], _path: string): any {
  return arr.reduceRight(
    (prev: any, current: any) => ({ [current]: prev }),
    null
  );
}
