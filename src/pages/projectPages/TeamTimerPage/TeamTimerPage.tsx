import React from 'react';
import {
  AppStoreButton,
  MobileSlideshow,
  ProjectPageTemplate,
  TechSectionPresenter,
} from '../../../components';
import { ContentWithMargins } from '../styles';
import TTlogo from '../../../data/projects/teamtimer/teamTimer_logo.png';
import { TECH_ICONS } from '../../../assets/images/tech_icons';
import { COLORS } from '../../../styles';
import {
  TeamTimerMobileCaptions,
  TeamTimerMobileScreenshots,
} from '../../../data/projects/teamtimer';
import { TeamTimer_Project } from '../../../data/projects';

const { colors } = TeamTimer_Project;

const title: ProjectTitle = {
  color: colors.secondary || 'white',
  text: 'Multi-athlete lap timer',
};

export const TeamTimerPage: React.FC = () => {
  return (
    <ProjectPageTemplate
      projectColor={colors.primary}
      logo={{ src: TTlogo, alt: 'Team Timer logo', width: 360 }}
      title={title}
      mainText="Team Timer is an app developed from necessity. As a coach for a youth triathlon team, I and the other coaches struggled with a way to record athletes' workouts during a training session. Very often we ran a workout where all the athletes of a particlar training group start together and complete the same number of laps. Despite utilizing multiple stopwatches, clipboards, and other methods, recording each athlete's lap time, while also trying to convey to each athlete their progress, became frustratingly difficult. Thus, Team Timer was born!"
    >
      <ContentWithMargins top="2rem" bottom="4rem">
        <MobileSlideshow
          images={TeamTimerMobileScreenshots}
          captions={TeamTimerMobileCaptions}
        />
      </ContentWithMargins>
      <TechSectionPresenter
        color={COLORS.WHITE}
        techIcons={[
          TECH_ICONS.REACT_NATIVE,
          TECH_ICONS.EXPO,
          TECH_ICONS.ADOBE_XD,
        ]}
        githubURL="https://github.com/JohnDHamm/team-timer-pro"
      />
      <AppStoreButton url="https://apps.apple.com/us/app/team-timer-pro/id1458066942" />
    </ProjectPageTemplate>
  );
};
