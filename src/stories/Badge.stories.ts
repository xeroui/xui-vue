import type { Meta, StoryObj } from '@storybook/vue3';

import XBadge from '../components/XBadge.vue';

const meta: Meta<typeof XBadge> = {
  title: 'Badge',
  component: XBadge,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    color: 'primary',
    label: 'Badge',
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    label: 'Badge',
  },
};

export const Info: Story = {
  args: {
    color: 'info',
    label: 'Badge',
  },
};

export const Warning: Story = {
  args: {
    color: 'warning',
    label: 'Badge',
  },
};

export const Danger: Story = {
  args: {
    color: 'danger',
    label: 'Badge',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    label: 'Medium',
  },
};

export const Normal: Story = {
  args: {
    size: 'normal',
    label: 'Normal',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Large',
  },
};