import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './SimpleButton.css';

const cnSimpleButton = cn('SimpleButton');

export type SimpleButtonProps = { buttonText?: string };

export const SimpleButton: FC<SimpleButtonProps> = ({ buttonText }) => {
  return (
    <button className={cnSimpleButton()}>
      {buttonText ? buttonText.toUpperCase() : 'Unnamed button'.toUpperCase()}
    </button>
  );
};
