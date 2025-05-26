import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Modal from '.';
import { ModalProps } from './types';
import { useState } from 'react';
import Button from '@components/button';
import Text from '@components/text';
import Card from '@components/card';
import Input from '@components/input';
import ButtonLayout from '@components/button-layout';

function ModalExample(props: Partial<ModalProps>) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button primary onClick={() => setIsOpen(true)}>
        Open Modal
      </Button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} {...props} />
    </>
  );
}

const meta = {
  title: 'Components/Modal',
  component: ModalExample,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: <Text onBrand>This is a Modal</Text>,
  },
} satisfies Meta<ModalProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultModal: Story = {};

export const FormOnModal: Story = {
  args: {
    children: (
      <Card form>
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
        <ButtonLayout
          primaryButton={
            <Button primary type="submit">
              Primary Button
            </Button>
          }
          secondaryButton={
            <Button secondary type="reset">
              Secondary Button
            </Button>
          }
        />
      </Card>
    ),
  },
};
