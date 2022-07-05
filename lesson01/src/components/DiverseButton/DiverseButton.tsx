import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';
import './DiverseButton.css';

const cnDiverseButton = cn('DiverseButton');

export type DiverseButtonProps = {
  type: 'action' | 'outlined' | 'danger';
  buttonStatus: 'normal' | 'disabled' | 'loading';
  size: 's' | 'm' | 'l' | 'xl';
  buttonText?: string;
};

export const DiverseButton: FC<DiverseButtonProps> = ({
  type,
  buttonStatus,
  size,
  buttonText,
}) => {
  const buttonSize = (size: string) => {
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
        break;
    }
  };

  return (
    <button
      className={cnDiverseButton({
        type: type,
        status: buttonStatus,
      })}
      style={{ padding: buttonSize(size) }}
    >
      {buttonText ? buttonText.toUpperCase() : 'Unnamed button'.toUpperCase()}
    </button>
  );
};
