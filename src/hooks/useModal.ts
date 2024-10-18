import { useState, useCallback, useMemo } from 'react';

/**
 * 모달 훅
 * @returns [open, data, 설정함수]
 */
const useModal = <T>(): [
  boolean,
  T,
  (value: undefined | boolean | T) => void,
] => {
  const [state, setState] = useState({ open: false, data: {} as T });

  const open = useMemo(() => state.open, [state.open]);

  const data = useMemo(() => state.data, [state.data]);

  const setData = useCallback((value: undefined | boolean | T) => {
    if (value === undefined) {
      // 값이 없으면 토글로 작동
      setState((prev) => ({ ...prev, open: !prev.open }));
    } else if (typeof value === 'boolean') {
      // 값이 boolean이면 open 값만 변경
      setState((prev) => ({ ...prev, open: value }));
    } else {
      // data 변경. open도 true로 변경(null이면 false로 변경)
      setState({ open: value !== null, data: value });
    }
  }, []);

  return [open, data, setData];
};

export default useModal;
