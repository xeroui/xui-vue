// import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import XButton from '../components/XButton.vue';

const meta: Meta<typeof XButton> = {
  title: 'Button',
  component: XButton,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  args: {
    color: 'primary',
    label: 'Click Me',
  },
};

export const Success: Story = {
  args: {
    color: 'success',
    label: 'Click Me',
  },
};

export const Warning: Story = {
  args: {
    color: 'warning',
    label: 'Are you sure?',
  },
};

export const Danger: Story = {
  args: {
    color: 'danger',
    label: 'Yes, Delete',
  },
};

export const Large: Story = {
  args: {
    label: 'Click Me',
    size: 'large',
  },
};

export const Small: Story = {
  args: {
    label: 'Click Me',
    size: 'small',
  },
};
