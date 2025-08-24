import type { Meta, StoryObj } from '@storybook/vue3';

import XAlert from '../components/XAlert.vue';

const meta: Meta<typeof XAlert> = {
  title: 'Alert',
  component: XAlert,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: 'primary',
    message: 'This is an primary alert message.',
  },
};

export const Secondary: Story = {
  args: {
    type: 'secondary',
    message: 'This is an secondary alert message.',
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    message: 'This is a success alert message.',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    message: 'This is a warning alert message.',
  },
};

export const Danger: Story = {
  args: {
    type: 'danger',
    message: 'This is an error alert message.',
  },
};
