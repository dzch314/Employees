import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { ThemeDecorator } from '../../config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../lib/context/ThemeContext';
import { Loader } from './Loader';

const meta = {
  title: 'shared/Loader',
  component: Loader,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT)],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const PrimaryDark: Story = {
  ...Primary,
  decorators: [ThemeDecorator(Theme.DARK)],
};
