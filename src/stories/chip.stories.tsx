import React from 'react';

import { Story, Meta } from '@storybook/react/types-6-0';
import { TagChip, TagChipProps } from 'components/chip/tagChip';

export default {
  title: '컴포넌트/chip',
  component: TagChip,
} as Meta;

const Template: Story<TagChipProps> = (args) => <TagChip {...args} />;

export const chip = Template.bind({});
chip.args = { label: '태그' };
