import React from "react";

import { Story, Meta } from "@storybook/react/types-6-0";

import { JobCard, JobCardProps } from "components/card/jobCard";

export default {
  title: "컴포넌트/card",
  component: JobCard,
} as Meta;

const Template: Story<JobCardProps> = (args) => <JobCard {...args} />;

export const card = Template.bind({});
card.args = {
  name: "테스트",
  img: "",
  sector: "태그",
};
