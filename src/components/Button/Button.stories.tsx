import React from 'react';
import { Button } from './Button';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'components/Button',
  component: Button,
} as Meta;

const Template: Story = () => (
  <div
    style={{
      display: 'block',
      width: 'auto',
      height: '400px',
      backgroundColor: 'grey',
      padding: '3rem',
    }}
  >
    <Button>TRY THE DEMO</Button>
  </div>
);

export const Default = Template.bind({});
