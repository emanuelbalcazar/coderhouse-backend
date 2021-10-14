export function to<T>(
  promise: Promise<T>,
): Promise<[Error | undefined, T | undefined]> {
  return promise
    .then<[undefined, T]>((data) => [undefined, data])
    .catch<[Error, undefined]>((err: Error) => [err, undefined]);
}
