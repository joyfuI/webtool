import fetchJson from '@/utils/fetchJson';

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

export type GetHomeBroadResponse = {
  broadNo: number; // 290080510
  broadCateNo: number; // 810000
  parentBroadNo: number; // 0
  userId: string; // "9mogu9"
  broadTitle: string; // "오늘의 선물은 나야"
  broadType: string; // "21"
  broadStart: string; // "2025-12-19T10:00:16.000Z"
  currentSumViewer: number; // 158
  broadGrade: number; // 0
  subscriptionOnly: number; // 0
  totalViewCnt: number; // 2052
  visitBroadType: number; // 1
  isPassword: boolean; // false
  categoryName: string; // "버추얼"
  categoryTags: string[];
  hashTags: string[];
  autoHashTags: string[];
};

export const getHomeBroad = (userId: string) =>
  fetchJson<GetHomeBroadResponse>(
    `https://api-channel.sooplive.co.kr/v1.1/channel/${userId}/home/section/broad`,
  ).catch(() => Promise.resolve(null));
