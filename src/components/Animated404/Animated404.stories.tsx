import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Animated404, Animated404Props } from './Animated404';

export default {
  title: 'components/Animated404',
  component: Animated404,
} as Meta;

const Template: Story<Animated404Props> = (args) => (
  <div style={{ width: '400px', padding: '1rem', backgroundColor: 'black' }}>
    <Animated404 {...args} />
  </div>
);

export const Broken = Template.bind({});
Broken.args = {
  phase: 'broken',
};

export const Fixed = Template.bind({});
Fixed.args = {
  phase: 'fixed',
};
