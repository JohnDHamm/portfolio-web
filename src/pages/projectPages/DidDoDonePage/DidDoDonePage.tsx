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
} from '../../../data/projects/diddodone';

const { colors } = DidDoDone_Project;

const title: ProjectTitle = {
  color: colors.secondary || 'white',
  text: 'When did I ...? And when do I need to do it again?',
};

export const DidDoDonePage: React.FC = () => {
  return (
    <ProjectPageTemplate
      projectColor={colors.primary}
      logo={{ src: DDDlogo, alt: 'Did Do Done logo', width: 380 }}
      title={title}
      mainText='Have you ever asked yourself when was the last time I...rotated my tires?...changed the A/C filter?...replaced the smoke alarm batteries? Well, Did? Do! Done. provides a way to log those events and set a date for when you need to do them again. Easily search for a saved event by typing in part of the name (e.g. "filter", "tires", etc.) and use custom tags to organize your events and filter the search results (e.g. all events with "car" tag). Did? Do! Done. makes it easy to see the status of your missed tasks or upcoming events, and plan your day/week/month.'
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
