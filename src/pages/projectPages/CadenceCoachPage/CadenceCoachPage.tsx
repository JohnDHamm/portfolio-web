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
  CadenceCoachMobileCaptions,
  CadenceCoachMobileScreenshots,
} from '../../../data/projects/cadenceCoach';
import { CadenceCoach_Project } from '../../../data/projects';

const { colors } = CadenceCoach_Project;

const title: ProjectTitle = {
  color: colors.secondary || 'white',
  text: 'Cadence measurement with a tap of the finger',
};

export const CadenceCoachPage: React.FC = () => {
  return (
    <ProjectPageTemplate
      projectColor={colors.primary}
      logo={{ src: CClogo, alt: 'Cadence Coach logo', width: 420 }}
      title={title}
      mainText="Enter your athletes' names into the app. When you're ready to start a workout, select an athlete to measure and tap the screen with each stroke or step. Cadence Coach calculates the average cadence with each tap, for as long as you decide, and updates the display to show you the current average. Select another athlete and repeat. When the workout is done, select the results list to see the latest averages for all athletes that have been measured. Results are displayed as both seconds per stroke and revolutions per minute."
    >
      <ContentWithMargins top="2rem" bottom="4rem">
        <MobileSlideshow
          images={CadenceCoachMobileScreenshots}
          captions={CadenceCoachMobileCaptions}
        />
      </ContentWithMargins>
      <TechSectionPresenter
        color={COLORS.WHITE}
        techIcons={[TECH_ICONS.REACT_NATIVE, TECH_ICONS.REDUX, TECH_ICONS.EXPO]}
        githubURL="https://github.com/JohnDHamm/cadence-react_native"
      />
      <AppStoreButton url="https://apps.apple.com/us/app/cadence-coach/id1262128524" />
      <GooglePlayButton url="https://play.google.com/store/apps/details?id=com.cadencecoach" />
    </ProjectPageTemplate>
  );
};
