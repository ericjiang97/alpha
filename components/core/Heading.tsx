import React from 'react';

export interface HeadingProps {
  use?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5';
  children: string;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ use, children, className }) => {
  switch (use) {
    case 'h1':
      return <h1 className={`text-4xl font-semibold ${className}`}>{children}</h1>;
    case 'h2':
      return <h2 className={`text-3xl font-semibold ${className}`}>{children}</h2>;
    case 'h3':
      return <h3 className={`text-2xl font-semibold ${className}`}>{children}</h3>;
    case 'h4':
      return <h4 className={`text-xl font-semibold ${className}`}>{children}</h4>;
    case 'h5':
      return <h5 className={`text-lg font-semibold ${className}`}>{children}</h5>;
    default:
      return <p className={`text-lg font-semibold ${className}`}>{children}</p>;
  }
};

export default Heading;
