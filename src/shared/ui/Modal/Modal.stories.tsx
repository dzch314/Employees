import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { ThemeDecorator } from '../../config/storybook/decorators/ThemeDecorator/ThemeDecorator';
import { Theme } from '../../lib/context/ThemeContext';
import { Modal } from './Modal';

const meta = {
  title: 'shared/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
  decorators: [ThemeDecorator(Theme.LIGHT)],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus, enim nec vulputate dignissim, lacus dui bibendum turpis, nec commodo dui lectus nec lorem. Cras euismod id lacus sit amet ullamcorper. Integer imperdiet ac velit ac dictum. Suspendisse dolor augue, malesuada nec semper sed, luctus nec massa. Sed ac iaculis ante, ac maximus est. Etiam posuere odio at orci ultricies aliquam. Duis ornare fermentum massa, vitae fringilla urna imperdiet id. Pellentesque ornare sapien nec sapien interdum, nec varius libero dignissim. Sed sit amet erat non neque eleifend congue. Quisque fringilla, elit sed maximus pellentesque, elit felis ullamcorper libero, eu dictum felis orci quis turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras eu interdum eros. Duis vel eros venenatis, vulputate sem et, gravida risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Duis at lorem fermentum arcu consectetur dignissim.',
  },
};

export const PrimaryDark: Story = {
  ...Primary,
  decorators: [ThemeDecorator(Theme.DARK)],
};
