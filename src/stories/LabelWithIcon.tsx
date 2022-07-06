import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';

import './LabelWithIcon.css';
import { IconName } from './types/IconName';
import { Icon, IconProps } from './Icon';

const cnLabelWithIcon = cn('LabelWithIcon');

export type LabelWithIconProps = {
  icon: IconName;
  iconSize: string;
  labelText: string;
  fontSize: string;
};

export const LabelWithIcon: FC<LabelWithIconProps> = ({
  icon,
  iconSize,
  labelText,
  fontSize,
}) => {
  const labelIcon: IconProps = {
    iconName: icon,
    size: iconSize,
  };

  console.log(fontSize);
  return (
    <div className={cnLabelWithIcon()}>
      <Icon {...labelIcon} />
      <span className={cnLabelWithIcon('Text')} style={{ fontSize: fontSize }}>
        {labelText ? labelText : 'Unnamed label'}
      </span>
    </div>
  );
};
