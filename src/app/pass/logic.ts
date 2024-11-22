export const toDateString = (date: Date) =>
  `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;

export const addDays = (date: Date, amount: number) =>
  new Date(date.getFullYear(), date.getMonth(), date.getDate() + amount);

export const differenceInBusinessDays = (dateLeft: Date, dateRight: Date) => {
  let startDate;
  let endDate;
  if (dateLeft.getTime() < dateRight.getTime()) {
    startDate = dateLeft;
    endDate = dateRight;
  } else {
    startDate = dateRight;
    endDate = dateLeft;
  }

  let businessDay = 0;
  for (
    let i = startDate;
    i.getTime() < endDate.getTime();
    i = new Date(i.getFullYear(), i.getMonth(), i.getDate() + 1)
  ) {
    const day = i.getDay();
    if (day !== 0 && day !== 6) {
      businessDay++;
    }
  }
  return businessDay;
};

export const getNarasarang = (amount: number, count: number) => {
  const sum = amount * count || 0;
  const discount = sum * 0.2;
  const actualAmount = sum - (discount > 5000 ? 5000 : discount);

  return {
    actualAmount,
    gain: sum - actualAmount,
  };
};

export const getPass = (amount: number, count: number) => {
  const sum = amount * count || 0;
  const actualAmount = 1400 * 44;

  return (count || 0) <= 60 ?
      {
        actualAmount,
        gain: sum - actualAmount,
      }
    : {};
};

export const getClimate = (amount: number, count: number, option: string[]) => {
  const youth = option.includes('youth');
  const bikeseoul = option.includes('bikeseoul');
  const sum = amount * count || 0;
  const actualAmount =
    youth ?
      bikeseoul ? 58000
      : 55000
    : bikeseoul ? 65000
    : 62000;

  return {
    actualAmount,
    gain: sum - actualAmount,
  };
};

export const getKPass = (amount: number, count: number, option: string) => {
  const sum = amount * count || 0;
  const actualSum = amount * Math.min(count, 60) || 0;
  const discount =
    count >= 15 ?
      (actualSum <= 200000 ? actualSum : 200000 + (actualSum - 200000) / 2) *
      ({ common: 0.2, youth: 0.3, lowIncome: 0.53 }[option] ?? 0)
    : 0;
  const actualAmount = sum - discount;

  return {
    actualAmount,
    gain: sum - actualAmount,
  };
};
