import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { ThemeDecorator } from '../../config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../lib/context/ThemeContext';
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
  decorators: [ThemeDecorator(Theme.LIGHT)],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { width: '200px', height: '10px' },
};

export const PrimaryDark = {
  ...Primary,
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Rounded: Story = {
  args: { width: '200px', height: '200px', borderRadius: '50%' },
};

export const RoundedDark = {
  ...Rounded,
  decorators: [ThemeDecorator(Theme.DARK)],
};
