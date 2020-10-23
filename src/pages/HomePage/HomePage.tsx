import React from 'react';
import { ProjectsContainer } from './HomePage.styles';
import { ProjectSection } from '../../components';
import { projectsData } from '../../data/projects';
import { useHistory } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const history = useHistory();

  const handleMore = (id: string) => {
    console.log('go to project:', id);
    history.push(`/projects/${id}`);
  };

  return (
    <div>
      <h1>Home</h1>
      <ProjectsContainer>
        <ProjectSection projects={projectsData} onSeeMore={handleMore} />
      </ProjectsContainer>
    </div>
  );
};
