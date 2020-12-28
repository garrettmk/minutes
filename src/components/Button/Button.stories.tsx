import React from 'react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button
};

const Template = (args: any) => <Button {...args}>Click Here</Button>;

export const Basic = Template.bind({});