import React from "react";
import { RecoilRoot } from "recoil";

import { Story, Meta } from "@storybook/react/types-6-0";
import { MemoryRouter } from "react-router-dom";

import LoginContainter from "components/article/loginContainter";

export default {
  title: "아티클/loginContainer",
  component: LoginContainter,
} as Meta;

const Template: Story = (args) => (
  <RecoilRoot>
    <MemoryRouter>
      <LoginContainter {...args} />
    </MemoryRouter>
  </RecoilRoot>
);
export const loginComponent = Template.bind({});
loginComponent.args = {};
