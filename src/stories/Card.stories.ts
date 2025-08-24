import type { Meta, StoryObj } from '@storybook/vue3';

import XCard from '../components/XCard.vue';

const meta: Meta<typeof XCard> = {
  title: 'Card',
  component: XCard,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Card Title',
    subtitle: 'Card Subtitle',
    default: 'This is the card content.',
  },
};

export const WithoutTitle: Story = {
  args: {
    default: 'This is a card without a title.',
  },
};

export const WithFooter: Story = {
  args: {
    title: 'Card with Footer',
    subtitle: 'This card has a footer',
    default: 'This is the card content.',
    footer: 'This is the footer content.',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};