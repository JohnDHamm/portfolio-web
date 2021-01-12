import React from 'react';
import { PageTransition } from '../PageTransition/PageTransition';
import { MotionContainer } from './AnimatedPageTransition.styles';
import { useScroll, useViewport } from '../../hooks';

export interface PageTranstionStartProps {
  isVisible: boolean;
  color?: string;
  type: 'start' | 'end';
}

export const AnimatedPageTransition: React.FC<PageTranstionStartProps> = ({
  isVisible,
  color = 'black',
  type,
}) => {
  const { y } = useScroll();
  const { width, height } = useViewport();
  const skewedOffset = height * 0.267949192431123; // tan(15 deg)

  let initial = {};
  let animate = {};

  switch (type) {
    case 'start':
      initial = {
        x: width + skewedOffset,
      };
      animate = {
        x: -width + skewedOffset,
      };
      break;
    case 'end':
      initial = {
        x: -width + skewedOffset,
      };
      animate = {
        x: -(2 * width) - skewedOffset,
      };
  }

  return (
    <>
      {isVisible && (
        <MotionContainer
          color={color}
          initial={initial}
          animate={animate}
          transition={{ duration: 0.5 }}
          top={y}
        >
          <PageTransition color={color} />
        </MotionContainer>
      )}
    </>
  );
};
