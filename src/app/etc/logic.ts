export const requestHeader = (str: string): Record<string, string> => {
  const entries = str
    .split('\n')
    .map((line) => {
      const [key, ...value] = line.split(': ');
      return [key.toLowerCase(), value.join(': ')];
    })
    .filter((entrie) => entrie.length === 2);
  const obj = Object.fromEntries(entries);
  return obj;
};
