import { InputLabel } from 'components/form/atoms/InputLabel/InputLabel';
import type { StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Form/Atoms/InputLabel',
  component: InputLabel,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    children: '라벨',
  },
};

export const Required: Story = {
  args: {
    ...Default.args,
    labelRequired: true,
  },
};
