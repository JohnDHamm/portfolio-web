import React from 'react';
import { ProjectsContainer } from './HomePage.styles';
import { ProjectSection } from '../../components';
import { projectsData } from '../../data/projects';

export const HomePage: React.FC = () => {
  React.useEffect(() => {}, []);
  return (
    <div>
      <h1>Home</h1>
      <ProjectsContainer>
        <ProjectSection projects={projectsData} />
      </ProjectsContainer>
    </div>
  );
};
