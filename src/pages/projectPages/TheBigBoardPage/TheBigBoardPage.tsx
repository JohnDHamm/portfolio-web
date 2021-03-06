import React from 'react';
import { ButtonContainer, FootballWrapper } from './TheBigBoardPage.styles';
import {
  AnimatedFootball,
  Button,
  DesktopSlideshow,
  GitHubButton,
  MobileSlideshow,
  ProjectPageTemplate,
  TechSectionPresenter,
} from '../../../components';
import { ContentWithMargins } from '../styles';
import BBlogo from '../../../data/projects/thebigboard/thebigboard_logo.png';
import { TECH_ICONS } from '../../../assets/images/tech_icons';
import { COLORS } from '../../../styles';
import {
  BigBoardDesktopCaptions,
  BigBoardDesktopScreenshots,
  BigBoardMobileCaptions,
  BigBoardMobileScreenshots,
} from '../../../data/projects/thebigboard';
import { TheBigBoard_Project } from '../../../data/projects';

const { colors } = TheBigBoard_Project;

const title: ProjectTitle = {
  color: colors.secondary || 'white',
  text: 'Fantasy football draft party',
};

export const TheBigBoardPage: React.FC = () => {
  return (
    <ProjectPageTemplate
      projectColor={colors.primary}
      logo={{ src: BBlogo, alt: 'The Big Board logo', width: 400 }}
      title={title}
      mainText="Draft day in fantasy football...the fun...the competition...the embarassing smack talk...that's why we play! And The Big Board web app delivers a draft day experience that rivals the pros!"
    >
      <ContentWithMargins top="2rem" bottom="5rem">
        <DesktopSlideshow
          images={BigBoardDesktopScreenshots}
          captions={BigBoardDesktopCaptions}
          type="laptop"
        />
      </ContentWithMargins>
      <ContentWithMargins top="2rem" bottom="4rem">
        <MobileSlideshow
          images={BigBoardMobileScreenshots}
          captions={BigBoardMobileCaptions}
        />
      </ContentWithMargins>
      <TechSectionPresenter
        color={COLORS.WHITE}
        techIcons={[
          TECH_ICONS.REACT,
          TECH_ICONS.NODE_EXPRESS,
          TECH_ICONS.MONGO_DB,
          TECH_ICONS.SOCKET_IO,
          TECH_ICONS.ADOBE_XD,
        ]}
      />
      <ContentWithMargins top="1rem" bottom="2rem">
        <a
          href="https://github.com/JohnDHamm/the-big-board-app"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <GitHubButton />
        </a>
      </ContentWithMargins>
      <ContentWithMargins top="1rem" bottom="1rem">
        <ButtonContainer>
          <FootballWrapper>
            <AnimatedFootball />
          </FootballWrapper>
          <a
            href="http://demo.thebigboard.fans"
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <Button>TRY THE DEMO</Button>
          </a>
        </ButtonContainer>
      </ContentWithMargins>
    </ProjectPageTemplate>
  );
};
