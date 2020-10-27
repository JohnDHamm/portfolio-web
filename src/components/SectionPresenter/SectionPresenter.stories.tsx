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

export const Desktop: Story<SectionPresenterProps> = (args) => (
  <div style={{ paddingLeft: '8rem' }}>
    <SectionPresenter {...args}>
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
    </SectionPresenter>
  </div>
);

Desktop.args = {
  color: 'darkolivegreen',
  legend: 'LEGEND',
};

export const Mobile: Story<SectionPresenterProps> = (args) => (
  <div>
    <SectionPresenter {...args}>
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
    </SectionPresenter>
  </div>
);

Mobile.args = {
  color: 'slateblue',
  legend: 'MOBILE',
};

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2',
  },
};
