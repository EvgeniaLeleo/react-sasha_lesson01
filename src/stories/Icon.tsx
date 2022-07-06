import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { getIcon } from './utils/getIcon';

import './Icon.css';
import { IconName } from './types/IconName';

const cnIcon = cn('Icon');

export type IconProps = {
  iconName: IconName;
  size: string;
};

export const Icon: FC<IconProps> = ({ iconName, size }) => {
  return (
    <div className={cnIcon()}>
      <img
        src={getIcon(iconName)}
        width={size}
        alt={`Funny ${iconName} icon`}
      />
    </div>
  );
};
