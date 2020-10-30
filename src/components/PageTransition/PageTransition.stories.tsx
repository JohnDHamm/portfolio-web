import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { PageTransition, PageTranstionProps } from './PageTransition';

export default {
  title: 'components/PageTransition',
  component: PageTransition,
} as Meta;

const Template: Story<PageTranstionProps> = (args) => (
  <PageTransition {...args} />
);

export const Default = Template.bind({});

export const CustomColor = Template.bind({});
CustomColor.args = { color: '#bada55' };
