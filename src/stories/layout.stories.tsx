import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import { RecoilRoot } from 'recoil';
import { MemoryRouter } from 'react-router-dom';

import App from 'app/app';

export default {
  title: 'App',
  component: App,
} as Meta;

const Template: Story = (args) => (
  <RecoilRoot>
    <MemoryRouter>
      <App {...args} />
    </MemoryRouter>
  </RecoilRoot>
);

export const app = Template.bind({});
app.args = {
  label: 'input 라벨',
};
