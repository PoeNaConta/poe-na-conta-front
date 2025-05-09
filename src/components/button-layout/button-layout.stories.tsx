import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import ButtonLayout from '.';
import { ButtonLayoutProps } from './types';
import Button from '@components/button';
import Text from '@components/text';

const primaryButton = (
  <Button primary onClick={action('onClick primary button')}>
    Primary Button
  </Button>
);
const secondaryButton = (
  <Button secondary onClick={action('onClick secondary button')}>
    Secondary Button
  </Button>
);

const meta = {
  title: 'Components/ButtonLayout',
  component: ButtonLayout,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    primaryButton,
  },
} satisfies Meta<ButtonLayoutProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryButtonOnly: Story = {};

export const WithSecondaryButton: Story = {
  args: {
    secondaryButton,
  },
};

export const Row: Story = {
  storyName: 'Row (default)',
  args: {
    secondaryButton,
    row: true,
  },
};

export const Column: Story = {
  args: {
    secondaryButton,
    column: true,
  },
};

export const FullWidth: Story = {
  storyName: 'Full Width (default)',
  args: {
    secondaryButton,
    fullWidth: true,
    column: true,
  },
};

export const NoFullWidth: Story = {
  args: {
    secondaryButton,
    fullWidth: false,
    column: true,
  },
};

export const Spacing: Story = {
  args: {
    secondaryButton,
  },
  render: (args) => {
    return (
      <>
        <Text>xxs 2px</Text>
        <ButtonLayout {...args} space="xxs" />

        <Text>xs 4px</Text>
        <ButtonLayout {...args} space="xs" />

        <Text>sm 8px</Text>
        <ButtonLayout {...args} space="sm" />

        <Text>md 12px</Text>
        <ButtonLayout {...args} space="md" />

        <Text>lg 16px</Text>
        <ButtonLayout {...args} space="lg" />

        <Text>xl 24px</Text>
        <ButtonLayout {...args} space="xl" />

        <Text>xxl 32px</Text>
        <ButtonLayout {...args} space="xxl" />
      </>
    );
  },
};
