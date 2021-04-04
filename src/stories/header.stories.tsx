import React from 'react';
import { RecoilRoot } from 'recoil';

import { Story, Meta } from '@storybook/react/types-6-0';

import { HeaderBar, HeaderBarProps } from 'components/article';

export default {
  title: '아티클/header',
  component: HeaderBar,
} as Meta;

const Template: Story<HeaderBarProps> = (args) => <HeaderBar {...args} />;

export const Header = Template.bind({});
Header.args = { isLogin: false };
