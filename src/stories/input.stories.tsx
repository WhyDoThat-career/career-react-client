import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import {
  PrimeInput,
  PrimeInputProps,
  SecondaryInput,
  SecondaryInputProps,
} from 'components/input';

export default {
  title: '컴포넌트/Input',
  component: PrimeInput,
} as Meta;

const Template: Story<PrimeInputProps> = (args) => <PrimeInput {...args} />;
const TemplateSecond: Story<SecondaryInputProps> = (args) => (
  <SecondaryInput {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'input 라벨',
};

export const Secondary = TemplateSecond.bind({});
Secondary.args = {
  label: 'second input 라벨',
};
