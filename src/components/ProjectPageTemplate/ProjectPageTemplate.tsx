import React from 'react';
import { AnimatedPageTransition, ScrollToTop } from '../../components';
import {
  CenteredContent,
  ContentWithMargins,
  HomeLink,
  Logo,
  StyledPageWrapper,
  StyledTextBlock,
  Title,
} from './ProjectPageTemplate.styles';

export interface ProjectPageTemplateProps {
  projectColor: string;
  logo: {
    src: string;
    alt: string;
    width: number;
  };
  title?: ProjectTitle;
  mainText: string;
}

export const ProjectPageTemplate: React.FC<ProjectPageTemplateProps> = ({
  projectColor,
  logo,
  children,
  mainText,
  title,
}) => {
  return (
    <StyledPageWrapper bgColor={projectColor}>
      <ScrollToTop />
      <AnimatedPageTransition
        isVisible={true}
        type="end"
        color={projectColor}
      />
      <CenteredContent>
        <div style={{ width: '100%' }}>
          <HomeLink href="/">&lt; home</HomeLink>
        </div>
        <Logo src={logo.src} alt={logo.alt} width={logo.width} />
        {title && <Title color={title.color}>{title.text}</Title>}
        <StyledTextBlock>
          <p>{mainText}</p>
        </StyledTextBlock>
        {children}
        <ContentWithMargins top="3rem" bottom="0rem">
          <HomeLink href="/">&lt; home</HomeLink>
        </ContentWithMargins>
      </CenteredContent>
    </StyledPageWrapper>
  );
};
