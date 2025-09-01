import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { ThemeDecorator } from '../../config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../lib/context/ThemeContext';
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
  decorators: [ThemeDecorator(Theme.LIGHT)],
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Titled: Story = {
  args: {
    title: 'Title',
  },
};

export const TitledDark: Story = {
  ...Titled,
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Texted: Story = {
  args: {
    text: 'Text',
  },
};

export const TextedDark: Story = {
  ...Texted,
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Full: Story = {
  args: {
    title: 'Title',
    text: 'Text',
  },
};

export const FullDark: Story = {
  ...Full,
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const FullError: Story = {
  args: {
    theme: TextTheme.ERROR,
    title: 'Title',
    text: 'Text',
  },
};

export const FullErrorDark: Story = {
  ...FullError,
  decorators: [ThemeDecorator(Theme.DARK)],
};
