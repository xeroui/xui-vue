import type { Meta, StoryObj } from '@storybook/vue3';

import XBox from '../components/XBox.vue';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<typeof XBox> = {
  title: 'Box',
  component: XBox,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const TextBox: Story = {
  args: {
    default: 'Hello World',
  },
};

export const LoadingSkeleton: Story = {
  args: {
    loading: true,
  },
};
