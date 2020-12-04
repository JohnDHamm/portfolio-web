import React from 'react';
import ReactPlayer from 'react-player';
import { Container, Caption } from './VideoPlayer.styles';

export interface VideoPlayerProps {
  /**
   * caption for video
   */
  caption?: string;
  /**
   * url for video
   */
  url: string;
}

/**
 *
 * Video player component
 */
export const VideoPlayer: React.FC<VideoPlayerProps> = ({ caption, url }) => {
  return (
    <Container>
      <ReactPlayer url={url} width="100%" height="100%" />
      {caption && <Caption>{caption}</Caption>}
    </Container>
  );
};
