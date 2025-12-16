export const requestHeader = (str: string): Record<string, string> => {
  const entries = str
    .split('\n')
    .map((line) => {
      const [key, ...value] = line.split(': ');
      return [key.toLowerCase(), value.join(': ')];
    })
    .filter((entrie) => entrie.length === 2);
  return Object.fromEntries(entries);
};

export const response = (str: string): string => {
  try {
    const obj = JSON.parse(str);
    const xmlParser = new DOMParser();
    const xmlDoc = xmlParser.parseFromString(obj.playback, 'text/xml');
    const videos = Array.from(
      xmlDoc.getElementsByTagName('Representation'),
    ).filter((video) => video.getAttribute('mimeType') === 'video/mp4');
    videos.sort(
      (a, b) =>
        Number.parseInt(
          b.querySelector('[kind="resolution"]')?.textContent ?? '0',
          10,
        ) -
        Number.parseInt(
          a.querySelector('[kind="resolution"]')?.textContent ?? '0',
          10,
        ),
    ); // 화질순으로 정렬
    const baseURL = videos[0].querySelector('BaseURL')?.textContent;
    if (!baseURL) {
      throw new Error('BaseURL not found');
    }
    return baseURL;
  } catch {
    return '';
  }
};
