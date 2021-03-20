import React from 'react';
import { render } from '@testing-library/react';

import { Input } from 'src/shared/components/Input/Input';

test('Input renders', () => {
  const value = 'hello';
  const onChange = (): void => {};
  render(<Input value={value} onChange={onChange}/>);
});
