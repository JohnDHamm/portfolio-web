import React from 'react';
import { ContentContainer, ProjectsContainer } from './HomePage.styles';
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
      <ContentContainer>
        <ProjectsContainer>
          <ProjectSection projects={projectsData} onSeeMore={handleMore} />
        </ProjectsContainer>
      </ContentContainer>
    </div>
  );
};
