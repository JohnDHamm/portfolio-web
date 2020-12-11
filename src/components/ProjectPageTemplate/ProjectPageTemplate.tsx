import React from 'react';
import {
  AnimatedPageTransition,
  // TechSectionPresenter,
} from '../../components';
import {
  CenteredContent,
  ContentWithMargins,
  HomeLink,
  Logo,
  StyledPageWrapper,
  StyledTextBlock,
} from './ProjectPageTemplate.styles';

export interface ProjectPageTemplateProps {
  projectColor: string;
  logo: {
    src: string;
    alt: string;
    width: number;
  };
  mainText: string;
}

export const ProjectPageTemplate: React.FC<ProjectPageTemplateProps> = ({
  projectColor,
  logo,
  children,
  mainText,
}) => {
  return (
    <StyledPageWrapper bgColor={projectColor}>
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
        <StyledTextBlock>
          <p>{mainText}</p>
        </StyledTextBlock>

        {/* <TechSectionPresenter
          color={COLORS.WHITE}
          techIcons={[
            TECH_ICONS.REACT_NATIVE,
            TECH_ICONS.LOTTIE,
            TECH_ICONS.ADOBE_XD,
          ]}
          githubURL="https://github.com/JohnDHamm/did-do-done-RN-app"
        /> */}
        {children}

        <ContentWithMargins top="3rem" bottom="0rem">
          <HomeLink href="/">&lt; home</HomeLink>
        </ContentWithMargins>
      </CenteredContent>
    </StyledPageWrapper>
  );
};
