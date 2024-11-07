const phi = (1 + Math.sqrt(5)) / 2;
const phi_ = 1 - phi;

const binet = (num: number) =>
  Math.round((phi ** num - phi_ ** num) / Math.sqrt(5));

const inverseFibonacci = (num: number) =>
  Math.round(Math.log(Math.sqrt(5) * num) / Math.log(phi));

const isPerfect = (num: number) => {
  const rootn = Math.floor(Math.sqrt(num));
  return rootn * rootn === num ? true : false;
};

const isFibonacci = (num: number) => {
  const x = 5 * num * num + 4;
  const y = 5 * num * num - 4;
  return isPerfect(x) || isPerfect(y);
};

export const fibonaChicken = (num: number): number => {
  if (Number.isNaN(num) || num === 0) {
    return 0;
  }
  if (num <= 2) {
    return 1;
  }
  let i = inverseFibonacci(num);
  if (isFibonacci(num)) {
    return binet(i - 1);
  } else {
    while (num > binet(i)) {
      i += 1;
    }
    return binet(i - 2) + fibonaChicken(num - binet(i - 1));
  }
};
