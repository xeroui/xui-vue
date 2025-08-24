import type { Meta, StoryObj } from '@storybook/vue3';

import XInput from '../components/XInput.vue';

const meta: Meta<typeof XInput> = {
  title: 'Input',
  component: XInput,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Input Label',
    placeholder: 'Enter text here',
  },
};

export const WithValue: Story = {
  args: {
    label: 'Input with Value',
    modelValue: 'This is a value',
  },
};

export const Required: Story = {
  args: {
    label: 'Required Input',
    required: true,
    placeholder: 'This field is required',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    disabled: true,
    modelValue: 'This input is disabled',
  },
};

export const WithErrors: Story = {
  args: {
    label: 'Input with Errors',
    modelValue: 'Invalid value',
    errors: ['This field has an error'],
  },
};

export const Password: Story = {
  args: {
    label: 'Password Input',
    type: 'password',
    placeholder: 'Enter your password',
  },
};

export const Email: Story = {
  args: {
    label: 'Email Input',
    type: 'email',
    placeholder: 'Enter your email',
  },
};

export const Number: Story = {
  args: {
    label: 'Number Input',
    type: 'number',
    placeholder: 'Enter a number',
  },
};

export const Small: Story = {
  args: {
    label: 'Small Input',
    size: 'small',
    placeholder: 'Small input',
  },
};

export const Large: Story = {
  args: {
    label: 'Large Input',
    size: 'large',
    placeholder: 'Large input',
  },
};