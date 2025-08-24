import type { Meta, StoryObj } from '@storybook/vue3';

import XTextarea from '../components/XTextarea.vue';

const meta: Meta<typeof XTextarea> = {
  title: 'Textarea',
  component: XTextarea,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Textarea Label',
    placeholder: 'Enter text here',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Textarea with Value',
    modelValue: 'This is a sample text in the textarea. It can contain multiple lines of content.',
  },
};

export const Required: Story = {
  args: {
    label: 'Required Textarea',
    required: true,
    placeholder: 'This field is required',
  },
};

export const WithErrors: Story = {
  args: {
    label: 'Textarea with Errors',
    modelValue: 'Invalid value',
    errors: ['This field has an error'],
  },
};

export const WithMultipleErrors: Story = {
  args: {
    label: 'Textarea with Multiple Errors',
    modelValue: 'Invalid value',
    errors: ['This field has an error', 'Another error message'],
  },
};

export const WithStringError: Story = {
  args: {
    label: 'Textarea with String Error',
    modelValue: 'Invalid value',
    errors: 'This is a single error message as a string',
  },
};

export const WithPlaceholder: Story = {
  args: {
    label: 'Textarea with Placeholder',
    placeholder: 'Type your message here...',
  },
};