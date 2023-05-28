import Input from 'components/form/atoms/Input/Input';
import type { StoryObj } from '@storybook/react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Form/Atoms/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const Default: Story = {
  args: {
    placeholder: '입력해주세요',
  },
};

export const Required: Story = {
  args: {
    ...Default.args,
    isError: true,
    isSuccess: true,
  },
};
