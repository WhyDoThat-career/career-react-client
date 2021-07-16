import React from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import SubNav from "components/nav/subNav";

export default {
  title: "아티클/subnav",
  component: SubNav,
} as Meta;

const Template: Story = (args) => <SubNav {...args} />;

export const subNav = Template.bind({});
subNav.args = {};
