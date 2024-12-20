// import { fn } from '@storybook/test';
import type { Meta, StoryObj } from '@storybook/vue3';

import XButton from '../components/XButton.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  title: 'Button',
  component: XButton,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'medium', 'large'] },
    color: { control: 'select', options: ['primary', 'secondary', 'info', 'warning', 'error'] },
    // backgroundColor: { control: 'color' },
    label: { control: 'text' },
  },
  args: {
    color: 'default',
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    // onClick: fn(),
  },
} satisfies Meta<typeof XButton>;

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

export const Secondary: Story = {
  args: {
    color: 'secondary',
    label: 'Click Me',
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
