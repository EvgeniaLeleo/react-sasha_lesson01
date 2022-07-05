import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ActionNormal = Template.bind({});

ActionNormal.args = {
  type: 'action',
  buttonStatus: 'normal',
  buttonText: 'Button',
  size: 'm',
};

export const ActionLoading = Template.bind({});

ActionLoading.args = {
  type: 'action',
  buttonStatus: 'loading',
  buttonText: 'Button',
  size: 'm',
};

export const DangerNormal = Template.bind({});

DangerNormal.args = {
  type: 'danger',
  buttonStatus: 'normal',
  buttonText: 'Button',
  size: 'm',
};

export const DangerLoading = Template.bind({});

DangerLoading.args = {
  type: 'danger',
  buttonStatus: 'loading',
  buttonText: 'Button',
  size: 'm',
};

export const ActionDisabled = Template.bind({});

ActionDisabled.args = {
  type: 'action',
  buttonStatus: 'disabled',
  buttonText: 'Button',
  size: 'm',
};

export const OutlinedNormalSmall = Template.bind({});

OutlinedNormalSmall.args = {
  type: 'outlined',
  buttonStatus: 'normal',
  buttonText: 'Button',
  size: 's',
};

export const OutlinedNormalMedium = Template.bind({});

OutlinedNormalMedium.args = {
  type: 'outlined',
  buttonStatus: 'normal',
  buttonText: 'Button',
  size: 'm',
};

export const OutlinedNormalLarge = Template.bind({});

OutlinedNormalLarge.args = {
  type: 'outlined',
  buttonStatus: 'normal',
  buttonText: 'Button',
  size: 'l',
};

export const OutlinedNormalExtraLarge = Template.bind({});

OutlinedNormalExtraLarge.args = {
  type: 'outlined',
  buttonStatus: 'normal',
  buttonText: 'Button',
  size: 'xl',
};
