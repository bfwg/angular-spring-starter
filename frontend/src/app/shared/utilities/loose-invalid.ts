export function looseInvalid(a: string|number): boolean {
  return a === '' || a === null || a === undefined;
}
