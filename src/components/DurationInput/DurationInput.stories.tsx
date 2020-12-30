import React from 'react';
import DurationInput from './DurationInput';
import type { Story } from '@storybook/react';
import {Focused} from '../../utilities/Focused';


const story = {
  title: 'DurationInput',
  component: DurationInput,
  args: {
    value: 25
  }
};

export default story;

const Template: Story = (args: any) => <DurationInput {...args}/>;
const FocusedTemplate: Story = (args: any) => <Focused><DurationInput {...args}/></Focused>;

export const Editable: Story = Template.bind({});
Editable.args = {
  readOnly: false,
}

export const EditableFocused: Story = FocusedTemplate.bind({});
EditableFocused.args = {
  readOnly: false,
}

export const ReadOnly: any = Template.bind({});
ReadOnly.args = {
  readOnly: true
};


export const ReadOnlyFocused: Story = FocusedTemplate.bind({});
ReadOnlyFocused.args = {
  readOnly: true
};