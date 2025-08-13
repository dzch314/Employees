import { fn } from 'storybook/test';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Input } from './Input';

const ExampleIcon = () => (
  <svg width="20" height="20">
    <circle cx="10" cy="10" r="8" fill="currentColor" />
  </svg>
);

const meta = {
  title: 'shared/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    style: { backgroundColor: { control: 'color' } },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Valued: Story = {
  args: {
    value: 'Valued',
    placeholder: 'Valued input',
  },
};

export const Underlined: Story = {
  args: {
    isUnderlined: true,
    placeholder: 'Underlined input',
  },
};

export const Labeled: Story = {
  args: {
    label: 'Label',
    placeholder: 'Labeled input',
  },
};

export const WithIcon: Story = {
  args: {
    Icon: <ExampleIcon />,
    placeholder: 'Input with icon',
  },
};

export const Full: Story = {
  args: {
    placeholder: 'Type your text',
    label: 'Full',
    isUnderlined: true,
    Icon: <ExampleIcon />,
  },
};
