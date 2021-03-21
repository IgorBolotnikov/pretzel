import React from 'react';

interface ParagraphProps {
  children: React.ReactNode,
  className?: string,
}

export const Paragraph = ({
  children,
  className,
}: ParagraphProps): React.ReactElement => (
  <p className={className}>
    {children}
  </p>
);
