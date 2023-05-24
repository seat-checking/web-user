import { TypingCount } from 'components/form/atoms/TypingCount/TypingCount';
import type { StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Form/Atoms/TypingCount',
  component: TypingCount,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {
    current: 0,
    maximum: 50,
  },
};

export const Required: Story = {
  args: {
    ...Default.args,
    typingrequired: true,
  },
};
