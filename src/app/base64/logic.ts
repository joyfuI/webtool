export const encode = (str: string): string => {
  if (!str.isWellFormed()) {
    throw new DOMException(
      'Cannot process a string with lone surrogates',
      'InvalidCharacterError',
    );
  }
  const bytes = new TextEncoder().encode(str);
  const binString = Array.from(bytes, (byte) =>
    String.fromCodePoint(byte),
  ).join('');
  return btoa(binString);
};

export const decode = (str: string): string => {
  if (!str.isWellFormed()) {
    throw new DOMException(
      'Cannot process a string with lone surrogates',
      'InvalidCharacterError',
    );
  }
  const binString = atob(str);
  const bytes = Uint8Array.from(binString, (m) => m.codePointAt(0) ?? 0);
  return new TextDecoder().decode(bytes);
};
