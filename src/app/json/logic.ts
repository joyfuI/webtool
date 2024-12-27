export const formatJson = (str: string): string => {
  const json = JSON.parse(str);
  return JSON.stringify(json, null, 2);
};

export const minifyJson = (str: string): string => {
  const json = JSON.parse(str);
  return JSON.stringify(json);
};
