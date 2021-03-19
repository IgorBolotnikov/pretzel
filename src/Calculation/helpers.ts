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
