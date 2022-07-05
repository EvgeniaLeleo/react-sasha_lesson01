import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './IconButton.css';
import { IconName } from '../types/IconName';
import { Icon, IconProps } from '../Icon/Icon';

const cnIconButton = cn('IconButton');

export type IconButtonProps = {
  icon: IconName;
  buttonText: string;
};

export const IconButton: FC<IconButtonProps> = ({ icon, buttonText }) => {
  const buttonIcon: IconProps = {
    iconName: icon,
    size: '30px',
  };

  return (
    <button className={cnIconButton()}>
      <Icon {...buttonIcon} />
      {buttonText ? buttonText.toUpperCase() : 'Unnamed button'.toUpperCase()}
    </button>
  );
};
