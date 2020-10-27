import React from 'react';
import { LayoutSwitch, LayoutSwitchProps } from './LayoutSwitch';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'components/LayoutSwitch',
  component: LayoutSwitch,
} as Meta;

const Template: Story<LayoutSwitchProps> = (args) => <LayoutSwitch {...args} />;

export const Default = Template.bind({});

Default.args = {
  desktopComponent: (
    <div>This renders on desktop (greater than 1024px screen width)</div>
  ),
  mobileComponent: (
    <div>This renders on mobile/tablet (less than 1025px screen width)</div>
  ),
};
