import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { AppStoreButton, AppStoreButtonProps } from './AppStoreButton';

export default {
  title: 'components/AppStoreButton',
  component: AppStoreButton,
} as Meta;

const Template: Story<AppStoreButtonProps> = (args) => (
  <div style={{ padding: '2rem', backgroundColor: '#687d25' }}>
    <AppStoreButton {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  url: 'https://itunes.apple.com/us/app/team-timer-basic/id1458017363?mt=8',
};
