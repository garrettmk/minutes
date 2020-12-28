import React from 'react';
import Label, { LabelProps } from './';

export default {
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

const Template = (args: LabelProps) => <Label {...args}>The quick brown fox...</Label>;

export const Hero = Template.bind({});
// Hero.args = { variant: 'hero' };

export const Body = Template.bind({});
// Body.args = { variant: 'body' };