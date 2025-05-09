import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Input from './index';
import { InputProps } from './types';

const meta = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    onChange: action('onChange'),
  },
} satisfies Meta<InputProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithLabel: Story = {
  args: {
    label: 'Descriptive Label',
  },
};

export const WithoutLabel: Story = {};

export const WithPlaceholder: Story = {
  args: {
    label: 'Descriptive Label',
    placeholder: 'Placeholder Text',
  },
};
