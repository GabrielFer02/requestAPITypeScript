export interface CountList {
  [key: string]: number;
}

export function countBy(array: (string | number)[]) {
  return array.reduce((previousValue: CountList, item) => {
    if (previousValue[item]) {
      previousValue[item] += 1;
    } else {
      previousValue[item] = 1;
    }
    return previousValue;
  }, {});
}
