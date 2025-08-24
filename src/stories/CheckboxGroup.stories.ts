import type { Meta, StoryObj } from '@storybook/vue3';

import XCheckboxGroup from '../components/XCheckboxGroup.vue';

const meta: Meta<typeof XCheckboxGroup> = {
  title: 'CheckboxGroup',
  component: XCheckboxGroup,
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
  },
};

export const WithHelpText: Story = {
  args: {
    options: [
      { label: 'Option 1', value: '1', helpText: 'Help text for option 1' },
      { label: 'Option 2', value: '2', helpText: 'Help text for option 2' },
      { label: 'Option 3', value: '3', helpText: 'Help text for option 3' },
    ],
  },
};

export const WithPreselectedValues: Story = {
  args: {
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
    ],
    modelValue: ['1', '3'],
  },
};

export const WithNumericValues: Story = {
  args: {
    options: [
      { label: 'Option 1', value: 1 },
      { label: 'Option 2', value: 2 },
      { label: 'Option 3', value: 3 },
    ],
  },
};