import { useCallback, useSyncExternalStore } from 'react';

const subscribe = (callback: () => void) => {
  window.addEventListener('hashchange', callback);
  return () => {
    window.removeEventListener('hashchange', callback);
  };
};

const getSnapshot = () =>
  decodeURIComponent(window.location.hash.replace(/^#/, ''));

const getServerSnapshot = () => '';

/**
 * url hash 훅
 * @returns [현재값, 설정함수]
 */
const useHash = (): [string, (newValue: string) => void] => {
  const hash = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setHash = useCallback(
    (newValue: string) => {
      if (newValue === hash) {
        return;
      }
      if (!newValue) {
        // hash 제거
        window.location.hash = '';
        const newUrl = `${window.location.pathname}${window.location.search}`;
        window.history.replaceState(null, '', newUrl); // url 끝에 #이 보기싫어서 제거
      } else {
        window.location.hash = newValue;
      }
    },
    [hash],
  );

  return [hash, setHash];
};

export default useHash;
