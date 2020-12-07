import React from 'react';
import { Container, StyledText } from './Button.styles';

/**
 *
 * Button component
 */
export const Button: React.FC = ({ children }) => {
  return (
    <Container>
      <StyledText>{children}</StyledText>
    </Container>
  );
};
