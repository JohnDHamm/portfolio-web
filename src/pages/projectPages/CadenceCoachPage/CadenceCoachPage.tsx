import React from 'react';
import {
  AppStoreButton,
  GooglePlayButton,
  MobileSlideshow,
  ProjectPageTemplate,
  TechSectionPresenter,
} from '../../../components';
import { ContentWithMargins } from '../styles';
import CClogo from '../../../data/projects/cadenceCoach/cadenceCoach_logo.png';
import { TECH_ICONS } from '../../../assets/images/tech_icons';
import { COLORS } from '../../../styles';
import {
  DidDoDoneMobileCaptions,
  DidDoDoneMobileScreenshots,
} from '../../../data/projects/diddodone/mobile_slideshow';
import { CadenceCoach_Project } from '../../../data/projects';

const { colors } = CadenceCoach_Project;

export const CadenceCoachPage: React.FC = () => {
  return (
    <ProjectPageTemplate
      projectColor={colors.primary}
      logo={{ src: CClogo, alt: 'Cadence Coach logo', width: 420 }}
      mainText="This is where the main text goes about the project"
    >
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
        githubURL="https://github.com/JohnDHamm/cadence-react_native"
      />
      <AppStoreButton url="https://apps.apple.com/us/app/cadence-coach/id1262128524" />
      <GooglePlayButton url="https://play.google.com/store/apps/details?id=com.cadencecoach" />
    </ProjectPageTemplate>
  );
};
