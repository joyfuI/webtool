export type Card = {
  name: string;
  type: 'discount' | 'earn' | 'cashback';
  rate: number | 'themore' | 'toss';
  minimum: number;
  limit: number | null;
  note: string;
};

const getReward = (amount: number, card: Card): number => {
  if (Number.isNaN(amount) || amount < card.minimum) {
    return 0;
  }

  switch (card.rate) {
    case 'themore':
      return amount % 1000;

    case 'toss':
      return amount < 10000 ? 300 : 500;

    default:
      return card.rate > 1 ? card.rate : amount * card.rate;
  }
};

export const getRow = (amount: number, card: Card) => {
  const reward = getReward(amount, card);

  return {
    name: card.name,
    reward: `${reward.toLocaleString(undefined, {
      maximumFractionDigits: 0,
      roundingMode: 'trunc',
    })}원 ${{ discount: '할인', earn: '적립', cashback: '캐시백' }[card.type]}`,
    picking: (amount > 0 ? (reward / amount) * 100 : 0).toFixed(2),
    limit: card.limit ? `${card.limit.toLocaleString()}원` : '무제한',
    note: card.note,
    raw: reward,
  };
};
