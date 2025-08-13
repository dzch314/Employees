import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Skeleton } from './Skeleton';

const meta = {
  title: 'shared/Skeleton',
  component: Skeleton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { width: '200px', height: '10px' },
};

export const Rounded: Story = {
  args: { width: '200px', height: '200px', borderRadius: '50%' },
};
