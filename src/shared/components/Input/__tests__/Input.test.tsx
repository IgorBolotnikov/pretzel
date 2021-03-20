import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { Input } from 'src/shared/components/Input/Input';

test('Input renders', () => {
  const value = 'hello';
  const onChange = (): void => {};
  render(<Input value={value} onChange={onChange} />);
  expect(screen.getByDisplayValue(value)).toBeTruthy();
});

test('Input reacts to value changes', () => {
  let value = 'hello';
  const onChange = jest.fn();
  const renderer = render(<Input value={value} onChange={onChange} />);
  const input = screen.getByDisplayValue(value);
  value = 'hello again';
  fireEvent.change(input, { target: { value } });
  expect(onChange).toHaveBeenCalledTimes(1);
  renderer.rerender(<Input value={value} onChange={onChange} />);
  expect(screen.getByDisplayValue(value)).toBeTruthy();
});
