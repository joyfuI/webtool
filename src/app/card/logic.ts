import type { CardType, IndustryType } from './cardData';

const getReward = (
  card: CardType,
  { amount, industry }: { amount: number; industry: string },
): number => {
  const card2 = {
    ...card,
    ...((
      card[industry as IndustryType] &&
      (card[industry as IndustryType]?.minimumPaymentAmount ?? Infinity) <=
        amount
    ) ?
      card[industry as IndustryType]
    : {}),
  };

  if (Number.isNaN(amount) || amount < (card2.minimumPaymentAmount ?? 0)) {
    return 0;
  }

  if (card2.limit && amount > card2.limit) {
    amount = card2.limit;
  }

  switch (card2.rewardsRate) {
    case 'themore':
      return amount % 1000;

    case 'toss':
      return amount < 10000 ? 300 : 500;

    default:
      return card2.rewardsRate > 1 ?
          card2.rewardsRate
        : Math.floor(amount * card2.rewardsRate);
  }
};

export const getRow = (
  card: CardType,
  formData: { amount: number; industry: string },
) => {
  const type = card[formData.industry as IndustryType]?.type ?? card.type;
  const reward = getReward(card, formData);
  const limit = card[formData.industry as IndustryType]?.limit ?? card.limit;

  return {
    name: card.name,
    rewardStr: `${reward.toLocaleString()}원 ${type}`,
    picking: (formData.amount > 0 ?
      (reward / formData.amount) * 100
    : 0
    ).toFixed(2),
    limit: limit ? `${limit.toLocaleString()}원` : '무제한',
    note: card.note ?? '',
    reward,
  };
};
