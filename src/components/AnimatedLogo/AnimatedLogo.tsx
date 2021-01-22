import React from 'react';
import Lottie from 'react-lottie-player';
import logoData from '../../assets/animations/jdhc_logo.json';

interface AnimatedLogoProps {
  /**
   * Should the animation loop?
   */
  loop?: boolean;
  /**
   * Callback when animation has completed
   */
  onComplete?: () => void;
  /**
   * Should the animation autoplay?
   */
  play?: boolean;
}

/**
 *
 * Animated jdhc logo Lottie component
 */
export const AnimatedLogo: React.FC<AnimatedLogoProps> = ({
  loop = false,
  onComplete = () => null,
  play = true,
}) => (
  <Lottie
    animationData={logoData}
    play={play}
    loop={loop}
    onComplete={onComplete}
  />
);
