import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '@components/button';
import ButtonLayout from '@components/button-layout';
import Card from '.';
import { CardProps } from './types';
import Input from '@components/input';
import Text from '@components/text';

const meta = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<CardProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultCard: Story = {};

export const ExampleForm: Story = {
  args: {
    form: true,
    onSubmit: action('onSubmit'),
    onReset: action('onReset'),
  },
  render: (args) => {
    const primaryButton = (
      <Button primary type="submit">
        Primary Button
      </Button>
    );

    const secondaryButton = (
      <Button secondary type="reset">
        Secondary Button
      </Button>
    );

    const buttonLayout = (
      <ButtonLayout
        primaryButton={primaryButton}
        secondaryButton={secondaryButton}
      />
    );

    return (
      <Card {...args}>
        <Text size="lg" as="h2" weight="bold" center primary>
          Example Form
        </Text>
        <Input
          label="First input"
          type="text"
          placeholder="Type here"
          onChange={action('onChange')}
        />
        <Input
          label="Second input"
          type="text"
          placeholder="Type here"
          onChange={action('onChange')}
        />
        {buttonLayout}
      </Card>
    );
  },
};
