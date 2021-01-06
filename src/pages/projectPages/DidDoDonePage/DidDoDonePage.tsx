import React from 'react';
import {
  AppStoreButton,
  MobileSlideshow,
  ProjectPageTemplate,
  TechSectionPresenter,
} from '../../../components';
import { ContentWithMargins } from '../styles';
import { DidDoDone_Project } from '../../../data/projects';
import DDDlogo from '../../../data/projects/diddodone/diddodone_logo.png';
import { TECH_ICONS } from '../../../assets/images/tech_icons';
import { COLORS } from '../../../styles';
import {
  DidDoDoneMobileCaptions,
  DidDoDoneMobileScreenshots,
} from '../../../data/projects/diddodone/mobile_slideshow';

const { colors } = DidDoDone_Project;

export const DidDoDonePage: React.FC = () => {
  return (
    <ProjectPageTemplate
      projectColor={colors.primary}
      logo={{ src: DDDlogo, alt: 'Did Do Done logo', width: 380 }}
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
          TECH_ICONS.EXPO,
          TECH_ICONS.LOTTIE,
          TECH_ICONS.ADOBE_XD,
        ]}
        githubURL="https://github.com/JohnDHamm/did-do-done-RN-app"
      />
      <AppStoreButton url="https://apps.apple.com/us/app/did-do-done/id1522794964" />
    </ProjectPageTemplate>
  );
};
