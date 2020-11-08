export const asMapped = (func, map) => (values: string[]) => {
  const result = func(values);
  return map[result];
};
