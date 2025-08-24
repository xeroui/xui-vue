import type { Meta, StoryObj } from '@storybook/vue3';

import XModal from '../components/XModal.vue';

const meta: Meta<typeof XModal> = {
  title: 'Modal',
  component: XModal,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    title: 'Modal Title',
    default: 'This is the modal content.',
  },
};

export const WithoutTitle: Story = {
  args: {
    open: true,
    default: 'This is a modal without a title.',
  },
};

export const WithCustomHeader: Story = {
  args: {
    open: true,
    default: 'This is the modal content.',
    header: '<div class="bg-blue-100 p-4"><h3 class="text-lg font-bold">Custom Header</h3></div>',
  },
};

export const WithCustomFooter: Story = {
  args: {
    open: true,
    title: 'Custom Footer',
    default: 'This modal has a custom footer.',
    footer: '<div class="bg-gray-100 p-4 flex justify-end"><button class="px-4 py-2 bg-green-500 text-white rounded">Custom Button</button></div>',
  },
};

export const Loading: Story = {
  args: {
    open: true,
    title: 'Loading Modal',
    default: 'This modal is in loading state.',
    loading: true,
  },
};

export const Closed: Story = {
  args: {
    open: false,
    title: 'Closed Modal',
    default: 'This modal is closed and should not be visible.',
  },
};