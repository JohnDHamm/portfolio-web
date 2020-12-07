import React from 'react';
import GooglePlayBadge from '../../assets/images/google-play-badge.png';

export interface GooglePlayButtonProps {
  /**
   * url for Google Play Store
   */
  url: string;
}

/**
 *
 * Google Play Store Badge with link to app page
 */
export const GooglePlayButton: React.FC<GooglePlayButtonProps> = ({ url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      style={{ margin: '0.5rem 1rem' }}
    >
      <img
        src={GooglePlayBadge}
        alt="Get it on Google Play"
        style={{ width: '120px' }}
      />
    </a>
  );
};
