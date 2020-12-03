import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { DesktopSlideshow, DesktopSlideshowProps } from './DesktopSlideshow';
const TEST01 = require('../../mocks/desktop_screenshots_slideshow_test01.png');
const TEST02 = require('../../mocks/desktop_screenshots_slideshow_test02.png');
const TEST03 = require('../../mocks/desktop_screenshots_slideshow_test03.png');
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

export const Default = Template.bind({});
Default.args = {
  images: [TEST01, TEST02, TEST03],
  captions: CAPTIONS,
};
