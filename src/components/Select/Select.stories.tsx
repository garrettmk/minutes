import React from 'react';
import Select from './';
import type { Story } from '@storybook/react';

const _default = {
  title: 'Select',
  component: Select,
}

export default _default;

const Template = (args: any) => <Select {...args}/>;

export const Empty: Story = Template.bind({});
Empty.args = {};

export const WithItems: Story = Template.bind({});
WithItems.args = {
  children: [
    <option>First</option>,
    <option>Second</option>,
    <option>Third</option>
  ],
}