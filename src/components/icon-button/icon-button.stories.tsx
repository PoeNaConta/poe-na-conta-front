import type { Meta, StoryObj } from '@storybook/react';

import IconButton from '.';
import { IconButtonProps } from './types';

import { HomeIcon } from 'lucide-react';

const meta = {
  title: 'Components/IconButton',
  component: IconButton,
  args: { icon: <HomeIcon size={20} />, children: 'Home' },
  tags: ['autodocs'],
} satisfies Meta<IconButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Active: Story = { args: { active: true } };

export const Link: Story = { args: { active: true, link: true } };

export const Primary: Story = { args: { primary: true } };
