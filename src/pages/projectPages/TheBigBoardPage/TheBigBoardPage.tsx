import React from 'react';
import {
  Button,
  DesktopSlideshow,
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

export const TheBigBoardPage: React.FC = () => {
  return (
    <ProjectPageTemplate
      projectColor={colors.primary}
      logo={{ src: BBlogo, alt: 'The Big Board logo', width: 400 }}
      mainText="This is where the main text goes about the project"
    >
      <ContentWithMargins top="2rem" bottom="4rem">
        <DesktopSlideshow
          images={BigBoardDesktopScreenshots}
          captions={BigBoardDesktopCaptions}
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
        githubURL="https://github.com/JohnDHamm/the-big-board-app"
      />
      <ContentWithMargins top="1rem" bottom="1rem">
        <a
          href="http://demo.thebigboard.fans"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <Button>TRY THE DEMO</Button>
        </a>
      </ContentWithMargins>
    </ProjectPageTemplate>
  );
};
