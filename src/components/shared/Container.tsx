import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  narrow?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  narrow = false,
}) => {
  return (
    <div
      className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${
        narrow ? 'max-w-5xl' : 'max-w-7xl'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
