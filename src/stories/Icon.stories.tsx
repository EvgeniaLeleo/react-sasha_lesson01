import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon } from './Icon';

export default {
  title: 'Icon',
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const BeaverIcon = Template.bind({});

BeaverIcon.args = {
  iconName: 'beaver',
  size: '150px',
};

export const BugIcon = Template.bind({});

BugIcon.args = {
  iconName: 'bug',
  size: '150px',
};

export const CrabIcon = Template.bind({});

CrabIcon.args = {
  iconName: 'crab',
  size: '150px',
};

export const GhostIcon = Template.bind({});

GhostIcon.args = {
  iconName: 'ghost',
  size: '150px',
};

export const KangarooIcon = Template.bind({});

KangarooIcon.args = {
  iconName: 'kangaroo',
  size: '150px',
};

export const OctopusIcon = Template.bind({});

OctopusIcon.args = {
  iconName: 'octopus',
  size: '150px',
};

export const OtterIcon = Template.bind({});

OtterIcon.args = {
  iconName: 'otter',
  size: '150px',
};

export const SauropodIcon = Template.bind({});

SauropodIcon.args = {
  iconName: 'sauropod',
  size: '150px',
};

export const ShrimpIcon = Template.bind({});

ShrimpIcon.args = {
  iconName: 'shrimp',
  size: '150px',
};

export const SlothIcon = Template.bind({});

SlothIcon.args = {
  iconName: 'sloth',
  size: '150px',
};
