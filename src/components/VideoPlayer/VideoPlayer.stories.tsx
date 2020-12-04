import React from 'react';
import { VideoPlayer, VideoPlayerProps } from './VideoPlayer';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'components/VideoPlayer',
  component: VideoPlayer,
} as Meta;

const Template: Story<VideoPlayerProps> = (args) => (
  <div
    style={{
      display: 'block',
      width: 'auto',
      height: '800px',
      backgroundColor: 'grey',
      padding: '1rem',
    }}
  >
    <VideoPlayer {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  caption: 'This is the caption for the video. It is a very naice caption.',
  url:
    'https://player.vimeo.com/video/200288091?color=ffffff&title=0&byline=0&portrait=0',
};
