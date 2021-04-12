import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import {
  PrimaryBtn,
  PrimaryBtnProps,
  SecondaryBtn,
  SecondaryBtnProps,
} from 'components/button';

export default {
  title: '컴포넌트/Button',
  component: PrimaryBtn,
} as Meta;

const Template: Story<PrimaryBtnProps> = (args) => <PrimaryBtn {...args} />;

const TemplateSecondary: Story<SecondaryBtnProps> = (args) => (
  <SecondaryBtn {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  label: 'button test',
};

export const Secondary = TemplateSecondary.bind({});

Secondary.args = {
  label: 'second btn',
};
