import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { GooglePlayButton, GooglePlayButtonProps } from './GooglePlayButton';

export default {
  title: 'components/GooglePlayButton',
  component: GooglePlayButton,
} as Meta;

const Template: Story<GooglePlayButtonProps> = (args) => (
  <div style={{ padding: '2rem', backgroundColor: '#687d25' }}>
    <GooglePlayButton {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  url: 'https://play.google.com/store/apps/details?id=com.cadencecoach',
};
