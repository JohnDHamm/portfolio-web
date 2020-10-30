import React from 'react';
import { AnimatedPageTransition } from '../../../components';
import { TeamTimer_Project } from '../../../data/projects';

const { colors } = TeamTimer_Project;

export const TeamTimerPage: React.FC = () => {
  return (
    <div style={{ position: 'relative' }}>
      <AnimatedPageTransition
        isVisible={true}
        type="end"
        color={colors.primary}
      />
      <div>Team Timer</div>
    </div>
  );
};
