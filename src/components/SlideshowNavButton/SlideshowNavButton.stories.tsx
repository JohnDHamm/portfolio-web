import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {
  SlideshowNavButton,
  SlideshowNavButtonProps,
} from './SlideshowNavButton';

export default {
  title: 'components/SlideshowNavButton',
  component: SlideshowNavButton,
} as Meta;

const Template: Story<SlideshowNavButtonProps> = (args) => (
  <div>
    <SlideshowNavButton {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  width: 35,
  onClick: () => console.log('clicked SlideshowNavButton'),
};
