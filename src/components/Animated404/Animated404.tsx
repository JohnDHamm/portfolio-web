import React from 'react';
import Lottie from 'react-lottie-player';
import animData from '../../assets/animations/404_page.json';

declare global {
  type Animated404Phase = 'broken' | 'fixed';
}

export interface Animated404Props {
  /**
   * Callback when animation has completed
   */
  onComplete?: () => void;
  /**
   * Should the animation autoplay?
   */
  play?: boolean;
  /**
   * Phase of the animation
   */
  phase: Animated404Phase;
}

/**
 *
 * Animated 404 Lottie component
 */
export const Animated404: React.FC<Animated404Props> = ({
  onComplete = () => null,
  phase,
  play = true,
}) => {
  const phaseSegments = [
    [0, 71],
    [71, 143],
  ];

  return (
    <Lottie
      animationData={animData}
      loop={false}
      play={play}
      onComplete={onComplete}
      segments={phase === 'broken' ? phaseSegments[0] : phaseSegments[1]}
    />
  );
};
