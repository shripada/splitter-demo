import Image from 'next/image';
import type { Meta, StoryObj } from '@storybook/react';
import { NumberInputField } from './NumberInputField';
import dollorIcon from '../../assets/$.svg';
import personIcon from '../../assets/person.svg';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Components/NumberInputField',
  component: NumberInputField,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} satisfies Meta<typeof NumberInputField>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

// const Dollor = (
//   <Image
//     priority
//     src={dollorIcon}
//     alt="Follow us on Twitter"
//     height={20}
//     width={20}
//   />
// );
export const BillInput: Story = {
  args: {
    label: 'Bill',
    iconComponent: <Image priority src={dollorIcon} alt="bill in dollors" />,
  },
};

export const PeopleInput: Story = {
  args: {
    label: 'Number of People',
    iconComponent: <Image priority src={personIcon} alt="number of people" />,
  },
};

export const WithoutIcon: Story = {
  args: {
    label: 'Without icon  ',
  },
};

export const WithError: Story = {
  args: {
    label: 'Without icon  ',
    errorMessage: 'Error message',
  },
};
