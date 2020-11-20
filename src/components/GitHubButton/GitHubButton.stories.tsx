import React from 'react';
import { GitHubButton } from './GitHubButton';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'components/GitHubButton',
  component: GitHubButton,
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
    <GitHubButton />
  </div>
);

export const Desktop = Template.bind({});
export const Mobile = Template.bind({});

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2',
  },
};
