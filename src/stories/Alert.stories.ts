import type { Meta, StoryObj } from '@storybook/vue3';

import XAlert from '../components/XAlert.vue';

const meta: Meta<typeof XAlert> = {
  title: 'Alert',
  component: XAlert,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    type: 'success',
    default: 'This is a success alert message.',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    default: 'This is an error alert message.',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    default: 'This is a warning alert message.',
  },
};

export const Info: Story = {
  args: {
    type: 'info',
    default: 'This is an info alert message.',
  },
};