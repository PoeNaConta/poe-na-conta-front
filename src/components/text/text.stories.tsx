import type { Meta, StoryObj } from '@storybook/react';

import Text from './index';
import { TextProps } from './types';

const meta = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    text: 'text',
  },

  render: ({ text, ...args }) => {
    return <Text {...args}>{text}</Text>;
  },
} satisfies Meta<TextProps & { text: string }>;

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

export const Tertiary: Story = {
  args: {
    tertiary: true,
  },
};

export const OnBrand: Story = {
  args: {
    onBrand: true,
  },
  render: ({ text, ...args }) => {
    return (
      <div
        style={{
          backgroundColor: 'var(--lds-color-brand)',
          display: 'flex',
          justifyContent: 'center',
          width: 100,
          height: 50,
        }}
      >
        <Text {...args}>{text}</Text>
      </div>
    );
  },
};

export const TextSizes: Story = {
  render: ({ text, ...args }) => {
    return (
      <>
        <Text {...args} size="xs">
          {text} xs 12px/0.75rem
        </Text>
        <Text {...args} size="sm">
          {text} sm 14px/0.875rem
        </Text>
        <Text {...args} size="md">
          {text} md 16px/1rem
        </Text>
        <Text {...args} size="lg">
          {text} lg 24px/1.5rem
        </Text>
        <Text {...args} size="xl">
          {text} xl 32px/2rem
        </Text>
        <Text {...args} size="hero">
          {text} hero
        </Text>
      </>
    );
  },
};

export const TextWeight: Story = {
  render: ({ text, ...args }) => {
    return (
      <>
        <Text {...args} weight="light">
          {text} light 300
        </Text>
        <Text {...args} weight="regular">
          {text} regular 400
        </Text>
        <Text {...args} weight="medium">
          {text} medium 500
        </Text>
        <Text {...args} weight="semibold">
          {text} semibold 600
        </Text>
        <Text {...args} weight="bold">
          {text} bold 700
        </Text>
      </>
    );
  },
};
