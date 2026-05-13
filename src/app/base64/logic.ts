const encoder = new TextEncoder();

export const encode = (str: string): string => {
  if (!str.isWellFormed()) {
    throw new DOMException(
      'Cannot process a string with lone surrogates',
      'InvalidCharacterError',
    );
  }
  const bytes = encoder.encode(str);
  return bytes.toBase64();
};

const decoder = new TextDecoder();

export const decode = (str: string): string => {
  if (!str.isWellFormed()) {
    throw new DOMException(
      'Cannot process a string with lone surrogates',
      'InvalidCharacterError',
    );
  }
  const bytes = Uint8Array.fromBase64(str);
  return decoder.decode(bytes);
};
