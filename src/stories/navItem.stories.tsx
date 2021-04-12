import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import { MemoryRouter } from 'react-router-dom';
import { NavItem, NavItemProps } from 'components/nav/navItem';

export default {
  title: '컴포넌트/NavItem',
  component: NavItem,
} as Meta;

const Template: Story<NavItemProps> = (args) => (
  <MemoryRouter>
    <NavItem {...args} />s
  </MemoryRouter>
);
export const navItem = Template.bind({});
navItem.args = {
  name: '네비게이터',
  route: '/test',
};
