import { fn } from 'storybook/test';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { ThemeDecorator } from '../../config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../lib/context/ThemeContext';
import { ImageUpload } from './ImageUpload';

const meta = {
  title: 'shared/ImageUpload',
  component: ImageUpload,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    style: { backgroundColor: { control: 'color' } },
  },
  args: { onClick: fn() },
  decorators: [ThemeDecorator(Theme.LIGHT)],
} satisfies Meta<typeof ImageUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Underlined: Story = {
  args: {
    isUnderlined: true,
  },
};

export const UnderlinedDark: Story = {
  ...Underlined,
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Labeled: Story = {
  args: {
    label: 'Label',
  },
};

export const LabeledDark: Story = {
  ...Labeled,
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Clearable: Story = {
  args: {
    isClearable: true,
  },
};

export const ClearableDark: Story = {
  ...Clearable,
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Full: Story = {
  args: {
    placeholder: 'Choose your image',
    isClearable: true,
    label: 'Full',
    isUnderlined: true,
  },
};

export const FullDark: Story = {
  ...Full,
  decorators: [ThemeDecorator(Theme.DARK)],
};
