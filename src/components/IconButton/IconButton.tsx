import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './IconButton.css';
import { IconName } from '../types/IconName';
import { Icon, IconProps } from '../Icon/Icon';

const cnIconButton = cn('IconButton');

export type IconButtonProps = {
  icon: IconName;
  iconSize: string;
  buttonText: string;
};

export const IconButton: FC<IconButtonProps> = ({
  icon,
  buttonText,
  iconSize,
}) => {
  const buttonIcon: IconProps = {
    iconName: icon,
    size: iconSize,
  };

  return (
    <button className={cnIconButton()}>
      <Icon {...buttonIcon} />
      {buttonText ? buttonText.toUpperCase() : `${icon} icon`.toUpperCase()}
    </button>
  );
};
