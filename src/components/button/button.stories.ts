import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './index';
import { ButtonProps } from './types';

const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    primary: { if: { arg: 'secondary', truthy: false }, control: 'boolean' },
    secondary: { if: { arg: 'primary', truthy: false }, control: 'boolean' },
    link: { if: { arg: 'primary', truthy: false }, control: 'boolean' },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
    type: { control: 'select', options: ['button', 'submit', 'reset'] },
    fake: { control: 'boolean' },
    onClick: { if: { arg: 'fake', truthy: false } },
  },
  args: {
    children: 'Button',
    onClick: action('onClick'),
  },
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
  },
};

export const Secondary: Story = {
  args: {
    secondary: true,
  },
};

export const link: Story = {
  args: {
    link: true,
  },
};

export const Submit: Story = {
  args: {
    primary: true,
    type: 'submit',
    onClick: undefined,
  },
};

export const Reset: Story = {
  args: {
    secondary: true,
    type: 'reset',
    onClick: undefined,
  },
};

export const Disabled: Story = {
  args: {
    primary: true,
    disabled: true,
  },
};
