import type { FC } from 'react';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { ThemeDecorator } from '../../config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../lib/context/ThemeContext';
import { VerticalDivider } from './VerticalDivider';

const HeightDecorator = (Story: FC) => (
  <div style={{ height: '20px', width: '20px' }}>
    <Story />
  </div>
);

const meta = {
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
  decorators: [HeightDecorator, ThemeDecorator(Theme.LIGHT)],
};

export const PrimaryDark: Story = {
  ...Primary,
  decorators: [HeightDecorator, ThemeDecorator(Theme.DARK)],
};
