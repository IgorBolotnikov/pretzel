import React from 'react';

import { PLUS } from 'src/Calculation/constants';
import { numberToWord } from 'src/Calculation/helpers';
import { Paragraph } from 'src/shared/components/Paragraph/Paragraph';

interface EquationProps {
  leftNumber: number;
  rightNumber: number;
  operator?: string;
}

export const Equation = ({
  leftNumber,
  rightNumber,
  operator = PLUS,
}: EquationProps): React.ReactElement => (
  <Paragraph>
    <span>{numberToWord(leftNumber)}</span>
    <span>{operator}</span>
    <span>{numberToWord(rightNumber)}</span>
  </Paragraph>
);
