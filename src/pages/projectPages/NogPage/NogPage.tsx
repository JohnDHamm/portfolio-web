import React from 'react';
import {
  Button,
  DesktopSlideshow,
  MobileSlideshow,
  ProjectPageTemplate,
  TechSectionPresenter,
  VideoPlayer,
} from '../../../components';
import { ContentWithMargins } from '../styles';
import NogLogo from '../../../data/projects/nog/nog_logo.png';
import { TECH_ICONS } from '../../../assets/images/tech_icons';
import { COLORS } from '../../../styles';
import {
  DidDoDoneMobileCaptions,
  DidDoDoneMobileScreenshots,
} from '../../../data/projects/diddodone';
import { Nog_Project } from '../../../data/projects';
const DESKTOP_TEST01 = require('../../../mocks/desktop_screenshots_slideshow_test01.png');
const DESKTOP_TEST02 = require('../../../mocks/desktop_screenshots_slideshow_test02.png');
const DESKTOP_TEST03 = require('../../../mocks/desktop_screenshots_slideshow_test03.png');

const { colors } = Nog_Project;

export const NogPage: React.FC = () => {
  return (
    <ProjectPageTemplate
      projectColor={colors.primary}
      logo={{ src: NogLogo, alt: 'Nog logo', width: 440 }}
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
          TECH_ICONS.REACT,
          TECH_ICONS.NODE_EXPRESS,
          TECH_ICONS.REACT_NATIVE,
          TECH_ICONS.EXPO,
          TECH_ICONS.LOTTIE,
        ]}
        githubURL="https://github.com/JohnDHamm/nog-react"
      />
      <ContentWithMargins top="1rem" bottom="1rem">
        <a
          href="http://demo.nogworld.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none' }}
        >
          <Button>TRY THE DEMO</Button>
        </a>
      </ContentWithMargins>
      <ContentWithMargins top="2rem" bottom="4rem">
        <VideoPlayer
          url="https://player.vimeo.com/video/200288091?color=ffffff&title=0&byline=0&portrait=0"
          caption="Here's some caption for the video."
        />
      </ContentWithMargins>
      <TechSectionPresenter
        color={COLORS.WHITE}
        techIcons={[TECH_ICONS.ARDUINO, TECH_ICONS.MIT_APP_INVENTOR]}
        githubURL="https://github.com/JohnDHamm/nog-arduino"
      />
    </ProjectPageTemplate>
  );
};
