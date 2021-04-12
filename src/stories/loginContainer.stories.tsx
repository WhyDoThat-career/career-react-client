import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';

import LoginContainter from 'components/article/loginContainter';

export default {
  title: '아티클/loginContainer',
  component: LoginContainter,
} as Meta;

const Template: Story = (args) => <LoginContainter {...args} />;

export const loginComponent = Template.bind({});
loginComponent.args = {};
