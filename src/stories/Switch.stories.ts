import type { Meta, StoryObj } from '@storybook/vue3';

import XSwitch from '../components/XSwitch.vue';

const meta: Meta<typeof XSwitch> = {
  title: 'Switch',
  component: XSwitch,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Switch Label',
  },
};

export const WithHelpText: Story = {
  args: {
    label: 'Switch Label',
    helpText: 'This is some help text for the switch.',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked Switch',
    modelValue: true,
  },
};

export const Unchecked: Story = {
  args: {
    label: 'Unchecked Switch',
    modelValue: false,
  },
};

export const LabelOnLeft: Story = {
  args: {
    label: 'Label on Left',
    labelPosition: 'left',
  },
};

export const LabelOnRight: Story = {
  args: {
    label: 'Label on Right',
    labelPosition: 'right',
  },
};

export const WithHelpTextAndLabelOnLeft: Story = {
  args: {
    label: 'Label on Left with Help Text',
    helpText: 'This is some help text for the switch.',
    labelPosition: 'left',
  },
};