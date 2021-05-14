import React from "react";
import { MemoryRouter } from "react-router-dom";

import { Story, Meta } from "@storybook/react/types-6-0";

import { HeaderBar } from "components/article";

export default {
  title: "아티클/header",
  component: HeaderBar,
} as Meta;

const Template: Story<any> = (args) => (
  <MemoryRouter>
    <HeaderBar {...args} />
  </MemoryRouter>
);

export const Header = Template.bind({});
Header.args = { isLogin: false };
