import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { ThemeDecorator } from '../../config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../lib/context/ThemeContext';
import { Select, SelectSize } from './Select';

const meta = {
  title: 'shared/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT)],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const options = [
  {
    value: '1',
    content: 'option 1',
  },
  {
    value: '2',
    content: 'option 2',
  },
  {
    value: '3',
    content: 'option 3',
  },
];

export const Primary: Story = {
  args: {
    placeholder: 'Primary select',
    options,
  },
};

export const PrimaryDark: Story = {
  ...Primary,
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Small: Story = {
  args: {
    placeholder: 'Small select',
    size: SelectSize.S,
    options,
  },
};

export const SmallDark: Story = {
  ...Small,
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Valued: Story = {
  args: {
    placeholder: 'Valued select',
    options,
    value: '1',
  },
};

export const ValuedDark: Story = {
  ...Valued,
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Underlined: Story = {
  args: {
    isUnderlined: true,
    placeholder: 'Underlined select',
    options,
  },
};

export const UnderlinedDark: Story = {
  ...Underlined,
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Labeled: Story = {
  args: {
    label: 'Label',
    placeholder: 'Labeled select',
    options,
  },
};

export const LabeledDark: Story = {
  ...Labeled,
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Clearable: Story = {
  args: {
    placeholder: 'Clearable select',
    options,
    value: '2',
    isClearable: true,
  },
};

export const ClearableDark: Story = {
  ...Clearable,
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const Full: Story = {
  args: {
    value: '3',
    options,
    size: SelectSize.M,
    isClearable: true,
    isUnderlined: true,
    placeholder: 'Select value',
    label: 'Full',
  },
};

export const FullDark: Story = {
  ...Full,
  decorators: [ThemeDecorator(Theme.DARK)],
};
