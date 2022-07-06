import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { IconButton } from './IconButton';

export default {
  title: 'IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const BugButton = Template.bind({});

BugButton.args = {
  icon: 'bug',
  iconSize: '30px',
  buttonText: '',
};

export const OctopusButton = Template.bind({});

OctopusButton.args = {
  icon: 'octopus',
  iconSize: '70px',
  buttonText: "what's up?",
};

export const SlothButton = Template.bind({});

SlothButton.args = {
  icon: 'sloth',
  iconSize: '90px',
  buttonText: 'unhasting button',
};

export const ShrimpButton = Template.bind({});

ShrimpButton.args = {
  icon: 'shrimp',
  iconSize: '90px',
  buttonText: 'йа креведко',
};
