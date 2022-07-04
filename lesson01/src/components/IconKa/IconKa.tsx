import React from 'react';
import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { getIcon } from './utils/getIcon';

import './IconKa.css';

const cnIkonKa = cn('IkonKa');

export type IkonKaProps = {
  name:
    | 'beaver'
    | 'bug'
    | 'crab'
    | 'ghost'
    | 'kangaroo'
    | 'octopus'
    | 'otter'
    | 'sauropod'
    | 'shrimp'
    | 'sloth';
  size: string;
};

export const IkonKa: FC<IkonKaProps> = ({ name, size }) => {
  return (
    <div className={cnIkonKa()}>
      <img src={getIcon(name)} width={size} alt={`Funny ${name} icon`} />
    </div>
  );
};
