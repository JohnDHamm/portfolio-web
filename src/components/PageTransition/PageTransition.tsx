import React from 'react';
import { useViewport } from '../../hooks';
import { Container, ThickLine, ThinLine } from './PageTransition.styles';

export interface PageTranstionProps {
  color?: string;
}

export const PageTransition: React.FC<PageTranstionProps> = ({
  color = 'black',
}) => {
  let { width, height } = useViewport();

  // only for storybook story (can't use custom hook)
  if (width === 0) {
    width = 400;
  }
  if (height === 0) {
    height = 400;
  }

  return (
    <Container color={color} width={width * 2} height={height}>
      <div style={{ display: 'flex' }}>
        <ThickLine height={height} />
        <ThinLine height={height} />
      </div>
      <div>
        <ThinLine height={height} />
      </div>
    </Container>
  );
};
