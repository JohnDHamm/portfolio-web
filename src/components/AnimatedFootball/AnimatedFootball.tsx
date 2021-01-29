import React from 'react';
import Lottie from 'react-lottie-player';
import animData from '../../assets/animations/spinning_football.json';

export const AnimatedFootball: React.FC = () => {
  return <Lottie animationData={animData} loop play />;
};
