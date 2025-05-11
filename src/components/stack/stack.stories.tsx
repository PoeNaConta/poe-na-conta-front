import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Stack from '.';
import { StackProps } from './types';
import Button from '@components/button';
import Text from '@components/text';
import Input from '@components/input';
import React, { FormEvent } from 'react';
import ButtonLayout from '@components/button-layout';

const primaryButton = (
  <Button primary onClick={action('onClick')}>
    Button
  </Button>
);

const children = (
  <>
    {primaryButton}
    {primaryButton}
    {primaryButton}
  </>
);

const meta = {
  title: 'Components/Stack',
  component: Stack,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {
    children,
  },
} satisfies Meta<StackProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Direction: Story = {
  args: { space: 'none' },
  render: (args) => {
    const Wrapper = ({ children }: { children: React.ReactNode }) => (
      <div
        style={{
          width: '150px',
          backgroundColor: 'var(--lds-color-gray-light)',
        }}
      >
        {children}
      </div>
    );
    return (
      <Stack direction="column" space="sm" wrap>
        <Wrapper>
          <Text>row</Text>
          <Stack {...args} direction="row">
            <Text>1</Text>
            <Text>2</Text>
            <Text>3</Text>
          </Stack>
        </Wrapper>

        <Wrapper>
          <Text>row-reverse</Text>
          <Stack {...args} direction="row-reverse">
            <Text>1</Text>
            <Text>2</Text>
            <Text>3</Text>
          </Stack>
        </Wrapper>

        <Wrapper>
          <Text>column</Text>
          <Stack {...args} direction="column">
            <Text>1</Text>
            <Text>2</Text>
            <Text>3</Text>
          </Stack>
        </Wrapper>

        <Wrapper>
          <Text>column-reverse</Text>
          <Stack {...args} direction="column-reverse">
            <Text>1</Text>
            <Text>2</Text>
            <Text>3</Text>
          </Stack>
        </Wrapper>
      </Stack>
    );
  },
};

export const Wrap: Story = {
  args: { space: 'xxl', direction: 'row' },
  render: (args) => {
    const Wrapper = ({ children }: { children: React.ReactNode }) => (
      <div
        style={{
          width: '50px',
          backgroundColor: 'var(--lds-color-gray-light)',
        }}
      >
        {children}
      </div>
    );
    return (
      <Stack direction="column" space="sm" wrap>
        <Wrapper>
          <Text>nowrap</Text>
          <Stack {...args} wrap="nowrap">
            <Text>1</Text>
            <Text>2</Text>
            <Text>3</Text>
          </Stack>
        </Wrapper>

        <Wrapper>
          <Text>wrap</Text>
          <Stack {...args} wrap="wrap">
            <Text>1</Text>
            <Text>2</Text>
            <Text>3</Text>
          </Stack>
        </Wrapper>

        <Wrapper>
          <Text>wrap-reverse</Text>
          <Stack {...args} wrap="wrap-reverse">
            <Text>1</Text>
            <Text>2</Text>
            <Text>3</Text>
          </Stack>
        </Wrapper>
      </Stack>
    );
  },
};

export const Align: Story = {
  args: { space: 'sm' },
  render: (args) => {
    const Wrapper = ({ children }: { children: React.ReactNode }) => (
      <div
        style={{
          width: '150px',
          backgroundColor: 'var(--lds-color-gray-light)',
        }}
      >
        {children}
      </div>
    );

    return (
      <Stack justify="center" space="sm" direction="row" wrap>
        <Wrapper>
          <Stack {...args} align="start">
            <Text>start</Text>
            {children}
          </Stack>
        </Wrapper>

        <Wrapper>
          <Stack {...args} align="center">
            <Text>center</Text>
            {children}
          </Stack>
        </Wrapper>

        <Wrapper>
          <Stack {...args} align="end">
            <Text>end</Text>
            {children}
          </Stack>
        </Wrapper>
        <Wrapper>
          <Stack {...args} align="baseline">
            <Text>baseline</Text>
            {children}
          </Stack>
        </Wrapper>

        <Wrapper>
          <Stack {...args} align="stretch">
            <Text>stretch</Text>
            {children}
          </Stack>
        </Wrapper>
      </Stack>
    );
  },
};

export const Justify: Story = {
  args: { space: 'sm' },
  render: (args) => {
    const Wrapper = ({ children }: { children: React.ReactNode }) => (
      <div
        style={{
          height: '300px',
          backgroundColor: 'var(--lds-color-gray-light)',
          display: 'flex',
          alignItems: 'stretch',
        }}
      >
        {children}
      </div>
    );

    return (
      <Stack justify="center" space="sm" direction="row" wrap>
        <Wrapper>
          <Stack {...args} justify="start">
            <Text>start</Text>
            {children}
          </Stack>
        </Wrapper>

        <Wrapper>
          <Stack {...args} justify="center">
            <Text>center</Text>
            {children}
          </Stack>
        </Wrapper>

        <Wrapper>
          <Stack {...args} justify="end">
            <Text>end</Text>
            {children}
          </Stack>
        </Wrapper>

        <Wrapper>
          <Stack {...args} justify="between">
            <Text>between</Text>
            {children}
          </Stack>
        </Wrapper>

        <Wrapper>
          <Stack {...args} justify="around">
            <Text>around</Text>
            {children}
          </Stack>
        </Wrapper>

        <Wrapper>
          <Stack {...args} justify="evenly">
            <Text>evenly</Text>
            {children}
          </Stack>
        </Wrapper>
      </Stack>
    );
  },
};

export const AsElement: Story = {
  args: {
    justify: 'between',
  },
  render: (args) => (
    <Stack direction="row" space="xxl" wrap>
      <Stack {...args}>
        <Text>Default (div)</Text>
        {children}
      </Stack>

      <Stack {...args} as="main">
        <Text>Main</Text>
        {children}
      </Stack>

      <Stack
        {...args}
        align="stretch"
        as={({ className, children }) => (
          <form
            className={className}
            onSubmit={(e: FormEvent) => {
              e.preventDefault();
              action('onSubmit')(e);
            }}
          >
            {children}
          </form>
        )}
      >
        <Text>Form</Text>
        <Input placeholder="Input" />
        <Input placeholder="Input" />
        <ButtonLayout
          primaryButton={
            <Button primary type="submit">
              Submit Button
            </Button>
          }
          secondaryButton={
            <Button secondary type="reset">
              Reset Button
            </Button>
          }
        />
      </Stack>
    </Stack>
  ),
};

export const Spacing: Story = {
  render: (args) => (
    <Stack direction="row" space="sm" wrap>
      <Stack {...args} space="none">
        <Text>none 0px</Text>
        {children}
      </Stack>

      <Stack {...args} space="xxs">
        <Text>xxs 2px</Text>
        {children}
      </Stack>

      <Stack {...args} space="xs">
        <Text>xs 4px</Text>
        {children}
      </Stack>

      <Stack {...args} space="sm">
        <Text>sm 8px</Text>
        {children}
      </Stack>

      <Stack {...args} space="md">
        <Text>md 12px</Text>
        {children}
      </Stack>

      <Stack {...args} space="lg">
        <Text>lg 16px</Text>
        {children}
      </Stack>

      <Stack {...args} space="xl">
        <Text>xl 24px</Text>
        {children}
      </Stack>

      <Stack {...args} space="xxl">
        <Text>xxl 32px</Text>
        {children}
      </Stack>
    </Stack>
  ),
};
