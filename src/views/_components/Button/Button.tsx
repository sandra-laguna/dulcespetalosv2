import React from 'react';

import './Button.css';

interface Props {
  text: string;
  type: 'primary' | 'secondary';
}

export const Button: React.FC<Props> = ({ text, type }) => {
  return <button className={`button ${type}`}>{text}</button>;
};
