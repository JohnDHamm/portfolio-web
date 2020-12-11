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
  DidDoDoneMobileCaptions,
  DidDoDoneMobileScreenshots,
} from '../../../data/projects/diddodone/mobile_slideshow';
import { TheBigBoard_Project } from '../../../data/projects';

const DESKTOP_TEST01 = require('../../../mocks/desktop_screenshots_slideshow_test01.png');
const DESKTOP_TEST02 = require('../../../mocks/desktop_screenshots_slideshow_test02.png');
const DESKTOP_TEST03 = require('../../../mocks/desktop_screenshots_slideshow_test03.png');

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
          images={[DESKTOP_TEST01, DESKTOP_TEST02, DESKTOP_TEST03]}
          captions={[
            'This is the caption for image 1.',
            'Another caption.',
            "This is the caption for image 3. Let's make it a longer caption to test how it looks wrapping.",
          ]}
        />
      </ContentWithMargins>
      <ContentWithMargins top="2rem" bottom="4rem">
        <MobileSlideshow
          images={DidDoDoneMobileScreenshots}
          captions={DidDoDoneMobileCaptions}
        />
      </ContentWithMargins>
      <TechSectionPresenter
        color={COLORS.WHITE}
        techIcons={[
          TECH_ICONS.REACT_NATIVE,
          TECH_ICONS.LOTTIE,
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
