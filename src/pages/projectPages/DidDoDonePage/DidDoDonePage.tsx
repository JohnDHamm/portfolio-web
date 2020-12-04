import React from 'react';
import {
  AnimatedPageTransition,
  // DesktopSlideshow,
  MobileSlideshow,
  TechSectionPresenter,
  VideoPlayer,
} from '../../../components';
import {
  CenteredContent,
  ContentWithMargins,
  Logo,
  StyledPageWrapper,
  StyledTextBlock,
} from '../styles';
import { DidDoDone_Project } from '../../../data/projects';
import DDDlogo from '../../../data/projects/diddodone/diddodone_logo.png';
import { TECH_ICONS } from '../../../assets/images/tech_icons';
import { COLORS } from '../../../styles';
import {
  DidDoDoneMobileCaptions,
  DidDoDoneMobileScreenshots,
} from '../../../data/projects/diddodone/mobile_slideshow';

// const DESKTOP_TEST01 = require('../../../mocks/desktop_screenshots_slideshow_test01.png');
// const DESKTOP_TEST02 = require('../../../mocks/desktop_screenshots_slideshow_test02.png');
// const DESKTOP_TEST03 = require('../../../mocks/desktop_screenshots_slideshow_test03.png');

const { colors } = DidDoDone_Project;

export const DidDoDonePage: React.FC = () => {
  return (
    <StyledPageWrapper bgColor={colors.primary}>
      <AnimatedPageTransition
        isVisible={true}
        type="end"
        color={colors.primary}
      />
      <CenteredContent>
        <Logo src={DDDlogo} alt="logo" />
        <StyledTextBlock>
          <p>Did Do Done</p>
        </StyledTextBlock>
        <StyledTextBlock>
          <p>
            Of course I'm worried. And you should be, too. Lando Calrissian and
            poor Chewbacca never returned from this awful place. Artoo whistles
            timidly. Don't be so sure. If I told you half the things I've heard
            about this Jabba the Hutt, you'd probably short-circuit. Artoo, are
            you sure this is the right place? I better knock, I suppose. There
            doesn't seem to be anyone there. Let's go back and tell Master Luke.
          </p>
        </StyledTextBlock>
        {/* <DesktopSlideshow
          images={[DESKTOP_TEST01, DESKTOP_TEST02, DESKTOP_TEST03]}
          captions={[
            'This is the caption for image 1.',
            'Another caption.',
            "This is the caption for image 3. Let's make it a longer caption to test how it looks wrapping.",
          ]}
        /> */}
        <ContentWithMargins top="2rem" bottom="4rem">
          <MobileSlideshow
            images={DidDoDoneMobileScreenshots}
            captions={DidDoDoneMobileCaptions}
          />
        </ContentWithMargins>
        <ContentWithMargins top="2rem" bottom="4rem">
          <VideoPlayer
            url="https://player.vimeo.com/video/200288091?color=ffffff&title=0&byline=0&portrait=0"
            caption="Here's some caption for the video."
          />
        </ContentWithMargins>
        <TechSectionPresenter
          color={COLORS.WHITE}
          techIcons={[
            TECH_ICONS.REACT_NATIVE,
            TECH_ICONS.LOTTIE,
            TECH_ICONS.ADOBE_XD,
          ]}
          githubURL="https://github.com/JohnDHamm/did-do-done-RN-app"
        ></TechSectionPresenter>
      </CenteredContent>
    </StyledPageWrapper>
  );
};
