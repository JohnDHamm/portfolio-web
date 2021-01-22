import React from 'react';
import { AnimatedLogo } from './AnimatedLogo';

export default {
  title: 'components/AnimatedLogo',
  component: AnimatedLogo,
};

export const Default = () => (
  <div style={{ width: '400px', padding: '1rem', backgroundColor: 'black' }}>
    <AnimatedLogo loop={true} />
  </div>
);
