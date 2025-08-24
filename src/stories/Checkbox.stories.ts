import type { Meta, StoryObj } from '@storybook/vue3';

import XCheckbox from '../components/XCheckbox.vue';

const meta: Meta<typeof XCheckbox> = {
  title: 'Checkbox',
  component: XCheckbox,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Checkbox Label',
  },
};

export const WithHelpText: Story = {
  args: {
    label: 'Checkbox Label',
    helpText: 'This is some help text for the checkbox.',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked Checkbox',
    modelValue: true,
  },
};

export const Unchecked: Story = {
  args: {
    label: 'Unchecked Checkbox',
    modelValue: false,
  },
};

export const WithSlot: Story = {
  args: {
    default: 'Custom label content with <strong>HTML</strong>',
  },
};