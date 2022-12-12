export function arrayToObject(arr: any[]): any {
  return arr.reduceRight(
    (prev: any, current: any) => ({ [current]: prev }),
    null
  );
}
