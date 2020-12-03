import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { MobileSlideshow, MobileSlideshowProps } from './MobileSlideshow';
const TEST01 = require('../../mocks/mobile_slideshow_test01.png');
const TEST02 = require('../../mocks/mobile_slideshow_test02.png');
const TEST03 = require('../../mocks/mobile_slideshow_test03.png');
const TEST04 = require('../../mocks/mobile_slideshow_test04.png');
const CAPTIONS = [
  'This is the caption for image 1.',
  'Another caption.',
  "This is the caption for image 3. Let's make it a longer caption to test how it looks wrapping.",
  'And yet another caption for the 4th screen again, too.',
];

export default {
  title: 'components/MobileSlideshow',
  component: MobileSlideshow,
} as Meta;

const Template: Story<MobileSlideshowProps> = (args) => (
  <div style={{ padding: '2rem', backgroundColor: '#687d25' }}>
    <MobileSlideshow {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  images: [TEST01, TEST02, TEST03, TEST04],
  captions: CAPTIONS,
};
