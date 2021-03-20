import React, { useCallback } from 'react';

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
      type={type}
      value={value}
      onChange={handleChange}
    />
  );
};
