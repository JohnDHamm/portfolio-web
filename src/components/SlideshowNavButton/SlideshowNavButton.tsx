import React from 'react';
import { StyledIcon } from './SlideshowNavButton.styles';
import { COLORS } from '../../styles';

export interface SlideshowNavButtonProps {
  /**
   * Width of component
   */
  width: number;
  /**
   * Callback for clicking on button
   */
  onClick?: () => void;
}

/**
 * Navigation button component for slideshows
 */
export const SlideshowNavButton: React.FC<SlideshowNavButtonProps> = ({
  width,
  onClick,
}) => {
  return (
    <StyledIcon viewBox="0 0 164.57 164.57" width={width} onClick={onClick}>
      <g>
        <circle fill={COLORS.WHITE} cx="82.28" cy="82.28" r="81.28" />
        <path
          fill={COLORS.BLACK}
          d="M395.56,225.52a80.28,80.28,0,1,1-80.28,80.28,80.38,80.38,0,0,1,80.28-80.28m0-2a82.28,82.28,0,1,0,82.29,82.28,82.28,82.28,0,0,0-82.29-82.28Z"
          transform="translate(-313.28 -223.52)"
        />
      </g>
      <polygon
        fill={COLORS.BLACK}
        points="58.46 45.6 58.46 119.05 124.25 82.39 58.46 45.6"
      />
    </StyledIcon>
  );
};
