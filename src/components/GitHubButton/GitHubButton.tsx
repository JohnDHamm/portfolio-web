import React from 'react';
import {
  Container,
  ContentBlock,
  GitHubLogo,
  StyledText,
} from './GitHubButton.styles';
import GH_Logo from '../../assets/images/GitHub-Mark-120px-plus.png';

/**
 *
 * GitHub button component
 */
export const GitHubButton: React.FC = () => {
  return (
    <Container>
      <ContentBlock>
        <StyledText>see on</StyledText>
        <GitHubLogo src={GH_Logo} alt="GitHub" />
        <StyledText>GitHub</StyledText>
      </ContentBlock>
    </Container>
  );
};
