import React from 'react';
import { GitHubButton } from './GitHubButton';

export default {
  title: 'components/GitHubButton',
  component: GitHubButton,
};

export const Default = () => (
  <div
    style={{
      display: 'block',
      width: 'auto',
      height: '400px',
      backgroundColor: 'grey',
      padding: '3rem',
    }}
  >
    <GitHubButton />
  </div>
);
