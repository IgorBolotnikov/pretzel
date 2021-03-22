import { AND, NUMBER_TO_WORD_MAP } from 'src/Calculation/constants';

export function numberToWord(num: number): string {
  const strNum = num.toString();
  const numLen = strNum.length;
  switch (numLen) {
    case 1:
      return NUMBER_TO_WORD_MAP[strNum];
    case 2:
      if (strNum.startsWith('1') || strNum.endsWith('0')) {
        return NUMBER_TO_WORD_MAP[strNum];
      }
      return NUMBER_TO_WORD_MAP[strNum[1]] + AND + NUMBER_TO_WORD_MAP[`${strNum[0]}0`];
    case 3:
      return NUMBER_TO_WORD_MAP[`${strNum[0]}00`] + numberToWord(Number(strNum.slice(1)));
    default:
      throw new Error(`Received invalid number ${strNum}`);
  }
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 */
export function getRandomNumber(min: number = 1, max: number = 100): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
