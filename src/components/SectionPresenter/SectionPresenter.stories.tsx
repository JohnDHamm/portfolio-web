import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { SectionPresenter, SectionPresenterProps } from './SectionPresenter';

export default {
  title: 'components/SectionPresenter',
  component: SectionPresenter,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<SectionPresenterProps> = (args) => (
  <div style={{ paddingLeft: '8rem' }}>
    <SectionPresenter {...args}>
      <div
        style={{
          width: '300px',
          height: '100px',
          border: '1px dashed grey',
          transform: 'skewX(-15deg) translateX(20px)',
          margin: '1rem',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        some children
      </div>
    </SectionPresenter>
  </div>
);

export const Default = Template.bind({});

Default.args = {
  color: 'darkolivegreen',
  legend: 'LEGEND',
};
