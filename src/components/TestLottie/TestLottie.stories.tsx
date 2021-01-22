import React from 'react';
import { TestLottie } from './TestLottie';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'components/TestLottie',
  component: TestLottie,
} as Meta;

const Template: Story = (args) => (
  <div style={{ width: '50%' }}>
    <TestLottie {...args} />
  </div>
);

export const Default = Template.bind({});
