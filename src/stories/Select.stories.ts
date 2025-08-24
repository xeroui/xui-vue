import type { Meta, StoryObj } from '@storybook/vue3';

import XSelect from '../components/XSelect.vue';

const meta: Meta<typeof XSelect> = {
  title: 'Select',
  component: XSelect,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const simpleOptions = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
  { label: 'Option 4', value: '4' },
  { label: 'Option 5', value: '5' },
];

export const Default: Story = {
  args: {
    label: 'Select an option',
    options: simpleOptions,
  },
};

export const WithSelectedValue: Story = {
  args: {
    label: 'Select an option',
    options: simpleOptions,
    modelValue: '2',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled select',
    options: simpleOptions,
    modelValue: '1',
    disabled: true,
  },
};

export const CustomPlaceholder: Story = {
  args: {
    label: 'Custom placeholder',
    options: simpleOptions,
    placeholder: 'Choose an option...',
  },
};

export const WithCustomOptionProperties: Story = {
  args: {
    label: 'Custom option properties',
    options: [
      { name: 'First Option', id: '1' },
      { name: 'Second Option', id: '2' },
      { name: 'Third Option', id: '3' },
    ],
    optionLabel: 'name',
    optionValue: 'id',
  },
};

export const ManyOptions: Story = {
  args: {
    label: 'Many options',
    options: Array.from({ length: 20 }, (_, i) => ({
      label: `Option ${i + 1}`,
      value: `${i + 1}`,
    })),
  },
};