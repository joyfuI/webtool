import type { Card } from './cardData';

const getReward = (amount: number, card: Card): number => {
  if (Number.isNaN(amount) || amount < (card.minimumPaymentAmount ?? 0)) {
    return 0;
  }

  if (card.limit && amount > card.limit) {
    amount = card.limit;
  }

  switch (card.rewardsRate) {
    case 'themore':
      return amount % 1000;

    case 'toss':
      return amount < 10000 ? 300 : 500;

    default:
      return card.rewardsRate > 1 ?
          card.rewardsRate
        : amount * card.rewardsRate;
  }
};

export const getRow = (amount: number, card: Card) => {
  const reward = getReward(amount, card);

  return {
    name: card.name,
    rewardStr: `${reward.toLocaleString(undefined, {
      maximumFractionDigits: 0,
      roundingMode: 'trunc',
    })}원 ${card.type}`,
    picking: (amount > 0 ? (reward / amount) * 100 : 0).toFixed(2),
    limit: card.limit ? `${card.limit.toLocaleString()}원` : '무제한',
    note: card.note ?? '',
    reward,
  };
};
