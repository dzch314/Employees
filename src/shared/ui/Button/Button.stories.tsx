import { fn } from 'storybook/test';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    theme: ButtonTheme.PRIMARY,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    theme: ButtonTheme.SECONDARY,
  },
};

export const Common: Story = {
  args: {
    children: 'Common',
    theme: ButtonTheme.COMMON,
  },
};

export const SizeM: Story = {
  args: {
    children: 'Size M',
    size: ButtonSize.M,
  },
};

export const SizeL: Story = {
  args: {
    children: 'Size L',
    size: ButtonSize.L,
  },
};

export const IsDisabled: Story = {
  args: {
    children: 'Disabled',
    isDisabled: true,
  },
};
