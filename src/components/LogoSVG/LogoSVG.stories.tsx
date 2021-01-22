import React from 'react';
import { LogoSVG, LogoSVGProps } from './LogoSVG';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'components/LogoSVG',
  component: LogoSVG,
} as Meta;

const Template: Story<LogoSVGProps> = (args) => (
  <div
    style={{
      width: '400px',
      backgroundColor: '#000',
      padding: '2rem',
    }}
  >
    <LogoSVG {...args} />
  </div>
);

export const Default = Template.bind({});
export const CustomColors = Template.bind({});
CustomColors.args = {
  stacheFill: 'gray',
  stacheLine: 'yellow',
  nameColor: 'blue',
  dColor: 'orange',
  codesColor: 'pink',
};
