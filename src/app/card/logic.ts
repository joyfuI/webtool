export type Card = {
  name: string;
  type: '할인' | '적립' | '캐시백';
  benefitRate: number | 'themore' | 'toss';
  minimumPaymentAmount: number;
  limit: number | null;
  note: string;
};

const getReward = (amount: number, card: Card): number => {
  if (Number.isNaN(amount) || amount < card.minimumPaymentAmount) {
    return 0;
  }

  switch (card.benefitRate) {
    case 'themore':
      return amount % 1000;

    case 'toss':
      return amount < 10000 ? 300 : 500;

    default:
      return card.benefitRate > 1 ?
          card.benefitRate
        : amount * card.benefitRate;
  }
};

export const getRow = (amount: number, card: Card) => {
  const reward = getReward(amount, card);

  return {
    name: card.name,
    reward: `${reward.toLocaleString(undefined, {
      maximumFractionDigits: 0,
      roundingMode: 'trunc',
    })}원 ${card.type}`,
    picking: (amount > 0 ? (reward / amount) * 100 : 0).toFixed(2),
    limit: card.limit ? `${card.limit.toLocaleString()}원` : '무제한',
    note: card.note,
    raw: reward,
  };
};
