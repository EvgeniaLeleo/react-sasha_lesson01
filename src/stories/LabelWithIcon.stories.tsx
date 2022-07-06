import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LabelWithIcon } from './LabelWithIcon';

export default {
  title: 'LabelWithIcon',
  component: LabelWithIcon,
  parameters: {
    backgrounds: {
      default: 'light_purple',
      values: [
        { name: 'light_purple', value: '#faf6ff' },
        { name: 'white', value: '#fff' },
      ],
    },
  },
} as ComponentMeta<typeof LabelWithIcon>;

const Template: ComponentStory<typeof LabelWithIcon> = (args) => (
  <LabelWithIcon {...args} />
);

export const BeaverLabel = Template.bind({});

BeaverLabel.args = {
  icon: 'beaver',
  iconSize: '80px',
  labelText: 'Бобр добр',
  fontSize: '56px',
};

export const OtterLabel = Template.bind({});

OtterLabel.args = {
  icon: 'otter',
  iconSize: '90px',
  labelText: 'Otter stories',
  fontSize: '46px',
};

export const KangarooLabel = Template.bind({});

KangarooLabel.args = {
  icon: 'kangaroo',
  iconSize: '60px',
  labelText: 'Wildlife of Australia',
  fontSize: '36px',
};
