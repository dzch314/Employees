import { fn } from 'storybook/test';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { ThemeDecorator } from '../../config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../lib/context/ThemeContext';
import { Button, ButtonSize, ButtonTheme } from './Button';

const meta = {
  title: 'shared/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    style: { backgroundColor: { control: 'color' } },
  },
  args: { onClick: fn() },
  decorators: [ThemeDecorator(Theme.LIGHT)],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    theme: ButtonTheme.PRIMARY,
  },
};

export const PrimaryDark: Story = {
  ...Primary,
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    theme: ButtonTheme.SECONDARY,
  },
};

export const SecondaryDark: Story = {
  ...Secondary,
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Common: Story = {
  args: {
    children: 'Common',
    theme: ButtonTheme.COMMON,
  },
};

export const CommonDark: Story = {
  ...Common,
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SizeM: Story = {
  args: {
    children: 'Size M',
    size: ButtonSize.M,
  },
};

export const SizeMDark: Story = {
  ...SizeM,
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SizeL: Story = {
  args: {
    children: 'Size L',
    size: ButtonSize.L,
  },
};

export const SizeLDark: Story = {
  ...SizeL,
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const IsDisabled: Story = {
  args: {
    children: 'Disabled',
    isDisabled: true,
  },
};

export const IsDisabledDark: Story = {
  ...IsDisabled,
  decorators: [ThemeDecorator(Theme.DARK)],
};
