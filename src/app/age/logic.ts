export const toDateString = (date: Date) =>
  `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;

export const range = (length: number, start: number = 0) =>
  Array.from({ length }, (_, i) => i + start);

export const getYearAge = (birth: Date, base: Date = new Date()) => {
  return base.getFullYear() - birth.getFullYear();
};

export const getAge = (birth: Date, base: Date = new Date()) => {
  const birthDay = new Date(
    base.getFullYear(),
    birth.getMonth(),
    birth.getDate(),
  );
  const age = getYearAge(birth, base);
  return birthDay.getTime() <= base.getTime() ? age : age - 1;
};

export const getKoreanAge = (birth: Date, base: Date = new Date()) => {
  return getYearAge(birth, base) + 1;
};

export const formatDistanceYear = (distance: number) => {
  if (distance < 0) {
    return `${-distance}년 전`;
  }
  if (distance > 0) {
    return `${distance}년 후`;
  }
  return '올해';
};

export const EVENT_LIST = new Map([
  [1, '출생'],
  [2, '첫돌'],
  [8, '초등학교 1학년'],
  [9, '초등학교 2학년'],
  [10, '청소년 / 초등학교 3학년'],
  [11, '초등학교 4학년'],
  [12, '초등학교 5학년'],
  [13, '초등학교 6학년'],
  [14, '중학교 1학년'],
  [15, '중학교 2학년 / 지우학(志于學)'],
  [16, '중학교 3학년'],
  [17, '고등학교 1학년'],
  [18, '고등학교 2학년'],
  [19, '고등학교 3학년'],
  [20, '성인 / 대학교 새내기'],
  [30, '이립(而立)'],
  [40, '불혹(不惑)'],
  [50, '지천명(知天命)'],
  [60, '이순(耳順)'],
  [61, '환갑(還甲)'],
  [62, '진갑(進甲)'],
  [66, '노인 / 미수(美壽)'],
  [70, '고희(古稀)'],
  [77, '희수(喜壽)'],
  [80, '산수(傘壽)'],
  [88, '미수(米壽)'],
  [90, '졸수(卒壽)'],
  [99, '백수(白壽)'],
  [100, '상수(上壽)'],
]);
