import type { FC } from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { VerticalDivider } from './VerticalDivider';

const HeightDecorator = (Story: FC) => <div style={{ height: '20px' }}><Story /></div>;

const meta = {
  decorators: [HeightDecorator],
  title: 'shared/VerticalDivider',
  component: VerticalDivider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof VerticalDivider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
