import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Footer } from 'components/footer/footer';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: '아티클/footer',
  component: Footer,
} as Meta;

const Template: Story = (args) => (
  <MemoryRouter>
    <Footer {...args} />
  </MemoryRouter>
);

export const foot = Template.bind({});
foot.args = {};
