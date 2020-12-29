import React from 'react';
import type { Story } from '@storybook/react';
import CircularProgress from './';

const story = {
  title: 'CircularProgress',
  component: CircularProgress,
};

export default story;


const Template = (args: any) => <CircularProgress {...args}/>;

export const Empty: Story = Template.bind({});
Empty.args = {
  ratio: 0
};

export const OneQuarter: Story = Template.bind({});
OneQuarter.args = {
  ratio: 0.25
};

export const OneHalf: Story = Template.bind({});
OneHalf.args = {
  ratio: 0.5
};

export const ThreeQuarters: Story = Template.bind({});
ThreeQuarters.args = {
  ratio: 0.75
};

export const Full: Story = Template.bind({});
Full.args = {
  ratio: 1
};