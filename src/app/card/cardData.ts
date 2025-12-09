import type { ReactNode } from 'react';

import KBank from './note/KBank';
import KFirst from './note/KFirst';
import OneThe from './note/OneThe';
import TossBank from './note/TossBank';

type RewardType = {
  type: '할인' | '적립' | '캐시백'; // 타입
  rewardsRate: number | 'themore' | 'themore2' | 'kfirst15' | 'toss'; // 혜택률. 1보다 크면 고정 금액 혜택
  minimumPaymentAmount?: number; // 최소 결제 금액
  limit?: number; // 최대 혜택 금액
};

export type IndustryType =
  | '음식점'
  | '편의점'
  | '패스트푸드'
  | '카페'
  | '오픈마켓'
  | '대형마트'
  | '전기요금'
  | '가스요금'
  | '해외'
  | '상품권';

export type CardType = {
  name: string; // 이름
  note?: ReactNode | (() => ReactNode); // 비고
} & Partial<Record<IndustryType, Partial<RewardType>>> &
  RewardType;

const cardData: CardType[] = [
  {
    name: '더모아 카드',
    type: '적립',
    rewardsRate: 'themore',
    minimumPaymentAmount: 5000,
    해외: { rewardsRate: 'themore2' },
    상품권: { rewardsRate: 0 },
    note: '5천원 이상 결제 시 천원 미만 금액 가맹점 당 하루 1회 적립 / 전월실적 30만원',
  },
  {
    name: '네이버 현대 카드',
    type: '적립',
    rewardsRate: 0.01,
    오픈마켓: { rewardsRate: 0.05, limit: 200000 },
    전기요금: { rewardsRate: 0 },
    가스요금: { rewardsRate: 0 },
    상품권: { rewardsRate: 0 },
    note: '1% 네이버페이 포인트 적립 / 네이버플러스 멤버십 적립 대상 5% 네이버페이 포인트 적립 / 전월실적 30만원',
  },
  {
    name: '원더 카드',
    type: '적립',
    rewardsRate: 0.001,
    음식점: { rewardsRate: 0.02, limit: 50000 },
    편의점: { rewardsRate: 0.03, limit: 50000 },
    패스트푸드: { rewardsRate: 0.04, limit: 50000 },
    note: OneThe,
  },
  {
    name: '톡톡 마이포인트 카드',
    type: '적립',
    rewardsRate: 0.055,
    limit: 200000,
    전기요금: { rewardsRate: 0 },
    해외: { rewardsRate: 0 },
    상품권: { rewardsRate: 0 },
    note: 'KB Pay 5.5% 적립 / 전월실적 X',
  },
  {
    name: '케이 퍼스트 카드',
    type: '할인',
    rewardsRate: 0.01,
    음식점: { rewardsRate: 'kfirst15' },
    편의점: { rewardsRate: 'kfirst15' },
    카페: { rewardsRate: 'kfirst15' },
    대형마트: { rewardsRate: 'kfirst15' },
    상품권: { rewardsRate: 0 },
    note: KFirst,
  },
  {
    name: 'MG+ S 하나 카드',
    type: '할인',
    rewardsRate: 0.1,
    minimumPaymentAmount: 10000,
    limit: 150000,
    전기요금: { rewardsRate: 0 },
    가스요금: { rewardsRate: 0 },
    상품권: { rewardsRate: 0 },
    note: '만원 이상 네이버페이, 카카오페이, 토스페이, SSG페이, 11pay, 스마일페이 10% 할인 / 유튜브프리미엄, 디즈니플러스, 웨이브, 넷플릭스, 티빙 월 정기결제 50% 할인 / 네이버플러스멤버십, 컬리멤버스, 쿠팡와우 월 정기결제 50% 할인 / 전월실적 30만원',
  },
  // {
  //   name: '카드의정석 포인트 카드',
  //   type: '적립',
  //   rewardsRate: 0.038,
  //   minimumPaymentAmount: 10000,
  //   limit: 333333,
  //   오픈마켓: { rewardsRate: 0.04, limit: 250000 },
  //   전기요금: { rewardsRate: 0 },
  //   가스요금: { rewardsRate: 0 },
  //   해외: { rewardsRate: 0 },
  //   상품권: { rewardsRate: 0 },
  //   note: '만원 이상 네이버페이, 카카오페이, 페이코 4% 적립 / 전월실적 30만원',
  // },
  {
    name: '페이백 체크카드',
    type: '캐시백',
    rewardsRate: 0.02,
    limit: 500000,
    해외: { rewardsRate: 0 },
    상품권: { rewardsRate: 0 },
    note: '네이버페이, 카카오페이, 페이코 2% 캐시백 / 전월실적 X',
  },
  {
    name: '마이 체크카드',
    type: '캐시백',
    rewardsRate: 0,
    편의점: { rewardsRate: 300, minimumPaymentAmount: 5000 },
    패스트푸드: { rewardsRate: 300, minimumPaymentAmount: 5000 },
    카페: { rewardsRate: 300, minimumPaymentAmount: 5000 },
    note: KBank,
  },
  {
    name: '토스뱅크 체크카드',
    type: '캐시백',
    rewardsRate: 0,
    편의점: { rewardsRate: 'toss', minimumPaymentAmount: 3000 },
    패스트푸드: { rewardsRate: 'toss', minimumPaymentAmount: 3000 },
    카페: { rewardsRate: 'toss', minimumPaymentAmount: 3000 },
    note: TossBank,
  },
  {
    name: '네이버페이 머니카드',
    type: '적립',
    rewardsRate: 0.003,
    오픈마켓: { rewardsRate: 0.015 },
    전기요금: { rewardsRate: 0 },
    가스요금: { rewardsRate: 0 },
    해외: { rewardsRate: 0.03 },
    상품권: { rewardsRate: 0 },
    note: '0.3% 네이버페이 포인트 적립 / 네이버쇼핑 1.5% 네이버페이 포인트 적립 / 해외 3%, 수수료 네이버페이 포인트 적립 / 전월실적 X',
  },
];

export default cardData;
