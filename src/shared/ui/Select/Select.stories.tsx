import type { Meta, StoryObj } from '@storybook/react-webpack5';

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

export const Small: Story = {
  args: {
    placeholder: 'Small select',
    size: SelectSize.S,
    options,
  },
};

export const Valued: Story = {
  args: {
    placeholder: 'Valued select',
    options,
    value: '1',
  },
};

export const Underlined: Story = {
  args: {
    isUnderlined: true,
    placeholder: 'Underlined select',
    options,
  },
};

export const Labeled: Story = {
  args: {
    label: 'Label',
    placeholder: 'Labeled select',
    options,
  },
};

export const Clearable: Story = {
  args: {
    placeholder: 'Clearable select',
    options,
    value: '2',
    isClearable: true,
  },
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
