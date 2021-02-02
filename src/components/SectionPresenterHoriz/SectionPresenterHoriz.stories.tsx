import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {
  SectionPresenterHoriz,
  SectionPresenterHorizProps,
} from './SectionPresenterHoriz';

export default {
  title: 'components/SectionPresenterHoriz',
  component: SectionPresenterHoriz,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

export const Default: Story<SectionPresenterHorizProps> = (args) => (
  <div style={{ paddingLeft: '8rem' }}>
    <SectionPresenterHoriz {...args}>
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
    </SectionPresenterHoriz>
  </div>
);

Default.args = {
  color: 'darkolivegreen',
  legend: 'LEGEND',
};
