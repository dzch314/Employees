import { fn } from 'storybook/test';
import type { Meta, StoryObj } from '@storybook/react-webpack5';

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
} satisfies Meta<typeof ImageUpload>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Underlined: Story = {
  args: {
    isUnderlined: true,
  },
};

export const Labeled: Story = {
  args: {
    label: 'Label',
  },
};

export const Clearable: Story = {
  args: {
    isClearable: true,
  },
};

export const Full: Story = {
  args: {
    placeholder: 'Choose your image',
    isClearable: true,
    label: 'Full',
    isUnderlined: true,
  },
};
