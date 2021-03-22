import React, { useCallback, useState } from 'react';

import { EQUALS, PLUS } from 'src/Calculation/constants';
import { getRandomNumber, numberToWord } from 'src/Calculation/helpers';
import { Input } from 'src/shared/components/Input/Input';
import { Paragraph } from 'src/shared/components/Paragraph/Paragraph';

import './CalculationForm.sass';

export const CalculationForm = (): React.ReactElement => {
  const [left, setLeft] = useState(() => getRandomNumber());
  const [right, setRight] = useState(() => getRandomNumber());
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState<string>('');

  const resetForm = useCallback(() => {
    setMessage('');
    setLeft(getRandomNumber());
    setRight(getRandomNumber());
    setInputValue('');
  }, []);

  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const expectedAnswer = numberToWord(left + right);
    if (inputValue === expectedAnswer) {
      setMessage('Correct!');
      setTimeout(() => {
        resetForm();
      }, 1000);
    } else {
      setMessage('Nope!');
      setTimeout(() => {
        setMessage('');
      }, 1000);
    }
  }, [inputValue, left, resetForm, right]);

  return (
    <div className="calculation-form">
      {!!message && (
        <div>
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <Paragraph>
          <span>{numberToWord(left)}</span>
          <span className="calculation-form__operator">{PLUS}</span>
          <span>{numberToWord(right)}</span>
          <span className="calculation-form__operator">{EQUALS}</span>
        </Paragraph>
        <Input value={inputValue} onChange={setInputValue} />
      </form>

    </div>
  );
};
