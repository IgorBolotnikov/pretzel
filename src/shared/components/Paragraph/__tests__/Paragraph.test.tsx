import React from 'react';
import { render, screen } from '@testing-library/react';

import { Paragraph } from 'src/shared/components/Paragraph/Paragraph';

test('renders with children', () => {
  const text = 'testing text';
  const child = <span>{text}</span>;
  render(<Paragraph>{child}</Paragraph>);
  expect(screen.getByText(text)).toBeTruthy();
});
