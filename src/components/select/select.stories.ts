import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Select from './index';
import { SelectProps } from './types';

const meta = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    options: { control: 'object' },
    placeholder: { control: 'text' },
  },
  args: {
    label: 'Descriptive label',
    options: [
      { label: 'First option', value: 'option-1' },
      { label: 'Second option', value: 'option-2' },
    ],
    onOptionSelected: action('onOptionSelected'),
  },
} satisfies Meta<SelectProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithLabel: Story = {
  args: {},
};

export const WithoutLabel: Story = {
  args: {
    label: undefined,
  },
};

export const WithPlaceholder: Story = {
  args: {
    placeholder: 'Placeholder option',
  },
};
