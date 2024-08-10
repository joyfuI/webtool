export type Card = {
  name: string; // 이름
  type: '할인' | '적립' | '캐시백'; // 타입
  rewardsRate: number | 'themore' | 'toss'; // 혜택률. 1보다 크면 고정 금액 혜택
  minimumPaymentAmount?: number; // 최소 결제 금액
  limit?: number; // 최대 혜택 금액
  note?: string; // 비고
};

const cardData: Card[] = [
  {
    name: '더모아 카드',
    type: '적립',
    rewardsRate: 'themore',
    minimumPaymentAmount: 5000,
    note: '5천원 이상 금액 결제 시 1,000원 미만 금액 가맹점 당 하루 1회 적립 / 전월실적 30만원 / 전기, 가스요금 적립 가능',
  },
  {
    name: '톡톡 마이포인트 카드',
    type: '적립',
    rewardsRate: 0.055,
    minimumPaymentAmount: 0,
    limit: 200000,
    note: 'KB Pay 5.5% 적립 / 전월실적: X / 가스요금 적립 가능',
  },
  {
    name: '케이 퍼스트 카드',
    type: '할인',
    rewardsRate: 0.01,
    minimumPaymentAmount: 0,
    note: '1% 할인 / 전월실적 X / 무이자할부 3개월',
  },
  {
    name: '케이 퍼스트 카드 (생활편의업종)',
    type: '할인',
    rewardsRate: 0.015,
    minimumPaymentAmount: 0,
    note: '만원 이상 음식점, 편의점 1.5% 할인 / 전월실적 X / 무이자할부 3개월',
  },
  {
    name: '딥에코 카드',
    type: '캐시백',
    rewardsRate: 0.05,
    minimumPaymentAmount: 0,
    limit: 600000,
    note: '티몬, 쿠팡, 위메프, 11번가, G마켓, 옥션 5% 적립 / 전월실적 30만원 / 만보걷기 15일 이상인 경우 5천원 캐시백',
  },
  {
    name: '카드의정석 포인트 카드',
    type: '적립',
    rewardsRate: 0.04,
    minimumPaymentAmount: 10000,
    limit: 250000,
    note: '만원 이상 네이버페이, 카카오페이, 페이코 4% 적립 / 전월실적 30만원',
  },
  {
    name: '페이백 체크카드',
    type: '캐시백',
    rewardsRate: 0.02,
    minimumPaymentAmount: 0,
    limit: 500000,
    note: '네이버페이, 카카오페이, 페이코 2% 캐시백',
  },
  {
    name: '페이코 우리 체크카드',
    type: '적립',
    rewardsRate: 0.015,
    minimumPaymentAmount: 0,
    limit: 666667,
    note: '페이코 포인트 적립 / 상품권, 가스요금 적립 가능',
  },
  {
    name: '네이버페이 신한 체크카드',
    type: '적립',
    rewardsRate: 0.01,
    minimumPaymentAmount: 0,
    limit: 1000000,
    note: '네이버페이 포인트 적립 / 상품권, 전기, 가스요금 적립 가능',
  },
  {
    name: '마이 체크카드',
    type: '캐시백',
    rewardsRate: 300,
    minimumPaymentAmount: 5000,
    note: '5천원 이상 대상 가맹점 당 하루 1회 300원 캐시백',
  },
  {
    name: '나라사랑 체크카드',
    type: '할인',
    rewardsRate: 0.2,
    minimumPaymentAmount: 0,
    limit: 25000,
    note: '대중교통(버스/지하철) 20% 할인',
  },
  {
    name: '토스뱅크 체크카드',
    type: '캐시백',
    rewardsRate: 'toss',
    minimumPaymentAmount: 3000,
    note: '대상 영역 당 하루 1회 3천원~만원 300원, 만원 이상 500원 캐시백',
  },
];

export default cardData;
