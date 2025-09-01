import { fn } from 'storybook/test';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { ThemeDecorator } from '../../config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../lib/context/ThemeContext';
import { Input } from './Input';

const ExampleIcon = () => (
  <svg width='20' height='20'>
    <circle cx='10' cy='10' r='8' fill='currentColor' />
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
  decorators: [ThemeDecorator(Theme.LIGHT)],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Valued: Story = {
  args: {
    value: 'Valued',
    placeholder: 'Valued input',
  },
};

export const ValuedDark: Story = {
  ...Valued,
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Underlined: Story = {
  args: {
    isUnderlined: true,
    placeholder: 'Underlined input',
  },
};

export const UnderlinedDark: Story = {
  ...Underlined,
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Labeled: Story = {
  args: {
    label: 'Label',
    placeholder: 'Labeled input',
  },
};

export const LabeledDark: Story = {
  ...Labeled,
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const WithIcon: Story = {
  args: {
    Icon: <ExampleIcon />,
    placeholder: 'Input with icon',
  },
};

export const WithIconDark: Story = {
  ...WithIcon,
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Full: Story = {
  args: {
    placeholder: 'Type your text',
    label: 'Full',
    isUnderlined: true,
    Icon: <ExampleIcon />,
  },
};

export const FullDark: Story = {
  ...Full,
  decorators: [ThemeDecorator(Theme.DARK)],
};
