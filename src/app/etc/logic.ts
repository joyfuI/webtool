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

type PlaybackType = {
  videos: {
    list: {
      encodingOption: Record<string, string>;
      source: string;
    }[];
  };
};

export const response = (str: string): string => {
  try {
    const obj = JSON.parse(str);
    const playback = JSON.parse(obj.playback) as PlaybackType;
    const videos = playback.videos.list;
    videos.sort(
      (a, b) =>
        parseInt(b.encodingOption.name) - parseInt(a.encodingOption.name),
    ); // 화질순으로 정렬
    return videos[0].source;
  } catch {
    return '';
  }
};
