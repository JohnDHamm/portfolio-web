import React from 'react';
import { AnimatedPageTransition } from '../../../components';
import { CadenceCoach_Project } from '../../../data/projects';

const { colors } = CadenceCoach_Project;

export const CadenceCoachPage: React.FC = () => {
  return (
    <div style={{ position: 'relative' }}>
      <AnimatedPageTransition
        isVisible={true}
        type="end"
        color={colors.primary}
      />
      <div>Cadence Coach</div>
    </div>
  );
};
