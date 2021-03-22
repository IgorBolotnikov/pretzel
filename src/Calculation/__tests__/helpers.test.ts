import { NUMBER_TO_WORD_MAP } from 'src/Calculation/constants';
import { getRandomNumber, numberToWord } from 'src/Calculation/helpers';

type TestTuple = [number, string];

function makeTestTuple(numArray: Array<number>): Array<TestTuple> {
  return numArray.map((num: number) => [num, NUMBER_TO_WORD_MAP[num.toString()]]);
}

describe('numberToWord', () => {
  const singleDigitNumbers = makeTestTuple([
    1, 2, 3, 4, 5, 6, 7, 8, 9,
  ]);
  it.each<TestTuple>(singleDigitNumbers)(
    'works with single digit numbers',
    (num, expected) => expect(numberToWord(num)).toEqual(expected),
  );

  const simpleTwoDigitNumbers = makeTestTuple([
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 30, 40, 50, 60, 70, 80, 90,
  ]);
  it.each<TestTuple>(simpleTwoDigitNumbers)(
    'works with simple two digit numbers',
    (num, expected) => expect(numberToWord(num)).toEqual(expected),
  );

  const compositeNumbers: Array<TestTuple> = [
    [23, 'dreiundzwanzig'],
    [48, 'achtundvierzig'],
    [81, 'einundachtzig'],
    [55, 'fünfundfünfzig'],
    [128, 'einhundertachtundzwanzig'],
  ];
  it.each<TestTuple>(compositeNumbers)(
    'works with composite two digit numbers',
    (num, expected) => expect(numberToWord(num)).toEqual(expected),
  );

  it('throws error for numbers of unsupported length', () => {
    expect(() => numberToWord(4000)).toThrowError(Error);
  });
});

test('getRandomNumber should generate valid whole numbers in the set range', () => {
  const min = 1;
  const max = 100;
  for (let i = 0; i < 100; i += 1) {
    const randomNumber = getRandomNumber(min, max);
    expect(randomNumber).toBeLessThanOrEqual(max);
    expect(randomNumber).toBeGreaterThanOrEqual(min);
    expect(randomNumber - Math.floor(randomNumber)).toEqual(0);
  }
});
