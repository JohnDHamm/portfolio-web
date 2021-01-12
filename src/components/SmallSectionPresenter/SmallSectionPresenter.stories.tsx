import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {
  SmallSectionPresenter,
  SmallSectionPresenterProps,
} from './SmallSectionPresenter';

export default {
  title: 'components/SmallSectionPresenter',
  component: SmallSectionPresenter,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

export const Desktop: Story<SmallSectionPresenterProps> = (args) => (
  <div style={{ paddingLeft: '8rem' }}>
    <SmallSectionPresenter {...args}>
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
    </SmallSectionPresenter>
  </div>
);

Desktop.args = {
  color: 'darkolivegreen',
  legend: 'LEGEND',
};

export const Mobile: Story<SmallSectionPresenterProps> = (args) => (
  <div>
    <SmallSectionPresenter {...args}>
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
    </SmallSectionPresenter>
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
