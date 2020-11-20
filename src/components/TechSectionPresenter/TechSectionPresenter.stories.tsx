import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import {
  TechSectionPresenter,
  TechSectionPresenterProps,
} from './TechSectionPresenter';
import { TECH_ICONS } from '../../assets/images/tech_icons';

export default {
  title: 'components/TechSectionPresenter',
  component: TechSectionPresenter,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

export const Desktop: Story<TechSectionPresenterProps> = (args) => (
  <div style={{ padding: '2rem 4rem', backgroundColor: 'grey' }}>
    <TechSectionPresenter {...args} />
  </div>
);

Desktop.args = {
  githubURL: 'https://github.com/JohnDHamm',
  techIcons: [TECH_ICONS.ADOBE_XD, TECH_ICONS.REACT_NATIVE, TECH_ICONS.LOTTIE],
};

export const Mobile: Story<TechSectionPresenterProps> = (args) => (
  <div>
    <TechSectionPresenter {...args} />
  </div>
);

Mobile.args = {
  color: 'slateblue',
  githubURL: 'https://github.com/JohnDHamm',
  techIcons: [TECH_ICONS.ADOBE_XD, TECH_ICONS.REACT_NATIVE, TECH_ICONS.LOTTIE],
};

Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile2',
  },
};
