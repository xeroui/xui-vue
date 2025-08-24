import type { Meta, StoryObj } from '@storybook/vue3';

import XRadioGroup from '../components/XRadioGroup.vue';

const meta: Meta<typeof XRadioGroup> = {
  title: 'RadioGroup',
  component: XRadioGroup,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ],
    modelValue: '1',
  },
};

export const WithNumericValues: Story = {
  args: {
    options: [
      { label: 'Option 1', value: 1 },
      { label: 'Option 2', value: 2 },
      { label: 'Option 3', value: 3 },
    ],
    modelValue: 1,
  },
};

export const WithDisabledOption: Story = {
  args: {
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2', disabled: true },
      { label: 'Option 3', value: '3' },
    ],
    modelValue: '1',
  },
};

export const WithCheckIcon: Story = {
  args: {
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ],
    modelValue: '1',
    showCheck: true,
  },
};

export const ManyOptions: Story = {
  args: {
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
      { label: 'Option 4', value: '4' },
      { label: 'Option 5', value: '5' },
      { label: 'Option 6', value: '6' },
    ],
    modelValue: '1',
  },
};