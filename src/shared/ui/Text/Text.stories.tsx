import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Text, TextTheme } from './Text';

const meta = {
  title: 'shared/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Titled: Story = {
  args: {
    title: 'Title',
  },
};

export const Texted: Story = {
  args: {
    text: 'Text',
  },
};

export const Full: Story = {
  args: {
    title: 'Title',
    text: 'Text',
  },
};

export const FullError: Story = {
  args: {
    theme: TextTheme.ERROR,
    title: 'Title',
    text: 'Text',
  },
};
