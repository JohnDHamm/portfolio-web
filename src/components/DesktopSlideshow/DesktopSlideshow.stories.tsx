import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DesktopSlideshow, DesktopSlideshowProps } from './DesktopSlideshow';
const LAPTOP01 = require('../../mocks/desktop_slideshow_laptopScreen_test01.png');
const LAPTOP02 = require('../../mocks/desktop_slideshow_laptopScreen_test02.png');
const LAPTOP03 = require('../../mocks/desktop_slideshow_laptopScreen_test03.png');
const DESKTOP01 = require('../../mocks/desktop_slideshow_desktopScreen_test01.png');
const DESKTOP02 = require('../../mocks/desktop_slideshow_desktopScreen_test02.png');
const DESKTOP03 = require('../../mocks/desktop_slideshow_desktopScreen_test03.png');
const IPHONE01 = require('../../mocks/desktop_slideshow_iphoneScreen_test01.png');
const IPHONE02 = require('../../mocks/desktop_slideshow_iphoneScreen_test02.png');
const CAPTIONS = [
  'This is the caption for image 1.',
  'Another caption.',
  "This is the caption for image 3. Let's make it a longer caption to test how it looks wrapping.",
];

export default {
  title: 'components/DesktopSlideshow',
  component: DesktopSlideshow,
} as Meta;

const Template: Story<DesktopSlideshowProps> = (args) => (
  <div style={{ padding: '2rem', backgroundColor: '#687d25' }}>
    <DesktopSlideshow {...args} />
  </div>
);

export const LaptopScreenshots = Template.bind({});

LaptopScreenshots.args = {
  images: [LAPTOP01, LAPTOP02, LAPTOP03],
  captions: CAPTIONS,
  type: 'laptop',
};

export const DesktopScreenshots = Template.bind({});
DesktopScreenshots.args = {
  images: [DESKTOP01, DESKTOP02, DESKTOP03],
  captions: CAPTIONS,
  type: 'desktop',
};

export const IphoneScreenshots = Template.bind({});
IphoneScreenshots.args = {
  images: [IPHONE01, IPHONE02],
  captions: CAPTIONS,
  type: 'iphone',
};
