import type { Meta, StoryObj } from '@storybook/vue3';

import XSearchableSelect from '../components/XSearchableSelect.vue';

const meta: Meta<typeof XSearchableSelect> = {
  title: 'SearchableSelect',
  component: XSearchableSelect,
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

const avatarOptions = [
  { label: 'User 1', value: '1', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
  { label: 'User 2', value: '2', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
  { label: 'User 3', value: '3', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
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

export const Multiple: Story = {
  args: {
    label: 'Select multiple options',
    options: simpleOptions,
    multiple: true,
    modelValue: ['1', '3'],
  },
};

export const WithAvatars: Story = {
  args: {
    label: 'Select a user',
    options: avatarOptions,
    optionAvatar: 'avatar',
  },
};

export const CustomPlaceholder: Story = {
  args: {
    label: 'Custom placeholder',
    options: simpleOptions,
    placeholder: 'Type to search...',
  },
};

export const ManyOptions: Story = {
  args: {
    label: 'Many options',
    options: Array.from({ length: 100 }, (_, i) => ({
      label: `Option ${i + 1}`,
      value: `${i + 1}`,
    })),
  },
};