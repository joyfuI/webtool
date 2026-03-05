const toHex = (buffer: ArrayBuffer): string =>
  Array.from(new Uint8Array(buffer), (value) =>
    value.toString(16).padStart(2, '0'),
  ).join('');

export const digestFile = async (
  algorithm: string,
  file: File,
): Promise<string> => {
  const data = await file.arrayBuffer();
  const digest = await crypto.subtle.digest(algorithm, data);
  return toHex(digest);
};

export const digestText = async (
  algorithm: string,
  text: string,
): Promise<string> => {
  const data = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest(algorithm, data);
  return toHex(digest);
};
