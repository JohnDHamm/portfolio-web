import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {
  SectionPresenterVert,
  SectionPresenterVertProps,
} from './SectionPresenterVert';

export default {
  title: 'components/SectionPresenterVert',
  component: SectionPresenterVert,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

export const Default: Story<SectionPresenterVertProps> = (args) => (
  <div style={{ paddingLeft: '2rem' }}>
    <SectionPresenterVert {...args}>
      <div
        style={{
          width: '300px',
          height: '100px',
          margin: '1rem',
          padding: '2rem',
          textAlign: 'center',
        }}
      >
        some children
      </div>
    </SectionPresenterVert>
  </div>
);

Default.args = {
  color: 'darkslateblue',
  legend: 'LEGEND',
};
