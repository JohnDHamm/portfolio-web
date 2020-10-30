import React from 'react';
import { AnimatedPageTransition } from '../../../components';
import { TheBigBoard_Project } from '../../../data/projects';

const { colors } = TheBigBoard_Project;

export const TheBigBoardPage: React.FC = () => {
  return (
    <div
      style={{
        position: 'relative',
        backgroundColor: colors.primary,
        height: '100vh',
      }}
    >
      <AnimatedPageTransition
        isVisible={true}
        type="end"
        color={colors.primary}
      />
      <div
        style={{
          width: '100%',
          height: 100,
          backgroundColor: 'black',
          color: 'white',
        }}
      >
        The Big Board
      </div>
    </div>
  );
};
