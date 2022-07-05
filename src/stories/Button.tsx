import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';
import './Button.css';

const cnButton = cn(' Button');

export type ButtonProps = {
  type: 'action' | 'outlined' | 'danger';
  buttonStatus: 'normal' | 'disabled' | 'loading';
  size: 's' | 'm' | 'l' | 'xl';
  buttonText?: string;
};

type ButtonSize = 's' | 'm' | 'l' | 'xl';

export const Button: FC<ButtonProps> = ({
  type,
  buttonStatus,
  size,
  buttonText,
}) => {
  const buttonSize = (size: ButtonSize) => {
    switch (size) {
      case 's':
        return '12px';
      case 'm':
        return '20px';
      case 'l':
        return '30px';
      case 'xl':
        return '40px';
      default:
        return '16px';
    }
  };

  return (
    <button
      className={cnButton({
        type: type,
        status: buttonStatus,
      })}
      style={{
        padding: buttonSize(size),
        fontSize: `${parseInt(buttonSize(size)) * 0.7}px`,
      }}
    >
      {buttonText ? buttonText.toUpperCase() : 'Unnamed button'.toUpperCase()}
    </button>
  );
};
