import React, { useCallback } from 'react';

import './Input.sass';

interface InputProps {
  type?: 'text' | 'email';
  value: string;

  onChange(value: string): void;
}

export const Input = ({
  type = 'text',
  value,
  onChange,
}: InputProps): React.ReactElement => {
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value);
    }, [onChange],
  );

  return (
    <input
      className="input"
      type={type}
      value={value}
      onChange={handleChange}
    />
  );
};
