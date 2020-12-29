import React from 'react';
import Button from './Button';
import type { Story } from '@storybook/react';

const story = {
  title: 'Button',
  component: Button
};

export default story;


const Template = (args: any) => <Button {...args}>Click Here</Button>;

export const Default: Story = Template.bind({});
Default.args = {};


export const Hovered: Story = Template.bind({});
Hovered.args = {
  className: '__hover',
};


export const Active: Story = Template.bind({});
Active.args = {
  className: '__active'
}