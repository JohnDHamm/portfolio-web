import React from 'react';
import { AnimatedPageTransition } from '../../../components';
import { DidDoDone_Project } from '../../../data/projects';

const { colors } = DidDoDone_Project;

export const DidDoDonePage: React.FC = () => {
  return (
    <div style={{ position: 'relative' }}>
      <AnimatedPageTransition
        isVisible={true}
        type="end"
        color={colors.primary}
      />
      <div>Did Do Done</div>
    </div>
  );
};
