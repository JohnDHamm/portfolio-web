import React from 'react';
import { AnimatedPageTransition } from '../../../components';
import { Nog_Project } from '../../../data/projects';

const { colors } = Nog_Project;

export const NogPage: React.FC = () => {
  return (
    <div style={{ position: 'relative' }}>
      <AnimatedPageTransition
        isVisible={true}
        type="end"
        color={colors.primary}
      />
      <div>Nog</div>
    </div>
  );
};
