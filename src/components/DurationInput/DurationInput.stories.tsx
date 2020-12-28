import React from 'react';
import DurationInput from './';

export default {
  title: 'DurationInput',
  component: DurationInput,
  args: {
    value: 25
  }
};

const Template = (args: any) => <DurationInput {...args}/>;

export const Editable = Template.bind({});

export const ReadOnly: any = Template.bind({});
ReadOnly.args = {
  readOnly: true
};
