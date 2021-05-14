import React from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import { MainPage } from "../page";

export default {
  title: "페이지/메인",
  component: MainPage,
} as Meta;

const Template: Story = (args) => <MainPage {...args} />;

export const mainPage = Template.bind({});
mainPage.args = {};
