import type { Meta, StoryObj } from '@storybook/vue3';

import XSpinner from '../components/XSpinner.vue';

const meta: Meta<typeof XSpinner> = {
  title: 'Spinner',
  component: XSpinner,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};