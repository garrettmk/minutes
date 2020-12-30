import React from 'react';
import Label, { LabelProps } from './';
import type { Story } from '@storybook/react';

const story = {
  title: 'Label',
  component: Label,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['hero', 'body']
      }
    },

    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary']
      }
    }
  }
};

export default story;

const Template = (args: any) => <Label {...args}>The quick brown fox...</Label>;

export const Hero: Story = Template.bind({});
Hero.args = { 
  variant: 'hero'
};

export const Body: Story = Template.bind({});
Body.args = {
  variant: 'body'
};