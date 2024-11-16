type CharCountOption = { whiteSpace: boolean; byte: boolean };

export const charCount = (
  str: string,
  option: Partial<CharCountOption> = {},
): number => {
  const whiteSpace = option.whiteSpace ?? true;
  const byte = option.byte ?? false;
  const postStr = whiteSpace ? str : str.replaceAll(/\s/g, '');
  const textEncoder = new TextEncoder();
  return byte ? textEncoder.encode(postStr).length : postStr.length;
};

export const lineCount = (str: string): number => {
  return str.split('\n').length;
};
